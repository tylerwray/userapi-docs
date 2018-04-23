import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Docs from './pages/Docs'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/docs" component={Docs} />
    <Redirect to="/" />
  </Switch>
)

export default Routes
