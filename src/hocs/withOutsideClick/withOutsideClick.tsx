// TODO: https://st.yandex-team.ru/ISL-6338

import React, { ComponentType, RefObject, PureComponent, createRef } from 'react';

import { isKeyCode, Keys } from '../../lib/keyboard';
import { getDisplayName } from '../../lib/getDisplayName';
import { mergeRefs } from '../../lib/mergeRefs';
import { canUseDOM } from '../../lib/canUseDOM';

let POINTER_DOWN = 'pointerdown';
let POINTER_UP = 'pointerup';

if (canUseDOM()) {
    if (!(window as any).PointerEvent) {
        POINTER_DOWN = 'mousedown';
        POINTER_UP = 'mouseup';
        if (!(window as any).MouseEvent) {
            POINTER_UP = 'click';
        }
    }
}

export interface IWrappedComponentProps {
    /**
     * Видимость компонента.
     */
    visible?: boolean;

    /**
     * Ссылка на DOM элемент, в рамках которого не нужно отслеживать клик.
     */
    targetRef?: RefObject<HTMLElement>;
}

export interface IWithOutsideClickProps extends IWrappedComponentProps {
    /**
     * Обработчик вызывающийся после того, как произошло нажатие на escape.
     */
    onEscapeKeyDown?: (event: KeyboardEvent) => void;

    /**
     * Обработчик вызывающийся после того, как произошел клик вне компонента.
     */
    onOutsideClick?: (event: MouseEvent) => void;
}

export const withOutsideClick = <TProps extends IWrappedComponentProps>(WrappedComponent: ComponentType<TProps>) => {
    class WithOutsideClick extends PureComponent<TProps & IWithOutsideClickProps> {
        static displayName = `withOutsideClick(${getDisplayName(WrappedComponent)})`;

        /**
         * Контейнер с ссылкой на DOM элемент оборачиваемого компонента.
         */
        readonly targetRef = createRef<HTMLElement>();

        private pointerDownEventSource: HTMLElement | null = null;

        componentDidMount() {
            this.forwardRefs();

            if (this.props.visible) {
                this.subscribeToEvents();
            }
        }

        componentWillUnmount() {
            this.unsubscribeFromEvents();
        }

        componentDidUpdate(prevProps: IWithOutsideClickProps) {
            this.forwardRefs();

            if (!prevProps.visible && this.props.visible) {
                this.subscribeToEvents();
            } else if (prevProps.visible && !this.props.visible) {
                this.unsubscribeFromEvents();
            }
        }

        render() {
            const { onEscapeKeyDown, onOutsideClick, ...props } = this.props;

            return <WrappedComponent {...(props as TProps)} targetRef={this.targetRef} />;
        }

        /**
         * Копирует ссылки на DOM узлы для дальнейшего использования.
         */
        forwardRefs() {
            mergeRefs(this.targetRef, this.props.targetRef);
        }

        subscribeToEvents() {
            document.addEventListener(POINTER_DOWN, this.onPointerDown as EventListener);
            document.addEventListener(POINTER_UP, this.onPointerUp as EventListener);
            document.addEventListener('keydown', this.onKeyDown);
        }

        unsubscribeFromEvents() {
            document.removeEventListener(POINTER_DOWN, this.onPointerDown as EventListener);
            document.removeEventListener(POINTER_UP, this.onPointerUp as EventListener);
            document.removeEventListener('keydown', this.onKeyDown);
        }

        onPointerDown = (event: PointerEvent) => {
            this.pointerDownEventSource = event.target as HTMLElement;
        };

        onPointerUp = (event: PointerEvent) => {
            if (
                this.props.onOutsideClick !== undefined &&
                this.targetRef.current !== null &&
                !this.targetRef.current.contains(this.pointerDownEventSource) && // mouseDown не в targetRef
                !this.targetRef.current.contains(event.target as HTMLElement) // mouseUp не в targetRef
            ) {
                this.props.onOutsideClick(event);
            }
            this.pointerDownEventSource = null;
        };

        onKeyDown = (event: KeyboardEvent) => {
            if (this.props.onEscapeKeyDown !== undefined && isKeyCode(event.keyCode, [Keys.ESC])) {
                this.props.onEscapeKeyDown(event);
            }
        };
    }

    return WithOutsideClick as ComponentType<TProps & IWithOutsideClickProps>;
};
