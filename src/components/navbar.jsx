import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class NavBar extends Component {
  render() {
    //const { totalCounters } = this.props;
    console.log("NavBar - Rendered");
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.counters.filter(c => c.value > 0).length}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
