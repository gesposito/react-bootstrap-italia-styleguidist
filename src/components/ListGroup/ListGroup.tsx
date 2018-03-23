import * as React from 'react';
import { ObjectOmit } from "typelevel-ts";

import { ListGroup as Component, ListGroupProps } from "reactstrap";

type Props = ObjectOmit<
  ListGroupProps,
  keyof React.HTMLAttributes<HTMLElement>
>;

class ListGroup extends React.Component<Props> {
  render() {
    return <Component {...this.props} />;
  }
}

export default ListGroup;
