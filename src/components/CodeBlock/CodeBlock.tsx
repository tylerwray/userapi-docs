import React from 'react'

import Syntax from 'react-syntax-highlighter/prism'
import { tomorrow } from 'react-syntax-highlighter/styles/prism'

import Background from './Background'

const styles = {
  codeBlock: {
    borderRadius: 0,
    position: 'relative'
  }
}

interface Props {
  children: React.ReactNode
  language?: string
  onCopy(a: string, b: boolean): void
}

function CodeBlock({ children, language = 'json', onCopy }: Props) {
  return (
    <Syntax
      language={language}
      style={tomorrow}
      customStyle={styles.codeBlock}
      PreTag={(props: any) => (
        <Background textToCopy={children} {...props} onCopy={onCopy} />
      )}
    >
      {children}
    </Syntax>
  )
}

export default CodeBlock
