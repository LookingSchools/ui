import React, { Component, ReactNode } from "react";
import { compose, composeU } from "@bem-react/core";
import { cn } from "@bem-react/classname";

import { Button } from "../Button/Button.bundle";

import { Icon as IconBase } from "../Icon/Icon";
// glyph
import { withGlyphPlus } from "../Icon/_glyph/Icon_glyph_plus";
import { withGlyphMinus } from "../Icon/_glyph/Icon_glyph_minus";

import "./Amountpicker.scss";

const Icon = compose(composeU(withGlyphPlus, withGlyphMinus))(IconBase);

const MIN = 1;
const DEFAULT_VALUE = 1;
const MAX = 999;
const cnAmountPicker = cn("Amountpicker");

interface IState {
  isInputFocused: boolean;
  /** Текущее значение. */
  value: number | null;
  /** Разница между текущим и предыдущим значением. */
  delta: number;
}

export interface ICountEvent {
  target: {
    value: number | null;
    delta: number;
  };
}

export interface IProps {
  value: number | null;
  className?: string;
  onChange?: (e: ICountEvent) => void;
}

export class Amountpicker extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  public state = {
    isInputFocused: false,
    value: this.props.value,
    delta: 0
  };

  public componentDidUpdate(prevProps: IProps) {
    if (this.props.value !== prevProps.value) {
      this.setState({
        value: this.props.value
      });
    }
  }

  public render(): ReactNode {
    const { className } = this.props;
    const isDecDisabled =
      (this.state.value !== null && this.state.value <= MIN) ||
      this.state.isInputFocused;
    const isIncDisabled =
      (this.state.value && this.state.value >= MAX) ||
      this.state.isInputFocused;

    return (
      <div
        className={
          className ? cnAmountPicker(null, [className]) : cnAmountPicker()
        }
      >
        <Button
          size="m"
          theme="primary"
          pin="circle-circle"
          icon={className => (
            <Icon glyph="minus" size="m" className={className} />
          )}
          onClick={this.handleDecrement}
          className={cnAmountPicker("Button", { type: "dec" })}
          disabled={isDecDisabled}
        />
        <span
          className={cnAmountPicker("Count")}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
        >
          {this.state.value}
        </span>
        <Button
          size="m"
          theme="primary"
          pin="circle-circle"
          icon={className => (
            <Icon glyph="plus" size="m" className={className} />
          )}
          onClick={this.handleIncrement}
          className={cnAmountPicker("Button", { type: "inc" })}
          disabled={isIncDisabled}
        />
      </div>
    );
  }

  private getEvent(valueData: {
    value: number | null;
    delta: number;
  }): ICountEvent {
    return {
      target: {
        value: valueData.value,
        delta: valueData.delta
      }
    };
  }

  private handleDecrement() {
    const newValue = this.state.value ? this.state.value - 1 : DEFAULT_VALUE;
    const valueData = this.setValueState(newValue);
    if (this.props.onChange) {
      this.props.onChange(this.getEvent(valueData));
    }
  }

  private handleIncrement() {
    const newValue = this.state.value ? this.state.value + 1 : DEFAULT_VALUE;
    const valueData = this.setValueState(newValue);

    if (newValue && this.props.onChange) {
      this.props.onChange(this.getEvent(valueData));
    }
  }

  private handleChange(e: any) {
    const valueData = this.setValueState(e.target.value);

    if (this.props.onChange) {
      this.props.onChange(this.getEvent(valueData));
    }
  }

  private handleBlur(e: any) {
    const value = e.target.value !== null ? e.target.value : DEFAULT_VALUE;
    const valueData = this.setValueState(value);
    this.setState({ isInputFocused: false });

    if (this.props.onChange && !e.target.value) {
      this.props.onChange(this.getEvent(valueData));
    }
  }

  private handleFocus() {
    this.setState({ isInputFocused: true });
  }

  private setValueState(value: number | null) {
    const valueData = {
      value,
      delta:
        typeof this.state.value === "number" && typeof value === "number"
          ? value - this.state.value
          : 0
    };

    this.setState(valueData);

    return valueData;
  }
}
