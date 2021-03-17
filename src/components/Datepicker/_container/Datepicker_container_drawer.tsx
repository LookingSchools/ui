import React from "react";
import { withBemMod, compose } from "@bem-react/core";

import { Drawer } from "../../Drawer/Drawer.bundle";
import { DatepickerProps } from "../Datepicker";
import { cnDatepicker } from "../Datepicker";

import "./Datepicker_container_drawer.scss";
import { cnCalendar } from "../../Calendar/Calendar";

export interface IDatepickerContainerDrawerProps {
    visible?: boolean;
    container?: "drawer";
}

export const withContainerDrawer = withBemMod<IDatepickerContainerDrawerProps, DatepickerProps>(
    cnDatepicker(),
    { container: "drawer" },
    (WrappedComponent) => {
        return (props) => {
            const { visible, className } = props;

            return (
                <Modal visible={visible} theme="default" onClose={props.onClose}>
                    <WrappedComponent className={cnCalendar({ container: "drawer" }, [className])} {...props} />
                </Modal>
            );
        };
    }
);
