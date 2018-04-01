import React, { Component } from 'react'
import Syntax from 'react-syntax-highlighter/prism'
import PropTypes from 'prop-types'
import { tomorrow } from 'react-syntax-highlighter/styles/prism'
import IconButton from 'material-ui/IconButton'
import CopyIcon from 'material-ui-icons/ContentCopy'
import Tooltip from 'material-ui/Tooltip'
import Snackbar from 'material-ui/Snackbar'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import CloseButton from './CloseButton'

const styles = {
  codeBlock: {
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

const CodeBlockBackground = ({ children, style, textToCopy, onCopy }) => (
  <div style={{ ...style, ...styles.codeBlock }}>
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

CodeBlockBackground.propTypes = {
  children: PropTypes.array.isRequired,
  style: PropTypes.object.isRequired,
  textToCopy: PropTypes.string.isRequired,
  onCopy: PropTypes.func.isRequired
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
    const { children, language } = this.props

    return (
      <div>
        <Syntax
          language={language || 'json'}
          style={tomorrow}
          customStyle={styles.codeBlock}
          PreTag={props => (
            <CodeBlockBackground textToCopy={children} {...props} onCopy={this.openSnackbar.bind(this)} />
          )}
        >
          {children}
        </Syntax>
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
  children: PropTypes.string.isRequired,
  language: PropTypes.string
}

export default CodeBlock
