import React, { Component } from 'react'
import {Provider} from 'react-redux'
import store from './store'
import AddString  from './Components/AddString'
import  SearchString  from './Components/SearchString'
export class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div>
          <AddString/>
          <SearchString/>
        </div>
      </Provider>
    )
  }
}

export default App
