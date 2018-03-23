import * as React from "react";
import {
  Button,
  ButtonGroup,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

type PropsType = any;
type StateType = { dropdownOpen: boolean };

class ButtonGroupDropdownExample extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);

    this.state = {
      dropdownOpen: false
    };
    
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonGroup>
        <Button>1</Button>
        <Button>2</Button>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>Dropdown</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Dropdown Link</DropdownItem>
            <DropdownItem>Dropdown Link</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </ButtonGroup>
    );
  }
}

export default ButtonGroupDropdownExample;
