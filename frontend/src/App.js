/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import Login from './pages/Login'
import Main from './pages/Main'
import Profile from './pages/Profile'
import { setUserByToken } from './ducks/session/actions'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      dispatch(setUserByToken(token))
    }
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute composedComponent={Main} path="/main" exact />
        <PrivateRoute composedComponent={Profile} path="/profile" exact />
        <PublicRoute composedComponent={Login} path="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default App
