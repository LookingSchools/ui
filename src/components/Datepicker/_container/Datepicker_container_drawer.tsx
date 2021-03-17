import React from "react";
import { withBemMod } from "@bem-react/core";

import { Drawer } from "../../Drawer/Drawer.bundle";
import { DatepickerProps } from "../Datepicker";
import { cnDatepicker } from "../Datepicker";

import "./Datepicker_container_drawer.scss";
import { cnCalendar } from "../../Calendar/Calendar";

export interface IDatepickerContainerDrawerProps {
    visible?: boolean;
    container?: "drawer";
}

const animation = {
    tension: 230,
    friction: 24,
    disabled: false,
    dragImmediate: false,
};

export const withContainerDrawer = withBemMod<IDatepickerContainerDrawerProps, DatepickerProps>(
    cnDatepicker(),
    { container: "drawer" },
    (WrappedComponent) => {
        return (props) => {
            const { visible, className } = props;

            return (
                <Drawer visible={visible} animation={animation} theme="default" onClose={props.onClose}>
                    <WrappedComponent className={cnCalendar({ container: "drawer" }, [className])} {...props} />
                </Drawer>
            );
        };
    }
);
