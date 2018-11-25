import React, { Suspense, lazy } from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'

// function delay(path) {
//   return new Promise(resolve =>
//     setTimeout(() => resolve(import(path)), 300000)
//   );
// }

const HomePage = lazy(() => import('./HomePage'))
const DocsPage = lazy(() => import('./DocsPage'))

function Routes() {
  return (
    <Suspense fallback={<CenteredSpinner />}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/docs" component={DocsPage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  )
}

function CenteredSpinner() {
  return (
    <div style={{ width: '100%', textAlign: 'center', padding: 10 }}>
      <CircularProgress />
    </div>
  )
}

export default Routes
