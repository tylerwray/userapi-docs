import React from 'react'
import PropTypes from 'prop-types'

import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

function CloseIconButton({ onClick }) {
  return (
    <IconButton onClick={onClick} aria-label="Delete" color="secondary">
      <CloseIcon />
    </IconButton>
  )
}

CloseIconButton.propTypes = {
  onClick: PropTypes.func
}

export default CloseIconButton
