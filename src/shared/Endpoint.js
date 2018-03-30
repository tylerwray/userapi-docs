import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import CodeBlock from './CodeBlock'

const styles = theme => {
  console.log(theme)

  return {
    card: {
      maxWidth: 800,
      margin: '50px auto'
    },
    title: {
      margin: '16px 0',
      fontSize: 14
    },
    endpoint: {
      color: theme.palette.text.primary
    }
  }
}

const Endpoint = ({ classes, endpoint, method, description, code }) => (
  <Card className={classes.card}>
    <CardContent>
      <Typography className={classes.endpoint} variant="headline" component="h2">
        {endpoint}
      </Typography>
      <Typography className={classes.title} color="textSecondary">
        {method.toUpperCase()}
      </Typography>
      <Typography component="p" style={{ marginBottom: '10px' }}>
        {description}
      </Typography>
      <CodeBlock>
        {code}
      </CodeBlock>
    </CardContent>
    <CardActions>
      <Button size="small">Try it out</Button>
    </CardActions>
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
