import React, { Component } from 'react'
import './App.css';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import LogInFormContainer from './components/LogInFormContainer'
import SignUpFormContainer from './components/SignUpFormContainer'
import LobbyFormContainer from './components/LobbyFormContainer';
import GameFormContainer from './components/GameFormContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container mt-4">
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component ={LogInFormContainer}/>
          <Route path="/signup" exact component ={SignUpFormContainer}/>
          <Route path="/lobby" exact component ={LobbyFormContainer}/>
          <Route path="/Game:id" exact component ={GameFormContainer}/>
        </div>
      </Provider>
    )
  }
}


export default App;
