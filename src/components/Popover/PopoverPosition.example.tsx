import * as React from 'react';
import { Button, Popover, PopoverBody } from "reactstrap";

type PropsType = any;
type StateType = { popoverOpen: boolean };

class PopoverItem extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return <span>
        <Button className="mr-1" color="secondary" id={"Popover-" + this.props.id} onClick={this.toggle}>
          Popover {this.props.item.text}
        </Button>
        <Popover placement={this.props.item.placement} isOpen={this.state.popoverOpen} target={"Popover-" + this.props.id} toggle={this.toggle}>
          <PopoverBody>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus
          </PopoverBody>
        </Popover>
      </span>;
  }
}

type PropsPositionType = any;
type StatePositionType = { popovers: Array<{}> };

class PopoverPositionExample extends React.Component<PropsPositionType, StatePositionType> {
  constructor(props: PropsPositionType) {
    super(props);

    this.state = { 
      popovers: [
        { placement: "top", text: "in alto" },
        { placement: "bottom", text: "in basso" },
        { placement: "left", text: "a sinistra" },
        { placement: "right", text: "a destra" }
      ] 
    };
  }

  render() {
    return <div style={{ padding: 200 }}>
        {this.state.popovers.map((popover, i) => {
          return <PopoverItem key={i} item={popover} id={i} />;
        })}
      </div>;
  }
}

export default PopoverPositionExample;
