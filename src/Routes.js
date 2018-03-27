import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import Home from './views/Home'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Redirect to="/" />
  </Switch>
)

export default Routes
