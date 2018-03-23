import * as React from 'react';
import { ObjectOmit } from "typelevel-ts";

import { Pagination as Component, PaginationProps } from "reactstrap";

type Props = ObjectOmit<
  PaginationProps,
  keyof React.HTMLAttributes<HTMLElement>
>;

class Pagination extends React.Component<Props> {
  render() {
    return <Component {...this.props} />;
  }
}

export default Pagination;
