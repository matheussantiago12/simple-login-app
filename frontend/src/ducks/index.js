import sessionReducer from './session/reducer'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  sessionReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)
