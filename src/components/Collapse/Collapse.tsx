import * as React from 'react';
import { ObjectOmit } from "typelevel-ts";

import { Collapse as Component, CollapseProps } from "reactstrap";

type Props = ObjectOmit<CollapseProps, keyof React.HTMLProps<HTMLElement>>;

class Collapse extends React.Component<Props> {
  render() {
    return <Component {...this.props} />;
  }
}

export default Collapse;
