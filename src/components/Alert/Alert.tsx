import * as React from 'react';
import { ObjectOmit } from "typelevel-ts";

import { Alert as Component, AlertProps } from "reactstrap";

class Alert extends React.Component<
  ObjectOmit<AlertProps, keyof React.HTMLAttributes<HTMLElement>>
> {
  render() {
    return <Component {...this.props} />;
  }
}

export default Alert;
