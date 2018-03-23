import * as React from 'react';
import { ObjectOmit } from "typelevel-ts";

import { Jumbotron as Component, JumbotronProps } from "reactstrap";

type Props = ObjectOmit<
  JumbotronProps,
  keyof React.HTMLAttributes<HTMLElement>
>;

class Jumbotron extends React.Component<Props> {
  render() {
    return <Component {...this.props} />;
  }
}

export default Jumbotron;
