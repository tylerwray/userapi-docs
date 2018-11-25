import React from 'react'

import { withStyles, Theme, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import { Response } from './Response'

import CodeBlock from './CodeBlock'

function styles(theme: Theme) {
  return createStyles({
    card: {
      maxWidth: 800,
      margin: '50px auto'
    },
    content: {
      paddingLeft: 0,
      paddingRight: 0,
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
      marginLeft: 24
    }
  })
}

interface Props {
  classes: {
    card: string
    content: string
    codeBlockLabel: string
    endpoint: string
    method: string
    tryMeButton: string
    description: string
  }
  endpoint: string
  method: string
  description: string
  request: string
  response: Response
  tryMeUrl: string
  onSnippetCopy(a: string, b: boolean): void
}

function Endpoint(props: Props) {
  const {
    classes,
    endpoint,
    method,
    description,
    request,
    response,
    tryMeUrl,
    onSnippetCopy
  } = props

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography
          className={classes.method}
          variant="h5"
          color="textSecondary"
        >
          {method.toUpperCase()}
        </Typography>
        <Typography className={classes.endpoint} variant="h5">
          {endpoint}
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          className={classes.tryMeButton}
          href={tryMeUrl}
          target="_blank"
        >
          Try me out
        </Button>
        <Typography variant="body1" className={classes.description}>
          {description}
        </Typography>
        <Divider />
        <Typography variant="subtitle1" className={classes.codeBlockLabel}>
          Example bash Request
        </Typography>
        <CodeBlock language={'bash'} onCopy={onSnippetCopy}>
          {request}
        </CodeBlock>
        <Typography variant="subtitle1" className={classes.codeBlockLabel}>
          Example Response
        </Typography>
        {response && (
          <CodeBlock onCopy={onSnippetCopy}>
            {JSON.stringify(response, null, '  ')}
          </CodeBlock>
        )}
      </CardContent>
    </Card>
  )
}

export default withStyles(styles)(Endpoint)
