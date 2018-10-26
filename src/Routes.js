import React, { Suspense, lazy } from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'

const HomePage = lazy(() => import('./components/HomePage'))
const DocsPage = lazy(() => import('./components/DocsPage'))

function Routes() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Switch>
        <Route exact path="/" component={props => <HomePage {...props} />} />
        <Route
          exact
          path="/docs"
          component={props => <DocsPage {...props} />}
        />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  )
}

export default Routes
