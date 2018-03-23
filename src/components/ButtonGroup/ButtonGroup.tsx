import * as React from 'react';
import { ObjectOmit } from "typelevel-ts";

import { ButtonGroup as Component, ButtonGroupProps } from "reactstrap";

type Props = ObjectOmit<
  ButtonGroupProps,
  keyof React.HTMLAttributes<HTMLElement>
>;

class ButtonGroup extends React.Component<Props> {
  render() {
    return <Component {...this.props} />;
  }
}

export default ButtonGroup;
