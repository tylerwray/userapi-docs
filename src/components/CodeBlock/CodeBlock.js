import React from 'react'
import PropTypes from 'prop-types'

import Syntax from 'react-syntax-highlighter/prism'
import { tomorrow } from 'react-syntax-highlighter/styles/prism'

import Background from './Background'

const styles = {
  codeBlock: {
    borderRadius: 0,
    position: 'relative'
  }
}

function CodeBlock({ children, language, onCopy }) {
  return (
    <Syntax
      language={language || 'json'}
      style={tomorrow}
      customStyle={styles.codeBlock}
      PreTag={props => (
        <Background textToCopy={children} {...props} onCopy={onCopy} />
      )}
    >
      {children}
    </Syntax>
  )
}

CodeBlock.propTypes = {
  children: PropTypes.string.isRequired,
  language: PropTypes.string,
  onCopy: PropTypes.func.isRequired
}

export default CodeBlock
