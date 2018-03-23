import * as React from 'react';
import { ObjectOmit } from "typelevel-ts";

import { Button as Component, ButtonProps } from "reactstrap";

type Props = ObjectOmit<ButtonProps, keyof React.HTMLProps<HTMLButtonElement>>;

class Button extends React.Component<Props> {
  render() {
    return <Component {...this.props} />;
  }
}

export default Button;
