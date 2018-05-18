import React from 'react'
import ReactDOM from 'react-dom'
import './styles/app.css'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'

import TimerContainer from './containers/TimerContainer'
import reducers from './reducers'

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <TimerContainer />
  </Provider>,
  document.getElementById("root")
)