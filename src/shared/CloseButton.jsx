import React from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import CloseIcon from 'material-ui-icons/Close'

const CloseButton = ({ onClick }) => (
  <IconButton onClick={onClick} aria-label="Delete" color="secondary">
    <CloseIcon />
  </IconButton>
)

CloseButton.propTypes = {
  onClick: PropTypes.func
}

export default CloseButton
