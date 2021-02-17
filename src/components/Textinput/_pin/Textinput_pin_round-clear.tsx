import { withBemMod } from '@bem-react/core';

import { ITextinputProps, cnTextinput } from '../Textinput';
import '../_hasPin/Textinput_hasPin.scss';
import './Textinput_pin_round-clear.scss';

export interface ITextinputPinRoundClearProps {
    /**
     * Форма текстового поля.
     */
    pin?: 'round-clear';
}

/**
 * Модификатор, отвечающий за форму текстового поля.
 * Используется для группировки текстового поля с другими блоками, например, с кнопками.
 * @param {ITextinputPinRoundClearProps} props
 */
export const withPinRoundClear = withBemMod<ITextinputPinRoundClearProps, ITextinputProps>(cnTextinput(), {
    pin: 'round-clear',
});
