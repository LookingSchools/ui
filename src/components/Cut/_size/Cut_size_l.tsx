import { withBemMod } from "@bem-react/core";

import { cnCut } from "../Cut";
import "./Cut_size_l.scss";

export interface ICutSizeLProps {
    /**
     * Размер
     */
    size?: "l";
}

/**
 * Модификатор, отвечающий за размер.
 * @param {ICutSizeLProps} props
 */
export const withSizeL = withBemMod<ICutSizeLProps>(cnCut(), { size: "l" });
