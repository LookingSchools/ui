import React, { useState } from 'react';
import { storiesOf } from "@storybook/react";
import { withKnobs } from '@storybook/addon-knobs';
import { withDocs } from "@storybook-addons/docs";
import { compose, composeU } from '@bem-react/core';

import { Button } from '../Button/Button.bundle';

import { Datepicker as DatepickerBase } from './Datepicker';
import { withContainerPopup } from './_container/Datepicker_container_popup';

import { withTypeSingle } from './_type/Datepicker_type_single';
import { withTypeRange } from './_type/Datepicker_type_range';

const Datepicker = compose(
    composeU(withTypeSingle, withTypeRange),
    withContainerPopup,
)(DatepickerBase);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DatePicker = (props: any) => {
    const date = new Date('2021-01-10');
    const date2 = new Date(date.getFullYear(), date.getMonth() + 4, 10);

    const [datepickerVisible, setDatepickerVisible] = useState(false);

    return (
        <div>
            <Button
                theme="pseudo"
                size="m"
                // eslint-disable-next-line react/jsx-no-bind
                onClick={() => setDatepickerVisible(state => !state)}
            >
                Datepicker type: {props.type} container: {props.container}
            </Button>
            <Datepicker
                visible={datepickerVisible}
                type={props.type}
                container={props.container}
                selected={props.type === 'range' ? [undefined, undefined] : undefined}
                borders={[date, date2]}
                // eslint-disable-next-line react/jsx-no-bind
                onClose={() => setDatepickerVisible(false)}
                // eslint-disable-next-line react/jsx-no-bind
                onChange={date => {
                    setDatepickerVisible(false);
                    alert(date);
                }}
            />
        </div>
    );
};

storiesOf("LookingSchools/Components|Datepicker/", module)
  .addDecorator(withKnobs)
  .addDecorator(
    withDocs({
      readme: {
        content: require("./Datepicker.md").default
      }
    })
  )
  .add("playground", () => {
    return (
        <div style={{ display: 'grid', gap: '10px' }}>
            <DatePicker type="single" container="popup" />
            <DatePicker type="range" container="popup" />
        </div>
    );
  });


