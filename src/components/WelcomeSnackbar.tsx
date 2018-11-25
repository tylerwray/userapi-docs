import React from 'react'

import Snackbar from '@material-ui/core/Snackbar'

import CloseIconButton from './CloseIconButton'

interface Props {
  open: boolean
  onClose(event: React.MouseEvent): void
}

function WelcomeSnackbar({ open, onClose }: Props) {
  return (
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
}

export default WelcomeSnackbar
