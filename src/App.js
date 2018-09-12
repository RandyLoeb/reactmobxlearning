import React, { Component } from "react";
//import logo from './logo.svg';
// import NavBar from "./components/navbar";
import NavBar2 from "./components/navbar2";
import Counters from "./components/counters";
import ObservableCounter from "./components/observableCounterStore";
import "./App.css";

class App extends Component {
  store = new ObservableCounter();
  // state = {
  //   counters: [
  //     { id: 1, value: 4 },
  //     { id: 2, value: 0 },
  //     { id: 3, value: 0 },
  //     { id: 4, value: 0 }
  //   ]
  // };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    //ajax call
    console.log("App - Mounted");
  }
  handleIncrement = counter => {
    // const counters = [...this.state.counters];
    // const index = counters.indexOf(counter);
    // counters[index] = { ...counter };
    // counters[index].value++;
    // this.setState({ counters });
    // var storeCounter = this.state.counters.indexOf(counter);
    // storeCounter.value++;
    //console.log(counter);
    counter.value++;
  };
  handleDelete = counterId => {
    // console.log(counterId);
    // const counters = this.state.counters.filter(c => c.id !== counterId);
    // this.setState({ counters: counters });
    for (var i = this.store.counters.length - 1; i >= 0; i--) {
      if (this.store.counters[i].id === counterId) {
        this.store.counters.splice(i, 1);
      }
    }
    //this.store.counters.splice(counterId + 1, 1);
  };

  handleReset = () => {
    // const counters = this.state.counters.map(c => {
    //   c.value = 0;
    //   return c;
    // });
    // this.setState({ counters });
    this.store.counters.forEach(c => (c.value = 0));
  };
  render() {
    console.log("App - Rendered");
    /*return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );*/
    return (
      <React.Fragment>
        {/* <span>counters: {this.store.totalCounters}</span> */}
        {/* <NavBar counters={this.store.counters} /> */}
        <NavBar2 store={this.store} />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.store.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
