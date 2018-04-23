import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Paper from 'material-ui/Paper'
import { CircularProgress } from 'material-ui/Progress'
import MarkdownRenderer from 'react-markdown-renderer'
import { withStyles } from 'material-ui/styles'

import { closeWelcomeMessage, readmeRequest } from './actions'
import { WelcomeSnackbar } from '../../components'

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
  componentDidMount() {
    this.props.requestReadme()
  }

  render() {
    const { classes, readme, open, closeWelcomeSnackbar } = this.props

    return (
      <Paper className={classes.root} elevation={2}>
        {
          readme
            ? <MarkdownRenderer markdown={readme} />
            : (
              <div className={classes.progress}>
                <CircularProgress />
              </div>
            )
        }
        <WelcomeSnackbar
          open={open}
          onClose={closeWelcomeSnackbar}
        />
      </Paper>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool.isRequired,
  readme: PropTypes.string,
  closeWelcomeSnackbar: PropTypes.func.isRequired,
  requestReadme: PropTypes.func.isRequired
}

const mapStateToProps = ({ home }) => ({
  open: home.open,
  readme: home.readme
})

const mapDispatchToProps = dispatch => ({
  closeWelcomeSnackbar: () => {
    dispatch(closeWelcomeMessage())
  },
  requestReadme: () => {
    dispatch(readmeRequest())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home))
