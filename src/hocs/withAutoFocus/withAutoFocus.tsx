import React, { ComponentType, RefObject, PureComponent, createRef } from "react";

import { getDisplayName } from "../../lib/getDisplayName";

export interface IWithAutoFocusProps {
    /** Активное состояние. */
    focused?: boolean;
    /** Ссылка на нативный контрол. */
    controlRef?: RefObject<HTMLElement>;
}

export const withAutoFocus = <TProps extends IWithAutoFocusProps>(WrappedComponent: ComponentType<TProps>) =>
    class WithAutoFocus extends PureComponent<TProps> {
        static displayName = `withAutoFocus(${getDisplayName(WrappedComponent)})`;

        readonly controlRef = createRef<HTMLElement>();

        componentDidMount() {
            if (this.props.controlRef !== undefined) {
                // @ts-ignore (Объект readonly только в рамках интерфейса)
                this.props.controlRef.current = this.controlRef.current;
            }
        }

        componentDidUpdate(prevProps: TProps) {
            if (this.controlRef.current !== null && this.props.focused !== prevProps.focused) {
                if (this.props.focused) {
                    this.controlRef.current.focus();
                } else {
                    this.controlRef.current.blur();
                }
            }
        }

        render() {
            return <WrappedComponent {...this.props} controlRef={this.controlRef} />;
        }
    };
