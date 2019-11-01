import React, { Component } from "react";
import * as request from "superagent";
import { Link } from "react-router-dom";
import { logIn } from "../actions/login";
import { connect } from "react-redux";

class LobbyFormContainer extends Component {
  state = {
    rooms: [],
    roomName: ""
  };
  componentDidMount() {
    console.log("comp did mount");
    request
      .get("http://localhost:4000/lobby")
      .then(result => {
        console.log("result", result.body);
        this.setState({
          rooms: result.body
        });
      })
      .catch(error => console.log("error", error));
  }
  onChange = event => {
    this.setState({
      roomName: event.target.value
    });
    console.log("checking the state of roomname", this.state.roomName);
    //[event.target.name] = event.target.value
  };
  onSubmit = event => {
    event.preventDefault();
    console.log("onsumbmit of lobby room");
    const token = this.props.loggedIn;
    console.log("checking token", token);
    request
      .post("http://localhost:4000/lobby")
      .set("Authorization", `Bearer ${token}`)
      .send({ roomName: this.state.roomName })
      .then(result => {
          console.log('checking result',result)
          this.setState({
              rooms:[...this.state.rooms,result.body]
          })
      })
      .catch(error => console.log(error));
    this.setState({
      roomName: ""
    });
  };


  render() {
    // if(!this.state.rooms) return 'Loading'
    console.log("rooms in state",this.state.rooms)
    return (
      <div>
        {/* container of the lobby render db lobby */}
        
        {this.state.rooms && this.state.rooms.map((gameRoom, index) => {
          return (
            <li key={index}>
              <Link to={`/game/${gameRoom.id}`}>{gameRoom.roomName}</Link>
            </li>
          );
        })}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="roomName"
            value={this.state.roomName}
            onChange={this.onChange}
          ></input>
          <button type="submit">Add Room</button>
        </form>
      </div>
    );
  }
}
const mapStatesToProps = state => {
  return {
    loggedIn: state.user
  };
};
export default connect(
  mapStatesToProps,
  { logIn }
)(LobbyFormContainer);
