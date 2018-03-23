import * as React from 'react';
import { ObjectOmit } from "typelevel-ts";

import { Breadcrumb as Component, BreadcrumbProps } from "reactstrap";

type Props = ObjectOmit<
  BreadcrumbProps,
  keyof React.HTMLAttributes<HTMLElement>
>;

class Breadcrumb extends React.Component<Props> {
  render() {
    return <Component {...this.props} />;
  }
}

export default Breadcrumb;
