import { withBemMod } from "@bem-react/core";

import { cnSpin } from "../Spin";
import "./Spin_size_xxs.scss";

export interface ISpinSizeXXSProps {
    /**
     * Размер индикатора загрузки.
     */
    size?: "xxs";
}

/**
 * Модификатор, отвечающий за размер индикатора загрузки.
 * @param {ISpinSizeXXSProps} props
 */
export const withSizeXXS = withBemMod<ISpinSizeXXSProps>(cnSpin(), {
    size: "xxs",
});
