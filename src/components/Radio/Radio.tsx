import * as React from 'react';
import { ObjectOmit } from "typelevel-ts";

import { Input as Component, InputProps } from "reactstrap";

type Props = ObjectOmit<
  InputProps,
  keyof React.InputHTMLAttributes<HTMLInputElement>
>;

class Radio extends React.Component<Props> {
  render() {
    return <Component {...this.props} />;
  }
}

export default Radio;
