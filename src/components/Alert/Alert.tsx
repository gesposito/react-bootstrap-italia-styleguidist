import * as React from 'react';
import { ObjectOmit } from "typelevel-ts";

import { Alert as Component, AlertProps } from "reactstrap";

type Props = ObjectOmit<AlertProps, keyof React.HTMLAttributes<HTMLElement>>;

class Alert extends React.Component<Props> {
  render() {
    return <Component {...this.props} />;
  }
}

export default Alert;
