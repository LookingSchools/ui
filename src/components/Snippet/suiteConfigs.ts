import { IDiscountBadgeProps } from "../DiscountBadge/DiscountBadge.bundle";
import { IPriceProps } from "../Price/Price";
import { IRatingProps } from "../Rating/Rating";

/**
 * small - для карусели на карточке
 * medium - для листовой выдачи
 */
export enum SuiteName {
  small,
  medium
}

export type TSuiteName = "small" | "medium";

/** Конфигрурация сьюта - используется для дефолтных значений */
export interface ISuiteConfigs {
  maxWidth?: number;
  picture: {
    // fillParent?: ImageProps['fillParent'],
  };
  discount: {
    /** размер бэйджа скидки */
    size: IDiscountBadgeProps["size"];
  };
  price: {
    /** размер цены */
    size: IPriceProps["size"];
  };
  /** настройки для рейтинга/отзывов */
  rating: {
    /** размер рейтинга */
    size: IRatingProps["size"];
  };
  title: {
    /** размер заголовка - компонент текста */
    lineHeight: number;
  };
  showDiscount?: boolean;
  showPrice?: boolean;
  showRating?: boolean;
  showTitle?: boolean;
}

/** Конфигрурации для каждой темы */
const configList: { [key in keyof typeof SuiteName]: ISuiteConfigs } = {
  small: {
    picture: {
      // fillParent: true,
    },
    discount: {
      size: "m"
    },
    price: {
      size: "s"
    },
    rating: {
      size: "s"
    },
    title: {
      lineHeight: 16
    }
  },
  medium: {
    picture: {
      // fillParent: true,
    },
    discount: {
      size: "m"
    },
    price: {
      size: "m"
    },
    rating: {
      size: "l"
    },
    title: {
      lineHeight: 18
    }
  }
};

/** Получает настройки сьюта */
export const getConfig = (configName: TSuiteName): ISuiteConfigs =>
  configList[configName];
