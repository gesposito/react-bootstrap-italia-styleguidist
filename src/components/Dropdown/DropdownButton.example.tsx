import * as React from 'react';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu, 
  DropdownItem
} from "reactstrap";

type PropsType = any;
type StateType = { dropdownOpen: boolean };

class DropdownButtonExample extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const { color } = this.props;
    return <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret color={color}>
          Apri dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Azione 1</DropdownItem>
          <DropdownItem>Azione 2</DropdownItem>
          <DropdownItem>Azione 3</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>;
  }
}

export default DropdownButtonExample;
