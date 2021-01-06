import React from 'react';
import { withBemMod, compose } from '@bem-react/core';

import { withZIndex } from '../../../hocs/withZIndex/withZIndex';

import { Modal as ModalBase } from '../../Modal/Modal.bundle';
import { DatepickerProps } from '../Datepicker';
import { cnDatepicker } from '../Datepicker';

import './Datepicker_container_popup.scss';
import { cnCalendar } from '../../Calendar/Calendar';

const Modal = compose(withZIndex)(ModalBase);

export interface IDatepickerContainerPopupProps {
    visible?: boolean;
    container?: 'popup';
}

export const withContainerPopup = withBemMod<IDatepickerContainerPopupProps, DatepickerProps>(
    cnDatepicker(),
    { container: 'popup' },
    WrappedComponent => {
        return props => {
            const { visible, className } = props;

            return (
                <Modal visible={visible} theme="default" onClose={props.onClose}>
                    <WrappedComponent
                        className={cnCalendar({ container: 'popup' }, [className])}
                        {...props}
                    />
                </Modal>
            );
        };
    },
);
