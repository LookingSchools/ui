import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { compose, composeU } from "@bem-react/core";

import { Button } from "../../Button/Button.bundle";

import { Datepicker as DatepickerBase } from "../Datepicker";
import { withContainerPopup } from "../_container/Datepicker_container_popup";
import { withContainerDrawer } from "../_container/Datepicker_container_drawer";

import { withTypeSingle } from "../_type/Datepicker_type_single";
import { withTypeRange } from "../_type/Datepicker_type_range";

export default {
    title: "Datepicker/Popup",
    decorators: [withKnobs],
    parameters: {
        docs: {
            readme: require("../Datepicker.md"),
        }
    },
};

const Datepicker = compose(composeU(withTypeSingle, withTypeRange), withContainerPopup, withContainerDrawer)(DatepickerBase);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DatePicker = (props: any) => {
    const date = new Date();
    const date2 = new Date(date.getFullYear(), date.getMonth() + 2, 10);

    const [datepickerVisible, setDatepickerVisible] = useState(false);

    return (
        <div>
            <Button
                theme="pseudo"
                size="m"
                // eslint-disable-next-line react/jsx-no-bind
                onClick={() => setDatepickerVisible((state) => !state)}
            >
                Datepicker type: {props.type} container: {props.container}
            </Button>
            <Datepicker
                visible={datepickerVisible}
                type={props.type}
                container={props.container}
                selected={props.type === "range" ? [undefined, undefined] : undefined}
                borders={[date, date2]}
                // eslint-disable-next-line react/jsx-no-bind
                onClose={() => setDatepickerVisible(false)}
                // eslint-disable-next-line react/jsx-no-bind
                onChange={(date) => {
                    setDatepickerVisible(false);
                    alert(date);
                }}
            />
        </div>
    );
};

export const Popup = () => {
    return (
        <div style={{ display: "grid", gap: "10px" }}>
            <DatePicker type="single" container="popup" />
            <DatePicker type="range" container="popup" />
        </div>
    );
};


