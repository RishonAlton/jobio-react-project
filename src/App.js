import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home, Error, Login, Dashboard, Edit, PrivateRoute } from './Pages'


const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/edit/:id">
          <Edit />
        </PrivateRoute>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  )

}


export default App

