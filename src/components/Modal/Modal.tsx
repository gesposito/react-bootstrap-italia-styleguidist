import * as React from 'react';
import { ObjectOmit } from "typelevel-ts";

import { Modal as Component, ModalProps } from "reactstrap";

type Props = ObjectOmit<
  ModalProps,
  keyof React.HTMLAttributes<HTMLElement>
>;

class Modal extends React.Component<Props> {
  render() {
    return <Component {...this.props} />;
  }
}

export default Modal;
