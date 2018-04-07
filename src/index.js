import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Raven from 'raven-js'

import store from './store'
import App from './App'

import './index.css'

console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
  console.log('Enabling Sentry')
  Raven.config('https://87450e3d9c6c49d8afc4ca8dd923c62c@sentry.io/1144242').install()
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      document.getElementById('root')
    )
  })
}
