import React, {
    AnchorHTMLAttributes,
    DetailedHTMLFactory,
    RefObject,
    ReactType,
    FC,
    ReactNode,
    MouseEventHandler,
} from 'react';
import { cn } from '@bem-react/classname';

import './Link.scss';

export type ContainerElement = HTMLSpanElement | HTMLAnchorElement;

type ReactLinkElement = DetailedHTMLFactory<AnchorHTMLAttributes<ContainerElement>, ContainerElement>;

export interface ILinkProps {
    /**
     * Адрес ссылки. Если указано, то компонент будет оформлен тегом `a`, в противном случае — `span`.
     *
     * Значение игнорируется при использовании модификатора `pseudo`
     */
    href?: string;

    /**
     * Выключение интерактивности ссылки.
     * Состояние, при котором ссылка отображается, но недоступна для действий пользователя
     */
    disabled?: boolean;

    /**
     * Ссылка на корневой DOM-элемент компонента
     */
    innerRef?: RefObject<ContainerElement>;

    /**
     * Ссылка на DOM-элемент нативного контрола
     */
    controlRef?: RefObject<ContainerElement>;

    /**
     * Указание для отрисовки компонента
     */
    as?: ReactType;

    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * Содержимое ссылки
     */
    children?: ReactNode;

    /**
     * HTML-атрибут `title`
     */
    title?: string;

    /**
     * HTML-атрибут `target`
     */
    target?: string;

    /**
     * HTML-атрибут `rel`
     */
    rel?: string;

    /**
     * HTML-атрибут `tabIndex`. Определяет последовательность перехода между ссылками при нажатии на кнопку Tab
     */
    tabIndex?: number;

    /**
     * Обработчик события клика.
     */
    onClick?: MouseEventHandler<ContainerElement>;
}

export const cnLink = cn('Link');

/**
 * Компонент для создания ссылок.
 * @param {ILinkProps} props
 */
export const Link: FC<ILinkProps> = ({
    href,
    target,
    disabled,
    rel,
    tabIndex,
    innerRef,
    controlRef,
    children,
    // Извлекаем свойства, т.к. они не нужны на DOM узле
    // @ts-ignore
    pseudo: _pseudo,
    // @ts-ignore
    view: _view,
    as,
    ...props
}) => {
    const className = cnLink(null, [props.className]);
    const Component = as || ((href ? 'a' : ('span' as any)) as ReactLinkElement);
    let relationship = rel;

    if (target === '_blank' && rel !== undefined && rel.indexOf('noopener') === -1) {
        // Пользовательский атрибут имеет больший приоритет
        relationship = `${rel} noopener`;
    }

    return (
        <Component
            {...props}
            ref={innerRef || controlRef}
            href={href}
            aria-disabled={disabled}
            target={target}
            rel={relationship}
            tabIndex={disabled ? -1 : tabIndex}
            className={className}
        >
            {children}
        </Component>
    );
};

Link.displayName = cnLink();
