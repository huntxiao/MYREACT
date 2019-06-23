import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super(); //子类构造方法需调用父构造方法
    console.log("constructer", this);
    this.handleIncrement = this.handleIncrement.bind(this); // 因为默认严格模式开启，绑定当前的this
  }
  state = {
    count: 0,
    imgurl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };
  styles = {
    fontWeight: "bolder",
    fontSize: "30px"
  };
  //   handleIncrement() {
  //     console.log("Increment Clicked", this); //构造器实现绑定this
  //   }
  handleIncrement = product => {
    console.log("Increment Clicked", this); //箭头函数不会重新绑定this
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };
  handleSubstract = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    // React.createElement("div");
    return (
      <React.Fragment>
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
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </React.Fragment>
    );
  }
  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>There are no tags</p>;
    } else {
      return (
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
    }
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "It's Zero now, fuck ya" : count;
  }
}

export default Counter;
