import React, {
  RefObject,
  ReactNode,
  FC,
  CSSProperties,
  useEffect,
  useState
} from "react";
import { createPortal } from "react-dom";
import { cn } from "@bem-react/classname";
import { PopupTail as Tail } from "./Tail/Popup-Tail";

import { canUseDOM } from "../../lib/canUseDOM";
import { mergeRefs } from "../../lib/mergeRefs";

import "./Popup.scss";

export type Direction =
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"
  | "top-left"
  | "top-center"
  | "top-right"
  | "right-top"
  | "right-center"
  | "right-bottom"
  | "left-top"
  | "left-center"
  | "left-bottom";

export type Position = {
  top: number;
  left: number;
};

export type OptionalPosition = {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
};

export type DrawingParams = {
  direction: Direction;
  height: number;
  left: number;
  top: number;
  width: number;
};

export interface IPopupProps {
  /**
   * Дополнительный контент после содержимого попапа
   */
  addonAfter?: ReactNode;

  /**
   * Дополнительный контент перед содержимым попапа
   */
  addonBefore?: ReactNode;

  /**
   * Задает направление хвостика. Например, если указано значение `bottom-center` — хвостик выходит из центра снизу.
   *
   * Свойство `direction` необходимо использовать без модификатора `_target_anchor`.
   * Чтобы задать направление раскрытия для попапа с модификатором `_target_anchor`,
   * используйте свойство `directions`
   */
  direction?: Direction;

  /**
   * Вызывает дополнительный рендер после создания
   */
  forceRender?: boolean;

  /**
   * Включает/отключает хвостик у попапа
   */
  hasTail?: boolean;

  /**
   * Ссылка на корневой DOM-элемент компонента
   */
  innerRef?: RefObject<HTMLDivElement>;

  /**
   * Сохраняет контейнер в DOM после создания
   *
   * @default true
   */
  keepMounted?: boolean;

  /**
   * Задает позицию попапа. Свойство `position` необходимо использовать без модификатора `_target_anchor`
   */
  position?: OptionalPosition;

  /**
   * Ссылка на DOM-элемент, в котором размещается попап
   *
   * Важно, чтобы контейнер имел `position: relative` для корректного позициоинирования.
   *
   * @default document.body
   */
  scope?: RefObject<HTMLElement>;

  /**
   * Задает позицию хвостика. Свойство `tailPosition` необходимо использовать без модификатора `_target_anchor`.
   */
  tailPosition?: Position;

  /**
   * Ссылка на DOM-элемент хвостика
   */
  tailRef?: RefObject<HTMLDivElement>;

  /**
   * Задает размер хвостика
   */
  tailSize?: number;

  /**
   * Ссылка на DOM-элемент, в котором не отслеживаются нажатия. Используется с `withOutsideClick`
   */
  targetRef?: RefObject<HTMLElement>;

  /**
   * Делает попап видимым
   */
  visible?: boolean;

  /**
   * Задает слой `z-index`
   */
  zIndex?: number;

  /**
   * Дополнительный класс
   */
  className?: string;

  /**
   * Html атрибут `style`
   */
  style?: CSSProperties;
}

export const cnPopup = cn("Popup");

/**
 * Компонент для создания всплывающего окна (попапа).
 * @param {IPopupProps} props
 */
export const Popup: FC<IPopupProps> = ({
  addonAfter,
  addonBefore,
  children,
  className,
  direction,
  forceRender,
  hasTail,
  innerRef,
  keepMounted = true,
  position,
  scope = { current: canUseDOM() ? document.body : null },
  style,
  tailPosition,
  tailRef,
  tailSize,
  targetRef,
  visible,
  zIndex,
  // Извлекаем свойства, т.к. они не нужны на DOM узле
  // @ts-ignore
  theme: _theme,
  // @ts-ignore
  view: _view,
  ...props
}) => {
  const [hasUpdated, forceUpdate] = useState(false);

  useEffect(() => {
    if (!hasUpdated && forceRender) {
      forceUpdate(true);
    }
  }, []);

  useEffect(() => {
    mergeRefs(innerRef, targetRef);
  }, [innerRef, targetRef]);

  if ((!visible && !keepMounted) || !canUseDOM() || scope.current === null) {
    return null;
  }

  return createPortal(
    <div
      {...props}
      className={cnPopup({ visible, direction }, [className])}
      ref={innerRef}
      style={{ ...style, ...position, zIndex }}
    >
      {addonBefore}
      {children}
      {addonAfter}
      {hasTail && (
        <Tail
          innerRef={tailRef}
          style={{ ...tailPosition, height: tailSize, width: tailSize }}
        />
      )}
    </div>,
    scope.current
  );
};

Popup.displayName = cnPopup();
