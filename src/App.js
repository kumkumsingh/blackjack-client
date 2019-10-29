import React, { Component } from 'react'
import './App.css';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import LogInFormContainer from './components/LogInFormContainer'
import SignUpFormContainer from './components/SignUpFormContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component ={LogInFormContainer}/>
          <Route path="/signup" exact component ={SignUpFormContainer}/>
        </div>
      </Provider>
    )
  }
}


export default App;
