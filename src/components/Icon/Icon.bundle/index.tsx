import { FC } from "react";
import { compose, composeU } from "@bem-react/core";

import { Icon as IconBase, IIconProps as IIconBaseProps } from "../Icon";

// _glyph
import { withGlyphCart } from "../_glyph/Icon_glyph_cart";
import { withGlyphClose } from "../_glyph/Icon_glyph_close";
import { withGlyphCross } from "../_glyph/Icon_glyph_cross";
import { withGlyphFavorite } from "../_glyph/Icon_glyph_favorite";
import { withGlyphfavoriteFull } from "../_glyph/Icon_glyph_favorite-full";
import { withGlyphLocation } from "../_glyph/Icon_glyph_location";
import { withGlyphBell } from "../_glyph/Icon_glyph_bell";
import { withGlyphBookmark } from "../_glyph/Icon_glyph_bookmark";
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
import { withGlyphArrowLeft } from "../_glyph/Icon_glyph_arrow-left";
import { withGlyphArrowForward } from "../_glyph/Icon_glyph_arrow-forward";
import { withGlyphArrowBack } from "../_glyph/Icon_glyph_arrow-back";
import { withGlyphArrowBottom } from "../_glyph/Icon_glyph_arrow-bottom";
import { withGlyphTypeArrow } from "../_glyph/Icon_glyph_type-arrow";
import { withGlyphCaretsV } from "../_glyph/Icon_glyph_carets-v";
import { withGlyphCourse } from "../_glyph/Icon_glyph_course";
import { withGlyphEdit } from "../_glyph/Icon_glyph_edit";
import { withGlyphCalendar } from "../_glyph/Icon_glyph_calendar";
import { withGlyphComment } from "../_glyph/Icon_glyph_comment";
import { withGlyphSchool } from "../_glyph/Icon_glyph_school";
import { withGlyphShare } from "../_glyph/Icon_glyph_share";
import { withGlyphHelp } from "../_glyph/Icon_glyph_help";
import { withGlyphLike } from "../_glyph/Icon_glyph_like";
import { withGlyphCreateCourse } from "../_glyph/Icon_glyph_create-course";
import { withGlyphAuthenticAccount } from "../_glyph/Icon_glyph_authentic-account";
import { withGlyphTypeTick } from "../_glyph/Icon_glyph_type-tick";
import { withGlyphTypeIndeterminate } from "../_glyph/Icon_glyph_type-indeterminate";

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
        | "favorite-full"
        | "location"
        | "help"
        | "bell"
        | "bookmark"
        | "menu"
        | "edit"
        | "profile"
        | "plus"
        | "minus"
        | "search"
        | "x-sign"
        | "close"
        | "cross"
        | "calendar"
        | "sort"
        | "info"
        | "trash"
        | "carets-v"
        | "type-arrow"
        | "arrow-right"
        | "arrow-left"
        | "arrow-back"
        | "arrow-forward"
        | "arrow-bottom"
        | "course"
        | "school"
        | "authentic-account"
        | "like"
        | "share"
        | "comment"
        | "type-tick"
        | "type-indeterminate"
        | "create-course";

    social?: "youtube" | "vk" | "telegram" | "rss" | "twitter" | "github" | "facebook" | "instagram";
}

export const Icon = compose(
    composeU(
        withGlyphTypeArrow,
        withGlyphCaretsV,
        withGlyphCart,
        withGlyphFavorite,
        withGlyphfavoriteFull,
        withGlyphLocation,
        withGlyphBell,
        withGlyphBookmark,
        withGlyphMenu,
        withGlyphProfile,
        withGlyphPlus,
        withGlyphMinus,
        withGlyphSearch,
        withGlyphXSign,
        withGlyphEdit,
        withGlyphAuthenticAccount,
        withGlyphLike,
        withGlyphInfo,
        withGlyphTrash,
        withGlyphClose,
        withGlyphCross,
        withGlyphSort,
        withGlyphTick,
        withGlyphHelp,
        withGlyphCheck,
        withGlyphArrowRight,
        withGlyphArrowLeft,
        withGlyphArrowForward,
        withGlyphArrowBack,
        withGlyphArrowBottom,
        withGlyphCourse,
        withGlyphCalendar,
        withGlyphComment,
        withGlyphSchool,
        withGlyphShare,
        withGlyphCreateCourse,
        withGlyphTypeTick,
        withGlyphTypeIndeterminate
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
