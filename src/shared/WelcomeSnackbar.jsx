import React from 'react'
import PropTypes from 'prop-types'

import Snackbar from 'material-ui/Snackbar'
import CloseButton from './CloseButton'

const WelcomeSnackbar = ({ open, onClose }) => (
  <Snackbar
    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    open={open}
    SnackbarContentProps={{
      'aria-describedby': 'message-id'
    }}
    message={<span id="message-id">Welcome to User API</span>}
    action={
      <CloseButton onClick={onClose} />
    }
  />
)

WelcomeSnackbar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default WelcomeSnackbar
