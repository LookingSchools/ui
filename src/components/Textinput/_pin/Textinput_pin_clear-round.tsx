import { withBemMod } from '@bem-react/core';

import { ITextinputProps, cnTextinput } from '../Textinput';
import '../_hasPin/Textinput_hasPin.scss';
import './Textinput_pin_clear-round.scss';

export interface ITextinputPinClearRoundProps {
    /**
     * Форма текстового поля.
     */
    pin?: 'clear-round';
}

/**
 * Модификатор, отвечающий за форму текстового поля.
 * Используется для группировки текстового поля с другими блоками, например, с кнопками.
 * @param {ITextinputPinClearRoundProps} props
 */
export const withPinClearRound = withBemMod<ITextinputPinClearRoundProps, ITextinputProps>(cnTextinput(), {
    pin: 'clear-round',
});
