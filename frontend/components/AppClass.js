import React from "react";
import axios from "axios";

export default class AppClass extends React.Component {
  state = {
    x: 2,
    y: 2,
    email: "",
    steps: 0,
    message: "",
  };

  URL = "http://localhost:9000/api/result";

  moveRight = () => {
    if (this.state.x < 3) {
      this.setState({
        x: this.state.x + 1,
        steps: this.state.steps + 1,
        message: "",
      });
    } else {
      this.setState({ message: "You can't go right" });
    }
  };

  moveLeft = () => {
    if (this.state.x > 1) {
      this.setState({
        x: this.state.x - 1,
        steps: this.state.steps + 1,
        message: "",
      });
    } else {
      this.setState({ message: "You can't go left" });
    }
  };

  moveUp = () => {
    if (this.state.y > 1) {
      this.setState({
        y: this.state.y - 1,
        steps: this.state.steps + 1,
        message: "",
      });
    } else {
      this.setState({ message: "You can't go up" });
    }
  };

  moveDown = () => {
    if (this.state.y < 3) {
      this.setState({
        y: this.state.y + 1,
        steps: this.state.steps + 1,
        message: "",
      });
    } else {
      this.setState({ message: "You can't go down" });
    }
  };

  reset = () => {
    this.setState({ x: 2, y: 2, steps: 0, email: "", message: "" });
  };

  handleChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(this.URL, {
        x: this.state.x,
        y: this.state.y,
        email: this.state.email,
        steps: this.state.steps,
      })
      .then((res) => {
        this.setState({ message: res.data.message });
      })
      .catch((err) => {
        this.setState({ message: err.response.data.message });
      });
  };

  render() {
    const { className } = this.props;
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">
            Coordinates ({this.state.x}, {this.state.y})
          </h3>
          <h3 id="steps">You moved {this.state.steps} times</h3>
        </div>
        <div id="grid">
          <div
            className={
              this.state.x === 1 && this.state.y === 1
                ? "square active"
                : "square"
            }
          >
            {this.state.x === 1 && this.state.y === 1 ? "B" : ""}
          </div>
          <div
            className={
              this.state.x === 2 && this.state.y === 1
                ? "square active"
                : "square"
            }
          >
            {this.state.x === 2 && this.state.y === 1 ? "B" : ""}
          </div>
          <div
            className={
              this.state.x === 3 && this.state.y === 1
                ? "square active"
                : "square"
            }
          >
            {this.state.x === 3 && this.state.y === 1 ? "B" : ""}
          </div>
          <div
            className={
              this.state.x === 1 && this.state.y === 2
                ? "square active"
                : "square"
            }
          >
            {this.state.x === 1 && this.state.y === 2 ? "B" : ""}
          </div>
          <div
            className={
              this.state.x === 2 && this.state.y === 2
                ? "square active"
                : "square"
            }
          >
            {this.state.x === 2 && this.state.y === 2 ? "B" : ""}
          </div>
          <div
            className={
              this.state.x === 3 && this.state.y === 2
                ? "square active"
                : "square"
            }
          >
            {this.state.x === 3 && this.state.y === 2 ? "B" : ""}
          </div>
          <div
            className={
              this.state.x === 1 && this.state.y === 3
                ? "square active"
                : "square"
            }
          >
            {this.state.x === 1 && this.state.y === 3 ? "B" : ""}
          </div>
          <div
            className={
              this.state.x === 2 && this.state.y === 3
                ? "square active"
                : "square"
            }
          >
            {this.state.x === 2 && this.state.y === 3 ? "B" : ""}
          </div>
          <div
            className={
              this.state.x === 3 && this.state.y === 3
                ? "square active"
                : "square"
            }
          >
            {this.state.x === 3 && this.state.y === 3 ? "B" : ""}
          </div>
        </div>
        <div className="info">
          <h3 id="message">{this.state.message}</h3>
        </div>
        <div id="keypad">
          <button id="left" onClick={this.moveLeft}>
            LEFT
          </button>
          <button id="up" onClick={this.moveUp}>
            UP
          </button>
          <button id="right" onClick={this.moveRight}>
            RIGHT
          </button>
          <button id="down" onClick={this.moveDown}>
            DOWN
          </button>
          <button id="reset" onClick={this.reset}>
            reset
          </button>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            id="email"
            type="email"
            placeholder="type email"
            value={this.state.email}
            onChange={this.handleChange}
          ></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    );
  }
}
