import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import sessionReducer from './ducks/session'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  sessionReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
