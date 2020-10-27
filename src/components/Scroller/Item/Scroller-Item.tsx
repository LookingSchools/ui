import React from "react";
import { IClassNameProps } from "@bem-react/core";

import { cnScroller } from "../Scroller";
import { ScrollerContext, IScrollerContext } from "../Scroller";

export interface IScrollerItem {
  children: (props: IClassNameProps) => React.ReactElement<{}>;
}

const cnScrollerItem = cnScroller("Item");

export class ScrollerItem extends React.PureComponent<IScrollerItem> {
  private scrollerContext?: IScrollerContext;

  componentDidMount() {
    if (this.scrollerContext) {
      this.scrollerContext.registerScrollerItem(this);
    }
  }

  componentWillUnmount() {
    if (this.scrollerContext) {
      this.scrollerContext.unregisterScrollerItem(this);
    }
  }

  render() {
    return (
      <ScrollerContext.Consumer>
        {(scrollerCtx: IScrollerContext) => {
          this.scrollerContext = scrollerCtx;

          return this.props.children({ className: cnScrollerItem });
        }}
      </ScrollerContext.Consumer>
    );
  }
}
