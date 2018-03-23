import * as React from 'react';
import { ObjectOmit } from "typelevel-ts";

import { Progress as Component, ProgressProps } from "reactstrap";

type Props = ObjectOmit<ProgressProps, keyof React.HTMLAttributes<HTMLElement>>;

class Progress extends React.Component<Props> {
  render() {
    return <Component {...this.props} />;
  }
}

export default Progress;
