import * as React from 'react';
import { ObjectOmit } from "typelevel-ts";

import { Dropdown as Component, DropdownProps } from "reactstrap";

type Props = ObjectOmit<DropdownProps, keyof React.HTMLAttributes<HTMLElement>>;

class Dropdown extends React.Component<Props> {
  render() {
    return <Component {...this.props} />;
  }
}

export default Dropdown;
