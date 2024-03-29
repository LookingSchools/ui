import React, { ComponentClass, PureComponent } from "react";
import * as Cookies from "js-cookie";
import { compose } from "@bem-react/core";
import { cn } from "@bem-react/classname";
import { Typography } from "../Typography/Typography";
import { Button as ButtonBase } from "../Button/Button.bundle";
import { Icon as IconBase } from "../Icon/Icon.bundle";
import { withGlyphInfo } from "../Icon/_glyph/Icon_glyph_info";
import { Link as LinkBase } from "../Link/Link.bundle";
import { withThemeDefault } from "../Link/_theme/Link_theme_default";

// _size
import { withSizeM } from "../Button/_size/Button_size_m";
// _theme
import { withThemeDefault as withButtonThemeDefault } from "../Button/_theme/Button_theme_default";

const Button = compose(withSizeM, withButtonThemeDefault)(ButtonBase);

const Icon = compose(withGlyphInfo)(IconBase);

const Link = compose(withThemeDefault)(LinkBase);

import "./Cookie.scss";

export const cnCookie = cn("Cookie");

export interface ICookieProps {
    /**
     * Дополнительный класс.
     */
    className?: string;

    /**
     * Заголовок.
     */
    text?: string;

    /**
     * Текст на кнопке.
     */
    button?: string;

    /**
     * Активное состояние блока.
     * Состояние, при котором блок отображается
     */
    visible?: boolean;
    
    /**
     * Нужно ли показывать ссылку
     */
    linkVisible?: boolean;
}

export interface ICookieState {
    isVisible?: boolean;
}

/**
 * Компонент для создания кнопок.
 * @param {ICookieProps} props
 */
export const Cookie = class extends PureComponent<ICookieProps, ICookieState> {
    static displayName = cnCookie();

    readonly state = {
        isVisible: Cookies.get("ls-cookie") ? false : true,
    };

    render() {
        const { className, text, button, visible = this.state.isVisible, linkVisible = true, ...props } = this.props as ICookieProps;

        return (
            <div {...props} className={cnCookie({ visible }, [className])}>
                <div className={cnCookie("Control")}>
                    <Icon glyph="info" size="m" className={cnCookie("Icon")} />
                    <Typography className={cnCookie("Message")}>
                        {text}
                        {' '}
                        {linkVisible && <span>Подробности в <Link theme="default" href="https://google.com">политике конфиденциальности</Link>.</span>}
                    </Typography>
                    <Button size="m" theme="default" className="Cookie-Button" onClick={this.onClick}>
                        {button}
                    </Button>
                </div>
            </div>
        );
    }

    protected onClick = () => {
        Cookies.set("ls-cookie", "1", { expires: 7 });
        this.setState({
            isVisible: false,
        });
    };
} as ComponentClass<ICookieProps>;
