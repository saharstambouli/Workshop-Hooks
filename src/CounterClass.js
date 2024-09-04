import React, { Component } from "react";
export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };
  render() {
    return (
      <div>
        <h1> Counter </h1>
        <button onClick={this.decrement}> - </button>
        <h1> {this.state.count} </h1>
        <button onClick={this.increment}> + </button>
      </div>
    );
  }
}
