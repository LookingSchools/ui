import { withBemMod } from "@bem-react/core";

import { ITextinputProps, cnTextinput } from "../Textinput";
import "../_hasPin/Textinput_hasPin.scss";
import "./Textinput_pin_clear-clear.scss";

export interface ITextinputPinClearClearProps {
    /**
     * Форма текстового поля.
     */
    pin?: "clear-clear";
}

/**
 * Модификатор, отвечающий за форму текстового поля.
 * Используется для группировки текстового поля с другими блоками, например, с кнопками.
 * @param {ITextinputPinClearClearProps} props
 */
export const withPinClearClear = withBemMod<ITextinputPinClearClearProps, ITextinputProps>(cnTextinput(), {
    pin: "clear-clear",
});
