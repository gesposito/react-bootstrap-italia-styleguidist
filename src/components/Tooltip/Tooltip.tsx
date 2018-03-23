import * as React from 'react';
import { ObjectOmit } from "typelevel-ts";

import { Tooltip as Component, TooltipProps } from "reactstrap";

type Props = ObjectOmit<
  TooltipProps,
  keyof React.HTMLAttributes<HTMLElement>
>;

class Tooltip extends React.Component<Props> {
  render() {
    return <Component {...this.props} />;
  }
}

export default Tooltip;
