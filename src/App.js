import React, { Component } from 'react'
import {Provider} from 'react-redux'
import store from './store'
export class App extends Component {
  render() {
    return (
      <div store = {store}>
        
      </div>
    )
  }
}

export default App
