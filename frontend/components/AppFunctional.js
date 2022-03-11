import React, { useState } from "react";

export default function AppFunctional(props) {
  const [x, setX] = useState(2);
  const [y, setY] = useState(2);
  const [email, setEmail] = useState("");
  const [steps, setSteps] = useState(0);
  const [message, setMessage] = useState("");

  const URL = "http://localhost:9000/api/result";

  const moveRight = () => {
    if (x < 3) {
      setX(x + 1);
      setSteps(steps + 1);
      setMessage("");
    }else{
      setMessage("You can't go right")
    }

    //   setState({
    //     x: this.state.x + 1,
    //     steps: this.state.steps + 1,
    //     message: "",
    //   });
    // } else {
    //   this.setState({ message: "You can't go right" });
    // }
//  };

  moveLeft = () => {
    if (x > 1);
      setx(x - 1);
      setSteps(steps + 1);
      setMessage: "",
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
    setX(2) 
    setY(2)
    setSteps: 0, email: "", message: "" });
  };

  handleChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(URL, {
        x: x,
        y: y,
        email: email,
        steps: steps,
      })
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">
          Coordinates ({x}, {y})
        </h3>
        <h3 id="steps">You moved {steps} times</h3>
      </div>
      <div id="grid">
        <div
          className={
            x === 1 && y === 1
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
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        ></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  );
}
