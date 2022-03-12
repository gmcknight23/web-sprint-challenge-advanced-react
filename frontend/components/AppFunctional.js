import React, { useState } from "react";
import axios from "axios";

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
    } else {
      setMessage("You can't go right");
    }
  };

  const moveLeft = () => {
    if (x > 1) {
      setX(x - 1);
      setSteps(steps + 1);
      setMessage("");
    } else {
      setMessage("You can't go left");
    }
  };
  const moveUp = () => {
    if (y > 1) {
      setY(y - 1);
      setSteps(steps + 1);
      setMessage("");
    } else {
      setMessage("You can't go up");
    }
  };
  const moveDown = () => {
    if (y < 3) {
      setY(y + 1);
      setSteps(steps + 1);
      setMessage("");
    } else {
      setMessage("You can't go down");
    }
  };

  const reset = () => {
    setX(2);
    setY(2);
    setSteps(0);
    setEmail("");
    setMessage("");
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
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
        setEmail("");
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        setEmail("");
      });
  };

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">
          Coordinates ({x}, {y})
        </h3>
        <h3 id="steps">
          You moved {steps} {steps === 1 ? "time" : "times"}
        </h3>
      </div>
      <div id="grid">
        <div className={x === 1 && y === 1 ? "square active" : "square"}>
          {x === 1 && y === 1 ? "B" : ""}
        </div>
        <div className={x === 2 && y === 1 ? "square active" : "square"}>
          {x === 2 && y === 1 ? "B" : ""}
        </div>
        <div className={x === 3 && y === 1 ? "square active" : "square"}>
          {x === 3 && y === 1 ? "B" : ""}
        </div>
        <div className={x === 1 && y === 2 ? "square active" : "square"}>
          {x === 1 && y === 2 ? "B" : ""}
        </div>
        <div className={x === 2 && y === 2 ? "square active" : "square"}>
          {x === 2 && y === 2 ? "B" : ""}
        </div>
        <div className={x === 3 && y === 2 ? "square active" : "square"}>
          {x === 3 && y === 2 ? "B" : ""}
        </div>
        <div className={x === 1 && y === 3 ? "square active" : "square"}>
          {x === 1 && y === 3 ? "B" : ""}
        </div>
        <div className={x === 2 && y === 3 ? "square active" : "square"}>
          {x === 2 && y === 3 ? "B" : ""}
        </div>
        <div className={x === 3 && y === 3 ? "square active" : "square"}>
          {x === 3 && y === 3 ? "B" : ""}
        </div>
      </div>
      <div className="info">
        <h3 id="message">{message}</h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={moveLeft}>
          LEFT
        </button>
        <button id="up" onClick={moveUp}>
          UP
        </button>
        <button id="right" onClick={moveRight}>
          RIGHT
        </button>
        <button id="down" onClick={moveDown}>
          DOWN
        </button>
        <button id="reset" onClick={reset}>
          reset
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          type="email"
          placeholder="type email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  );
}
