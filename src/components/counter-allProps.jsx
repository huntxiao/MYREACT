import React, { Component } from "react";

class Counter extends Component {
  //受控组件，数据发生变化，就发起事件
  //   state = {
  //     value: this.props.counter.value
  //   };
  styles = {
    fontWeight: "bolder",
    fontSize: "30px"
  };

  handleIncrement = product => {
    console.log("Increment Clicked", this); //箭头函数不会重新绑定this
    this.setState({ value: this.state.value + 1 });
  };
  handleSubstract = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <span style={{ fontSize: 16 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          //onClick={this.doHandleIncrement}
          onClick={() => this.props.onIncrement(this.props.counter)}
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
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "It's Zero now" : value;
  }
}

export default Counter;
