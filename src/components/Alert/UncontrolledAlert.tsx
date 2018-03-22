import * as React from 'react';
import { ObjectOmit } from "typelevel-ts";

import { UncontrolledAlert as Component, UncontrolledAlertProps } from "reactstrap";

class UncontrolledAlert extends React.Component<
  ObjectOmit<UncontrolledAlertProps, keyof React.HTMLAttributes<HTMLElement>>
> {
  render() {
    return <Component {...this.props} />;
  }
}

export default UncontrolledAlert;
