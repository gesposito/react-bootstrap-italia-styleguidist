import * as React from 'react';
import { ObjectOmit } from "typelevel-ts";

import { Badge as Component, BadgeProps } from "reactstrap";

type Props = ObjectOmit<BadgeProps, keyof React.HTMLAttributes<HTMLElement>>;

class Badge extends React.Component<Props> {
  render() {
    return <Component {...this.props} />;
  }
}

export default Badge;
