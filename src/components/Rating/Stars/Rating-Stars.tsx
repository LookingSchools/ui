import React from "react";
import { cnRating } from "../Rating";

interface IRatingStarsProps {
  value: number;
  base: number;
  size: number;
}

export class RatingStars extends React.PureComponent<IRatingStarsProps> {
  render() {
    const size = this.props.size;
    const base = this.props.base;
    const value = Math.min(this.props.value, base);

    const percent = Math.round((value * 10) / base) * 10;
    const isHalf = (percent / 10) % 2 === 1; // нечётные проценты дают ползвезды
    const fullWidth = size * 5 + 4; // размер звезды * количество звёзд + 4 по 1px между ними
    const starsWidth = Math.round((fullWidth / 100) * percent);
    const halfWidth = size / 2;
    const restWidth = fullWidth - starsWidth - (isHalf ? halfWidth : 0);
    const containerWidth = fullWidth - restWidth;

    return (
      <React.Fragment>
        <span
          className={cnRating("Stars")}
          style={{ width: `${containerWidth}px` }}
        >
          <span
            className={cnRating("Half")}
            style={{ width: `${containerWidth}px` }}
          />
          <span
            className={cnRating("Star")}
            style={{ width: `${starsWidth}px` }}
          />
        </span>
        <span
          className={cnRating("Rest")}
          style={{ width: `${restWidth}px` }}
        />
      </React.Fragment>
    );
  }
}
