import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to BlackJack Game</h1>
        <p>CARD VALUES</p>
        <Link to="/login">
          <button type="button">Login</button>
        </Link>
      </div>
    );
  }
}
