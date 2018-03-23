import * as React from 'react';
import {
  ButtonGroup,
  Button,
  ButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "reactstrap";

type PropsType = any;
type StateType = { dropdownOpen: boolean };

class DropdownButtonGroupExample extends React.Component<PropsType, StateType> {
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
    return <ButtonGroup>
        <Button>Bottone diviso</Button>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret />
          <DropdownMenu>
            <DropdownItem>Azione 1</DropdownItem>
            <DropdownItem>Azione 2</DropdownItem>
            <DropdownItem>Azione 3</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </ButtonGroup>;
  }
}

export default DropdownButtonGroupExample;
