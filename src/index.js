import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Raven from 'raven-js'

import store from './store'
import App from './App'

import './index.css'

Raven.config('https://87450e3d9c6c49d8afc4ca8dd923c62c@sentry.io/1144242').install()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  console.log('Module is hot!')
  module.hot.accept('./App', () => {
    console.log('re-render')
    const NextApp = require('./App').default
    render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      document.getElementById('root')
    )
  })
}
