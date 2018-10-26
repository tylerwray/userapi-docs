import React from 'react'
import PropTypes from 'prop-types'

import Snackbar from '@material-ui/core/Snackbar'

import CloseIconButton from './CloseIconButton'

const WelcomeSnackbar = ({ open, onClose }) => (
  <Snackbar
    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    open={open}
    ContentProps={{
      'aria-describedby': 'message-id'
    }}
    message={<span id="message-id">Welcome to User API</span>}
    action={<CloseIconButton onClick={onClose} />}
  />
)

WelcomeSnackbar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default WelcomeSnackbar
