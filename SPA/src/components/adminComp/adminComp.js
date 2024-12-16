import React, { Component } from "react";
import { Input, Button, message, Form } from "antd";

class LoginComp extends Component {

  render() {
    let pageContent = <div></div>;

    if (this.state.display) {

      pageContent = (
        <div>
          <p>Ola Admin</p>
        </div>
      );
    }
    return <div>{pageContent}</div>;
  }
}

export default AdminComp;