import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import CodeBlock from './CodeBlock'

const styles = theme => {
  console.log(theme)

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
      fontSize: 20,
      color: theme.palette.secondary.main
    },
    description: {
      marginBottom: 10,
      marginLeft: 24,
      fontSize: 16
    }
  }
}

const Endpoint = ({ classes, endpoint, method, description, request, requestLanguage, status, response, onSnippetCopy }) => (
  <Card className={classes.card}>
    <CardContent className={classes.content}>
      <Typography className={classes.method} color="textSecondary">
        {method.toUpperCase()}
      </Typography>
      <Typography className={classes.endpoint} variant="headline">
        {endpoint}
      </Typography>
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
    {/* <CardActions>
      <Button size="small">Try it out</Button>
    </CardActions> */}
  </Card>
)

Endpoint.propTypes = {
  classes: PropTypes.object,
  endpoint: PropTypes.string,
  method: PropTypes.string,
  description: PropTypes.string,
  request: PropTypes.string,
  requestLanguage: PropTypes.string,
  status: PropTypes.string,
  response: PropTypes.any,
  onSnippetCopy: PropTypes.func.isRequired
}

export default withStyles(styles)(Endpoint)
