import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import Button from 'material-ui/Button'

import CodeBlock from './CodeBlock'

function styles(theme) {
  return {
    card: {
      maxWidth: 800,
      margin: '50px auto'
    },
    content: {
      paddingLeft: 0,
      paddingRight: 0,
      // NOTE: Temporary, might remove later
      '&:last-child': {
        paddingBottom: 0
      }
    },
    codeBlockLabel: {
      marginLeft: 24,
      marginTop: 25
    },
    endpoint: {
      color: theme.palette.text.primary,
      display: 'inline-block',
      marginBottom: 16,
      marginLeft: 10
    },
    method: {
      marginLeft: 24,
      display: 'inline-block',
      fontSize: 24,
      fontWeight: 500,
      color: theme.palette.secondary.main
    },
    tryMeButton: {
      float: 'right',
      marginRight: 15
    },
    description: {
      marginBottom: 10,
      marginLeft: 24,
      fontSize: 16
    }
  }
}

function Endpoint(props) {
  const {
    classes,
    endpoint,
    method,
    description,
    request,
    requestLanguage,
    status,
    response,
    tryMeUrl,
    onSnippetCopy
  } = props

  console.log(tryMeUrl)

  return (
  <Card className={classes.card}>
    <CardContent className={classes.content}>
      <Typography className={classes.method} color="textSecondary">
        {method.toUpperCase()}
      </Typography>
      <Typography className={classes.endpoint} variant="headline">
        {endpoint}
      </Typography>
      <Button color="secondary" variant="raised" className={classes.tryMeButton} href={tryMeUrl} target="_blank">Try me out</Button>
      <Typography variant="display2" className={classes.description}>
        {description}
      </Typography>
      <Divider />
      {
        request
        &&
        <Typography variant="subheading" className={classes.codeBlockLabel}>
          Example {requestLanguage} Request
        </Typography>
      }
      {
        request
        &&
        <CodeBlock language={requestLanguage} onCopy={onSnippetCopy}>
          {request}
        </CodeBlock>
      }
      <Typography variant="subheading" className={classes.codeBlockLabel}>
        Example Response
      </Typography>
      <CodeBlock onCopy={onSnippetCopy}>
        {status}
      </CodeBlock>
      {
        response
        &&
        <CodeBlock onCopy={onSnippetCopy}>
          {JSON.stringify(response, null, '  ')}
        </CodeBlock>
      }
    </CardContent>
  </Card>
)
}
Endpoint.propTypes = {
  classes: PropTypes.object,
  endpoint: PropTypes.string,
  method: PropTypes.string,
  description: PropTypes.string,
  request: PropTypes.string,
  requestLanguage: PropTypes.string,
  status: PropTypes.string,
  response: PropTypes.any,
  tryMeUrl: PropTypes.string.isRequired,
  onSnippetCopy: PropTypes.func.isRequired
}

export default withStyles(styles)(Endpoint)
