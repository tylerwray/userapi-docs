import React from 'react'
import PropTypes from 'prop-types'

import IconButton from 'material-ui/IconButton'
import CloseIcon from 'material-ui-icons/Close'

const CloseIconButton = ({ onClick }) => (
  <IconButton onClick={onClick} aria-label="Delete" color="secondary">
    <CloseIcon />
  </IconButton>
)

CloseIconButton.propTypes = {
  onClick: PropTypes.func
}

export default CloseIconButton
