import * as React from 'react';
import { ObjectOmit } from "typelevel-ts";

import { Navbar as Component, NavbarProps } from "reactstrap";

type Props = ObjectOmit<
  NavbarProps,
  keyof React.HTMLAttributes<HTMLElement>
>;

class Navbar extends React.Component<Props> {
  render() {
    return <Component {...this.props} />;
  }
}

export default Navbar;
