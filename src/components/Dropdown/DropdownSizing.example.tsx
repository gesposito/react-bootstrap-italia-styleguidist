import * as React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

type PropsType = any;
type StateType = { 
  dropdownOpen1: boolean,
  dropdownOpen2: boolean,
  dropdownOpen3: boolean,
};

class DropdownSizingExample extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen1: false,
      dropdownOpen2: false,
      dropdownOpen3: false,
    };
  }

  toggle(id: number) {
    // @ts-ignore
    this.setState({
      [`dropdownOpen${id}`]: !this.state[`dropdownOpen${id}`]
    });
  }

  render() {
    const DropDownItems = <div>
        <DropdownItem>Azione 1</DropdownItem>
        <DropdownItem>Azione 2</DropdownItem>
        <DropdownItem>Azione 3</DropdownItem>
      </div>;

    return <div>
        <Dropdown className="mt-0" isOpen={this.state.dropdownOpen1} size="lg" toggle={() => this.toggle(1)}>
          <DropdownToggle caret>Dropdown</DropdownToggle>
          <DropdownMenu>{DropDownItems}</DropdownMenu>
        </Dropdown>

        <Dropdown className="mt-3" isOpen={this.state.dropdownOpen2} toggle={() => this.toggle(2)}>
          <DropdownToggle caret>Dropdown</DropdownToggle>
          <DropdownMenu>{DropDownItems}</DropdownMenu>
        </Dropdown>

        <Dropdown className="mt-3" isOpen={this.state.dropdownOpen3} size="sm" toggle={() => this.toggle(3)}>
          <DropdownToggle caret>Dropdown</DropdownToggle>
          <DropdownMenu>{DropDownItems}</DropdownMenu>
        </Dropdown>
      </div>;
  }
}

export default DropdownSizingExample;
