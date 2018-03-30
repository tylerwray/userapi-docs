import React, { Component } from 'react'
import Syntax from 'react-syntax-highlighter/prism'
import PropTypes from 'prop-types'
import { okaidia } from 'react-syntax-highlighter/styles/prism'
import IconButton from 'material-ui/IconButton'
import CopyIcon from 'material-ui-icons/ContentCopy'
import Tooltip from 'material-ui/Tooltip'
import Snackbar from 'material-ui/Snackbar'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import CloseButton from './CloseButton'

const styles = {
  codeBlock: {
    borderRadius: 3
  },
  copyButton: {
    float: 'right'
  }
}

class CodeBlock extends Component {
  state = {
    copiedSnackbar: false
  }

  openSnackbar() {
    this.setState({
      copiedSnackbar: true
    })

    setTimeout(() => {
      this.setState({
        copiedSnackbar: false
      })
    }, 1500)
  }

  closeSnackbar() {
    this.setState({
      copiedSnackbar: false
    })
  }

  render() {
    const { children } = this.props

    return (
      <div>
        <CopyToClipboard style={styles.copyButton} text={children} onCopy={this.openSnackbar.bind(this)}>
          <Tooltip title="Copy to Clipboard" placement="left">
            <IconButton aria-label="Copy">
              <CopyIcon color="action" />
            </IconButton>
          </Tooltip>
        </CopyToClipboard>
        <Syntax language="json" style={okaidia} customStyle={styles.codeBlock}>{children}</Syntax>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={this.state.copiedSnackbar}
          SnackbarContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="message-id">Copied response to clipboard</span>}
          action={
            <CloseButton onClick={this.closeSnackbar.bind(this)} />
          }
        />
      </div>
    )
  }
}

CodeBlock.propTypes = {
  children: PropTypes.string,
  classes: PropTypes.object
}

export default CodeBlock
