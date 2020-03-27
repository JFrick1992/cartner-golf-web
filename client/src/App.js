import React, { useState } from 'react'
import Dashboard from './components/Dashboard'
import CreateAccount from './components/CreateAccount'
import Login from './components/Login'
import axios from './config/axiosConfig.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

const App = props => {
    return (
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/signup">
            <CreateAccount />
          </Route>
          <Route path="/test">
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    )
}

export default App

