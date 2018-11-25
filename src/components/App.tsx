import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import Routes from './Routes'
import Layout from './Layout'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
})

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

export default App
