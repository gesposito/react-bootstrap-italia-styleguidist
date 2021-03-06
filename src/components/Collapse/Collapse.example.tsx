import * as React from "react";
import {
  Button,
  Collapse,
  Card,
  CardBody,
} from "reactstrap";

type PropsType = any;
type StateType = { collapse: boolean };

class CollapseExample extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: "1rem" }}>
          Toggle
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt
              sapiente ea proident.
            </CardBody>
          </Card>
        </Collapse>
      </div>;
  }
}

export default CollapseExample;
