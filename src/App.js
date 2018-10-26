import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import Routes from './Routes'
import { AppLayout } from './components'
import store from './store'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
})

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <BrowserRouter>
          <AppLayout>
            <Routes />
          </AppLayout>
        </BrowserRouter>
      </Provider>
    </MuiThemeProvider>
  )
}

export default App
