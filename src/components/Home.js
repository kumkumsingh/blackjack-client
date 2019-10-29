import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Tic-Tac-Toe Game</h1>
        <Link to="/login">
          <button type="button">Login</button>
        </Link>
      </div>
    );
  }
}
