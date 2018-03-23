import * as React from 'react';
import { ObjectOmit } from "typelevel-ts";

import { Card as Component, CardProps } from "reactstrap";

type Props = ObjectOmit<
  CardProps,
  keyof React.HTMLAttributes<HTMLElement>
>;

class Card extends React.Component<Props> {
  render() {
    return <Component {...this.props} />;
  }
}

export default Card;