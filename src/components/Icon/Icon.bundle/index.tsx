import { FC } from "react";
import { compose, composeU } from "@bem-react/core";

import { Icon as IconBase, IIconProps as IIconBaseProps } from "../Icon";

// _glyph
import { withGlyphCart } from "../_glyph/Icon_glyph_cart";
import { withGlyphClose } from "../_glyph/Icon_glyph_close";
import { withGlyphCross } from "../_glyph/Icon_glyph_cross";
import { withGlyphFavorite } from "../_glyph/Icon_glyph_favorite";
import { withGlyphMenu } from "../_glyph/Icon_glyph_menu";
import { withGlyphProfile } from "../_glyph/Icon_glyph_profile";
import { withGlyphPlus } from "../_glyph/Icon_glyph_plus";
import { withGlyphMinus } from "../_glyph/Icon_glyph_minus";
import { withGlyphSearch } from "../_glyph/Icon_glyph_search";
import { withGlyphSort } from "../_glyph/Icon_glyph_sort";
import { withGlyphTick } from "../_glyph/Icon_glyph_tick";
import { withGlyphCheck } from "../_glyph/Icon_glyph_check";
import { withGlyphXSign } from "../_glyph/Icon_glyph_x-sign";
import { withGlyphInfo } from "../_glyph/Icon_glyph_info";
import { withGlyphTrash } from "../_glyph/Icon_glyph_trash";
import { withGlyphArrowRight } from "../_glyph/Icon_glyph_arrow-right";
import { withGlyphTypeArrow } from "../_glyph/Icon_glyph_type-arrow";
import { withGlyphCaretsV } from "../_glyph/Icon_glyph_carets-v";
import { withGlyphCourse } from "../_glyph/Icon_glyph_course";
import { withGlyphCreateCourse } from "../_glyph/Icon_glyph_create-course";

// social
import { withSocialYouTube } from "../_social/Icon_social_youtube";
import { withSocialVK } from "../_social/Icon_social_vk";
import { withSocialTelegram } from "../_social/Icon_social_telegram";
import { withSocialTwitter } from "../_social/Icon_social_twitter";
import { withSocialRSS } from "../_social/Icon_social_rss";
import { withSocialGitHub } from "../_social/Icon_social_github";
import { withSocialFacebook } from "../_social/Icon_social_facebook";
import { withSocialInstagram } from "../_social/Icon_social_instagram";

export * from "../Icon";

export interface IIconProps extends IIconBaseProps {
    glyph?:
        | "cart"
        | "favorite"
        | "menu"
        | "profile"
        | "plus"
        | "minus"
        | "search"
        | "x-sign"
        | "close"
        | "cross"
        | "sort"
        | "info"
        | "trash"
        | "carets-v"
        | "type-arrow"
        | "arrow-right"
        | "course"
        | "create-course";

    social?: "youtube" | "vk" | "telegram" | "rss" | "twitter" | "github" | "facebook" | "instagram";
}

export const Icon = compose(
    composeU(
        withGlyphTypeArrow,
        withGlyphCaretsV,
        withGlyphCart,
        withGlyphFavorite,
        withGlyphMenu,
        withGlyphProfile,
        withGlyphPlus,
        withGlyphMinus,
        withGlyphSearch,
        withGlyphXSign,
        withGlyphInfo,
        withGlyphTrash,
        withGlyphClose,
        withGlyphCross,
        withGlyphSort,
        withGlyphTick,
        withGlyphCheck,
        withGlyphArrowRight,
        withGlyphCourse,
        withGlyphCreateCourse
    ),
    composeU(
        withSocialYouTube,
        withSocialVK,
        withSocialTelegram,
        withSocialRSS,
        withSocialTwitter,
        withSocialGitHub,
        withSocialInstagram,
        withSocialFacebook
    )
)(IconBase) as FC<IIconProps>;
