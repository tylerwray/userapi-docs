import React from 'react'
import PropTypes from 'prop-types'

import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import CopyIcon from '@material-ui/icons/FileCopy'

import CopyToClipboard from 'react-copy-to-clipboard'

const styles = {
  copyIcon: {
    color: '#CCCCCC'
  }
}

interface Props {
  children: Array<React.ReactNode>
  style: object
  textToCopy: string
  onCopy(a: string, b: boolean): void
}

function Background({ children, style, textToCopy, onCopy }: Props) {
  return (
    <div
      style={{
        borderRadius: 0,
        position: 'relative',
        ...style
      }}
    >
      <span
        style={{
          position: 'absolute',
          right: 5,
          top: 5
        }}
      >
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
}

export default Background
