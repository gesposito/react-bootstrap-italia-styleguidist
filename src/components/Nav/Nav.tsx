import * as React from 'react';
import { ObjectOmit } from "typelevel-ts";

import { Nav as Component, NavProps } from "reactstrap";

type Props = ObjectOmit<
  NavProps,
  keyof React.HTMLProps<HTMLUListElement>
>;

class Nav extends React.Component<Props> {
  render() {
    return <Component {...this.props} />;
  }
}

export default Nav;
