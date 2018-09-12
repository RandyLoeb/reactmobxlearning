import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class NavBar2 extends Component {
  render() {
    //const { totalCounters } = this.props;
    console.log("NavBar2 - Rendered");
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.store.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar2;
