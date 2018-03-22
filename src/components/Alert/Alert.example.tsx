import * as React from "react";
import { Alert } from "reactstrap";

type PropsType = any;
type StateType = { visible: boolean };

class AlertExample extends React.Component<PropsType, StateType> {
  constructor(props: any) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <Alert
        color="warning"
        isOpen={this.state.visible}
        toggle={this.onDismiss}
      >
        <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.
      </Alert>
    );
  }
}

export default AlertExample;
