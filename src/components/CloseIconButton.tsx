import React from 'react'
import PropTypes from 'prop-types'

import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

interface Props {
  onClick(event: React.MouseEvent): void
}

function CloseIconButton({ onClick }: Props) {
  return (
    <IconButton onClick={onClick} aria-label="Delete" color="secondary">
      <CloseIcon />
    </IconButton>
  )
}

export default CloseIconButton
