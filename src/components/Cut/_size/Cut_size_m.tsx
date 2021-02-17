import { withBemMod } from "@bem-react/core";

import { cnCut } from "../Cut";
import "./Cut_size_m.scss";

export interface ICutSizeMProps {
    /**
     * Размер
     */
    size?: "m";
}

/**
 * Модификатор, отвечающий за размер.
 * @param {ICutSizeMProps} props
 */
export const withSizeM = withBemMod<ICutSizeMProps>(cnCut(), { size: "m" });
