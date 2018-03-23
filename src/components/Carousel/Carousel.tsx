import * as React from 'react';
import { ObjectOmit } from "typelevel-ts";

import { Carousel as Component, CarouselProps } from "reactstrap";

type Props = ObjectOmit<CarouselProps, keyof React.HTMLProps<HTMLElement>>;

class Carousel extends React.Component<Props> {
  render() {
    return <Component {...this.props} />;
  }
}

export default Carousel;
