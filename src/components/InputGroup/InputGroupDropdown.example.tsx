import * as React from 'react';
import {
  InputGroup,
  InputGroupButtonDropdown,
  Input,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";

type PropsType = any;
type StateType = { dropdownOpen: boolean, splitButtonOpen: boolean };

class InputGroupDropdownExample extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);

    this.state = {
      dropdownOpen: false,
      splitButtonOpen: false,
    };

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
  }

  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen
    });
  }

  render() {
    const { split } = this.props;
    return <div>
        <InputGroup className="mb-3">
          <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
            <DropdownToggle caret color="primary">
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
          <Input type="text" />
        </InputGroup>

        <InputGroup>
          <Input type="text" />
          <InputGroupButtonDropdown addonType="append" isOpen={this.state.splitButtonOpen} toggle={this.toggleSplit}>
            {(() => {
              if (split) {
                return <div>
                    <Button color="primary">
                      Action
                    </Button>
                    <DropdownToggle split color="primary" />
                  </div>;
              }

              return <DropdownToggle caret color="primary">
                  Dropdown
                </DropdownToggle>;
            })()}
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
        </InputGroup>
      </div>;
  }
}

export default InputGroupDropdownExample;
