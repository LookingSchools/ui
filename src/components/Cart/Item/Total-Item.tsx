import React, { FC } from "react";
import { cnCart } from "../Cart";
import { Typography } from "../../Typography/Typography";
import "./Total-Item.scss";

export interface TotalItemProps {
  name?: string;
  value?: string;
  className?: string;
}

export const TotalItem: FC<TotalItemProps> = ({ name, value, className }) => (
  <dl className={cnCart("TotalItem", [className])}>
    <dt className={cnCart("Name")}>
      <span className={cnCart("TextWrapper")}>
        <span className={cnCart("Text")}>
          <Typography>{name}</Typography>
        </span>
      </span>
    </dt>
    <dd className={cnCart("Value")}>
      <span className={cnCart("TextWrapper")}>
        <span className={cnCart("Text")}>
          <Typography>{value}</Typography>
        </span>
      </span>
    </dd>
  </dl>
);
