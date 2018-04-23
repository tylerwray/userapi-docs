import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import { AppLayout } from './components'

const App = () => (
  <BrowserRouter>
    <AppLayout>
      <Routes />
    </AppLayout>
  </BrowserRouter>
)

export default App
