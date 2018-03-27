import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Paper from 'material-ui/Paper'
import { CircularProgress } from 'material-ui/Progress'
import MarkdownRenderer from 'react-markdown-renderer'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: `${theme.spacing.unit * 3}px auto`,
    maxWidth: '800px'
  }),
  progress: {
    textAlign: 'center'
  }
})

class Home extends Component {
  state = {
    markdown: null
  }

  static propTypes = {
    classes: PropTypes.object
  }

  componentDidMount() {
    axios.get('https://api.github.com/repos/wraytw/userapi.io/contents/README.md?ref=master')
      .then(res => atob(res.data.content))
      .then(markdown => {
        this.setState({
          markdown
        })
      })
  }

  render() {
    const { classes } = this.props

    return (
      <Paper className={classes.root} elevation={2}>
        {this.state.markdown
          ? <MarkdownRenderer markdown={this.state.markdown} />
          : (
            <div className={classes.progress}>
              <CircularProgress />
            </div>
          )
        }
      </Paper>
    )
  }
}

export default withStyles(styles)(Home)
