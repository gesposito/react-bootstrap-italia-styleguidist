import * as React from 'react';
import { ObjectOmit } from "typelevel-ts";

import { InputGroup as Component, InputGroupProps } from "reactstrap";

type Props = ObjectOmit<
  InputGroupProps,
  keyof React.HTMLAttributes<HTMLElement>
>;

class InputGroup extends React.Component<Props> {
  render() {
    return <Component {...this.props} />;
  }
}

export default InputGroup;
