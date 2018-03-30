import React, { Component } from 'react'
import Snackbar from 'material-ui/Snackbar'
import { BrowserRouter } from 'react-router-dom'

import CloseButton from './shared/CloseButton'
import Routes from './Routes'
import AppLayout from './layouts/AppLayout'

class App extends Component {
  state = {
    snackbar: true
  }

  constructor(props) {
    super(props)

    setTimeout(() => {
      this.setState({
        snackbar: false
      })
    }, 3000)
  }

  closeSnackbar() {
    this.setState({
      snackbar: false
    })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <AppLayout>
            <Routes />
          </AppLayout>
        </BrowserRouter>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={this.state.snackbar}
          SnackbarContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="message-id">Welcome to User API</span>}
          action={
            <CloseButton onClick={this.closeSnackbar.bind(this)} />
          }
        />
    </div>
    )
  }
}

export default App
