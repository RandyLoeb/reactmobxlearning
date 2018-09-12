import React, { Component } from "react";
//import logo from './logo.svg';
// import NavBar from "./components/navbar";
import NavBar2 from "./components/navbar2";
import Counters from "./components/counters";
import ObservableCounterStore from "./components/observableCounterStore";
import "./App.css";

class App extends Component {
  store = new ObservableCounterStore();

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    //ajax call
    console.log("App - Mounted");
  }

  render() {
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <NavBar2 store={this.store} />
        <main className="container">
          <Counters store={this.store} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
