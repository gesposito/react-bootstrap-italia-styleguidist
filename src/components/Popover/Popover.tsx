import * as React from 'react';
import { ObjectOmit } from "typelevel-ts";

import { Popover as Component, PopoverProps } from "reactstrap";

type Props = ObjectOmit<
  PopoverProps,
  keyof React.HTMLAttributes<HTMLElement>
>;

class Popover extends React.Component<Props> {
  render() {
    return <Component {...this.props} />;
  }
}

export default Popover;
