import * as React from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane, Container, Row, Col } from "reactstrap";

type PropsType = any;
type StateType = { activeTab: string };

class TabButtonExample extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab: string) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const { vertical } = this.props;
    return <Container className="m-3">
        <Row>
          <Col sm={vertical ? '3' : '12'}>
            <Nav pills vertical={vertical}>
              <NavItem>
                <NavLink href="#" active={this.state.activeTab === "1"} onClick={() => {
                    this.toggle("1");
                  }}>
                  Tab 1
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" active={this.state.activeTab === "2"} onClick={() => {
                    this.toggle("2");
                  }}>
                  Tab 2
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" active={this.state.activeTab === "3"} onClick={() => {
                    this.toggle("3");
                  }}>
                  Tab 3
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col sm={vertical ? '9' : '12'}>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </TabPane>
              <TabPane tabId="2">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </TabPane>
              <TabPane tabId="3">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Container>;
  }
}

export default TabButtonExample;
