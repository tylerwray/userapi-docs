import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Snackbar from 'material-ui/Snackbar'
import IconButton from 'material-ui/IconButton'
import { BrowserRouter } from 'react-router-dom'
import CloseIcon from 'material-ui-icons/Close'

import Header from './shared/Header'
import Routes from './Routes'

const CloseButton = ({ onClick }) => (
  <IconButton onClick={onClick} aria-label="Delete" color="secondary">
    <CloseIcon />
  </IconButton>
)

CloseButton.propTypes = {
  onClick: PropTypes.func
}

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
        <Header />
        <BrowserRouter>
          <Routes />
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
