import React, { Component } from "react";

class Counter extends Component {
  // constructor() {
  //   super(); //子类构造方法需调用父构造方法
  //   console.log("constructer", this);
  //   this.handleIncrement = this.handleIncrement.bind(this); // 因为默认严格模式开启，绑定当前的this
  // }
  state = {
    value: this.props.counter.value
  };
  styles = {
    fontWeight: "bolder",
    fontSize: "30px"
  };

  handleIncrement = product => {
    console.log("Increment Clicked", this); //箭头函数不会重新绑定this
    this.setState({ value: this.state.value + 1 });
  };
  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };
  handleSubstract = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    // React.createElement("div");
    console.log("props", this.props);
    return (
      <React.Fragment>
        {this.props.children}
        <span style={{ fontSize: 16 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          //onClick={this.doHandleIncrement}
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.props.onDelete(this.props.counter.id);
          }}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "It's Zero now" : value;
  }
}

export default Counter;
