import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
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

const Endpoint = ({ classes, endpoint, method, description, code }) => (
  <Card className={classes.card}>
    <CardContent className={classes.content}>
      <Typography className={classes.method} color="textSecondary">
        {method.toUpperCase()}
      </Typography>
      <Typography className={classes.endpoint} variant="headline">
        {endpoint}
      </Typography>
      <Typography component="p" className={classes.description}>
        {description}
      </Typography>
      <CodeBlock>
        {code}
      </CodeBlock>
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
  code: PropTypes.string
}

export default withStyles(styles)(Endpoint)
