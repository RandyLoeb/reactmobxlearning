import React, { Component } from "react";
import { observer } from "mobx-react";
import Counter from "./counter";

@observer
class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    const { store } = this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={store.reset}>
          Reset
        </button>
        {store.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            selected={true}
            onDelete={store.delete}
            onIncrement={store.increment}
            id={counter.id}
            counter={counter}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
