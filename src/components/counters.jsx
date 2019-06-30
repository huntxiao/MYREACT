import React, { Component } from "react";
// import Counter from "./counter";
import Counter from "./counter-allProps";
class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            // value={counter.value}
            // selected={true}
            counter={counter}
          >
            <h4>{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
