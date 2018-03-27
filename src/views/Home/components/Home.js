import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Paper from 'material-ui/Paper'
import { CircularProgress } from 'material-ui/Progress'
import MarkdownRenderer from 'react-markdown-renderer'
import { withStyles } from 'material-ui/styles'

const ONE_HOUR_IN_MILLISECONDS = 3600000

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

  isREADMEExpired() {
    const now = Date.now()
    const storedTime = localStorage.getItem('userapi-stored-time')

    return (now - storedTime) > ONE_HOUR_IN_MILLISECONDS
  }

  setREADME(markdown) {
    localStorage.setItem('userapi-stored-time', Date.now())
    localStorage.setItem('userapi-markdown', markdown)
  }

  getREADME() {
    const storedMD = localStorage.getItem('userapi-markdown')

    if (!storedMD || this.isREADMEExpired()) {
      axios.get('https://api.github.com/repos/wraytw/userapi.io/contents/README.md?ref=master')
        .then(res => atob(res.data.content))
        .then(md => {
          this.setREADME(md)

          this.setState({
            markdown: md
          })
        })
    }

    this.setState({
      markdown: storedMD
    })
  }

  componentDidMount() {
    this.getREADME()
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
