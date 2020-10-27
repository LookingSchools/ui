import React, {
  FC,
  MouseEventHandler,
  KeyboardEventHandler,
  RefObject,
  FocusEventHandler
} from "react";

import { cnTumbler } from "../Tumbler";
import "./Tumbler-Button.scss";

type TumblerButtonProps = {
  checked: boolean;
  innerRef: RefObject<HTMLButtonElement>;
  labelledBy?: string;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  onClick: MouseEventHandler<HTMLButtonElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
  onKeyDown: KeyboardEventHandler<HTMLButtonElement>;
  onKeyUp?: KeyboardEventHandler<HTMLButtonElement>;
  tabIndex?: number;
};

export const TumblerButton: FC<TumblerButtonProps> = ({
  checked,
  children,
  innerRef,
  labelledBy,
  onBlur,
  onClick,
  onFocus,
  onKeyDown,
  tabIndex
}) => (
  <button
    aria-labelledby={labelledBy}
    aria-pressed={checked}
    className={cnTumbler("Button")}
    onBlur={onBlur}
    onClick={onClick}
    onFocus={onFocus}
    onKeyDown={onKeyDown}
    ref={innerRef}
    tabIndex={tabIndex}
    type="button"
  >
    {children}
  </button>
);
