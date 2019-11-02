import React, { Component } from "react";
import * as request from "superagent";
import { Link } from "react-router-dom";
import { logIn } from "../actions/login";
import { connect } from "react-redux";
import Pagination from './Pagination'
import pagination from "./Pagination";

class LobbyFormContainer extends Component {
  state = {
    rooms: [],
    roomName: "",
    currentPage: 1,
    roomsPerPage: 4
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
        console.log("checking result", result);
        this.setState({
          rooms: [...this.state.rooms, result.body]
        });
      })
      .catch(error => console.log(error));
    this.setState({
      roomName: ""
    });
  };

  onClick = event => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  };
  //paginate = (pageNumber) =>setCurrentPage(pageNumber)
  render() {
    console.log("state", this.state);
    const { rooms, currentPage, roomsPerPage } = this.state;
    console.log("currentPage", currentPage);
    const indexOfLastRoom = currentPage * roomsPerPage;
    const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
    const currentRooms = rooms.slice(indexOfFirstRoom, indexOfLastRoom);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(rooms.length / roomsPerPage); i++) {
      pageNumbers.push(i);
    }
    console.log("pageNumbers", pageNumbers);
    // if(!this.state.rooms) return 'Loading'
    console.log("rooms in state", this.state.rooms);
    return (
      <React.Fragment>
        <div>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              name="roomName"
              value={this.state.roomName}
              onChange={this.onChange}
            ></input>
            <button type="submit" class="btn btn-primary">Add Room</button>
          </form>

          <p>List of page numbers</p>
          {currentRooms.map((room, index) => {
            return (
              <li key={index} class="list-group-item">
                <Link to={`/game/${room.id}`}>{room.roomName}</Link>
              </li>
            );
          })}
         
        </div>
        <Pagination roomsPerPage={roomsPerPage} totalRooms={rooms.length} onClick={this.onClick}/>
      </React.Fragment>
   
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
