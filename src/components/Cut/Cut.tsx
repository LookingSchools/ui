import React, { ReactNode } from 'react';
import { compose } from '@bem-react/core';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

import { Link as LinkBase } from '../Link/Link.bundle';
import { withThemeDefault } from '../Link/_theme/Link_theme_default';

import './Cut.scss';

export const cnCut = cn('Cut');

const Link = compose(withThemeDefault)(LinkBase);

/**
 * Параметры для Cut.
 */
export interface ICutProps extends IClassNameProps {
    /** Кол-во видимых строк */
    lines?: number;
    /** Высота строки в пикселях */
    lineHeight?: number;
    /** Фиксируем ли высоту */
    fixedHeight?: boolean;
    /** Флаг разрешает разбивать слова при обрезании текста */
    breakWords?: boolean;
    /** флаг отключает многоточие */
    noEllipsis?: boolean;
    /** элемент типа «Читать ещё» */
    more?: string | React.ReactElement;
    /** текст типа «скрыть» */
    hide?: string;
    /** видимая часть текста */
    visible?: string | ReactNode;
    /** невидимая часть текста */
    invisible?: string | ReactNode;
    onOpen?: () => void;
    /** флаг раскрывает кат по клику в любую часть текста */
    clickableContent?: boolean;
    /** элемент, который отображается в самом конце:
       1)показывается, если нет скрытого текста
       2)скрывается под катом иначе */
    afterContent?: React.ReactElement;
    /* размер */
    size?: 's' | 'm' | 'l';
}

/**
 * Компонент обрезает текст по кол-ву строк.
 * Умеет прятать текст за клик «Читать ещё»
 */
export class Cut extends React.PureComponent<ICutProps> {
    protected lineHeight = 20;
    protected lines = 4;
    protected linkMore: React.RefObject<HTMLAnchorElement> = React.createRef();

    state = {
        open: false,
    };

    constructor(props: ICutProps) {
        super(props);

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.tryOpenClickableContent = this.tryOpenClickableContent.bind(this);
    }

    render() {
        const { breakWords, className, children, lines, visible, invisible, clickableContent } = this.props;
        const oneLine = lines === 1;

        if (!visible) {
            return (
                <div className={cnCut({ breakWords, oneLine }, [className])} style={this.inlineStyle()}>
                    {children}
                </div>
            );
        }

        if (!invisible) {
            return (
                <div className={cnCut({ breakWords, oneLine }, [className])}>
                    {visible}
                    {this.renderAfterContent()}
                </div>
            );
        }

        const resultClassName = cnCut(
            {
                breakWords,
                open: this.state.open,
                ellipsis: !this.props.noEllipsis,
                clickableContent: !this.state.open && clickableContent,
            },
            [className]
        );

        return (
            <div className={resultClassName} onClick={this.tryOpenClickableContent}>
                <span className={cnCut('Visible')}>{visible}</span>
                {this.renderInvisibleText()}
                {this.renderMoreLink()}
            </div>
        );
    }

    renderInvisibleText() {
        return (
            <span className={cnCut('Invisible')}>
                {this.props.invisible}
                {this.renderAfterContent()}
                {this.renderHideLink()}
            </span>
        );
    }

    renderHideLink() {
        const { hide } = this.props;

        if (!hide) return null;

        return (
            <span className={cnCut('Hide')}>
                <Link theme="default" onClick={this.close}>
                    {' ' + hide}
                </Link>
            </span>
        );
    }

    renderMoreLink() {
        const { more } = this.props;
        const type = typeof this.props.visible === 'string' ? 'text' : 'content';
        let moreContent: ICutProps['more'] = ' Еще';

        if (more) {
            moreContent = more;
        }

        const Component = type === 'text' ? 'span' : 'div';

        return (
            <Component className={cnCut('More', { type })}>
                <Link theme="default" onClick={this.open}>
                    {moreContent}
                </Link>
            </Component>
        );
    }

    renderAfterContent() {
        const { afterContent } = this.props;

        if (!afterContent) {
            return null;
        }

        // Чтобы не было лишнего пробела, когда нет afterContent
        return <> {afterContent}</>;
    }

    open(event: React.MouseEvent<HTMLAnchorElement | HTMLDivElement, MouseEvent>) {
        event.stopPropagation();

        this.setState({ open: true });

        if (this.props.onOpen) {
            this.props.onOpen();
        }
    }

    close(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.stopPropagation();

        this.setState({ open: false });
    }

    tryOpenClickableContent(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const { clickableContent } = this.props;

        if (!this.state.open && clickableContent) {
            this.open(event);
        }
    }

    inlineStyle() {
        // const lineHeight = this.props.lineHeight || this.lineHeight;
        const lines = this.props.lines || this.lines;
        // const maxHeight = lines * lineHeight;
        // const style: React.CSSProperties = { maxHeight: maxHeight };
        const style: React.CSSProperties = {};

        // if (this.props.fixedHeight) {
        //     style.minHeight = maxHeight;
        // }

        if (lines > 1 && !this.props.noEllipsis) {
            style.WebkitLineClamp = lines;
        }

        return style;
    }
}
