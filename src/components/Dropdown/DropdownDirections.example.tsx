import * as React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

type PropsType = any;
type StateType = { 
  btnDropUp: boolean,
  btnDropLeft: boolean,
  btnDropRight: false,
};

class DropdownDirectionsExample extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      btnDropUp: false,
      btnDropLeft: false,
      btnDropRight: false,
    };
  }

  toggle(id: string) {
    // @ts-ignore
    this.setState({
      [`btnDrop${id}`]: !this.state[`btnDrop${id}`]
    });
  }

  render() {
    return <div style={{ padding: 200 }}>
        <Dropdown className="mt-3" isOpen={this.state.btnDropUp} toggle={() => this.toggle("Up")}>
          <DropdownToggle caret>Dropup</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Azione 1</DropdownItem>
            <DropdownItem>Azione 2</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown className="mt-3" isOpen={this.state.btnDropLeft} toggle={() => this.toggle("Left")}>
          <DropdownToggle caret>Dropleft</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Azione 1</DropdownItem>
            <DropdownItem>Azione 2</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown className="mt-3" isOpen={this.state.btnDropRight} toggle={() => this.toggle("Right")}>
          <DropdownToggle caret>Dropright</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Azione 1</DropdownItem>
            <DropdownItem>Azione 2</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>;
  }
}

export default DropdownDirectionsExample;
