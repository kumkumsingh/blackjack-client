import React, { Component } from 'react'
import './App.css';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import LogInFormContainer from './components/LogInFormContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component ={LogInFormContainer}/>
        </div>
      </Provider>
    )
  }
}


export default App;
