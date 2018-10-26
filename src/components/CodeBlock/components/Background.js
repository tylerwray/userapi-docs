import React from 'react'
import PropTypes from 'prop-types'

import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import CopyIcon from '@material-ui/icons/FileCopy'

import { CopyToClipboard } from 'react-copy-to-clipboard'

const styles = {
  background: {
    borderRadius: 0,
    position: 'relative'
  },
  copyButton: {
    position: 'absolute',
    right: 5,
    top: 5
  },
  copyIcon: {
    color: '#CCCCCC'
  }
}

const Background = ({ children, style, textToCopy, onCopy }) => (
  <div style={{ ...style, ...styles.background }}>
    <span style={styles.copyButton}>
      <CopyToClipboard text={textToCopy} onCopy={onCopy}>
        <Tooltip title="Copy to Clipboard" placement="left">
          <IconButton aria-label="Copy">
            <CopyIcon style={styles.copyIcon} color="action" />
          </IconButton>
        </Tooltip>
      </CopyToClipboard>
    </span>
    {children}
  </div>
)

Background.propTypes = {
  children: PropTypes.array.isRequired,
  style: PropTypes.object.isRequired,
  textToCopy: PropTypes.string.isRequired,
  onCopy: PropTypes.func.isRequired
}

export default Background
