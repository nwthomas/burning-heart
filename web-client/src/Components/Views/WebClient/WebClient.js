import React, { Component } from "react";

import { Navbar } from "../../Presentational/Navbar";
import { authenticate } from "../../Container/authenticate";

const DisplayedComponent = authenticate;

export class WebClient extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <DisplayedComponent history={this.props.history} />
      </div>
    );
  }
}

export default WebClient;
