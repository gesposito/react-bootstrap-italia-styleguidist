import * as React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

type PropsType = any;
type StateType = { dropdownOpen: boolean };

class DropdownFullSizingExample extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return <Dropdown className="mt-0" isOpen={this.state.dropdownOpen} size="lg" toggle={this.toggle}>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu className="full-width">
          <DropdownItem>Azione 1</DropdownItem>
          <DropdownItem>Azione 2</DropdownItem>
          <DropdownItem>Azione 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>;
  }
}

export default DropdownFullSizingExample;
