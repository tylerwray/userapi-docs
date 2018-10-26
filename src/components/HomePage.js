import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'

import MarkdownRenderer from 'react-markdown-renderer'

import WelcomeSnackbar from './WelcomeSnackbar'
const getReadme = () =>
  axios
    .get(
      'https://api.github.com/repos/tylerwray/userapi-docs/contents/README.md?ref=master'
    )
    .then(res => atob(res.data.content))

function styles(theme) {
  return {
    root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      margin: `${theme.spacing.unit * 3}px auto`,
      maxWidth: '800px'
    }),
    progress: {
      textAlign: 'center'
    },
    markdown: {
      fontFamily: theme.typography.fontFamily
    }
  }
}

function HomePage({ classes }) {
  const [readme, setReadme] = useState(null)

  useEffect(() => {
    if (!readme) {
      getReadme().then(setReadme)
    }
  })

  const [open, setOpen] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setOpen(false)
    }, 2500)
  })

  function closeWelcomeSnackbar() {
    setOpen(false)
  }

  return (
    <Paper className={classes.root} elevation={2}>
      {readme ? (
        <MarkdownRenderer className={classes.markdown} markdown={readme} />
      ) : (
        <div className={classes.progress}>
          <CircularProgress />
        </div>
      )}
      <WelcomeSnackbar open={open} onClose={closeWelcomeSnackbar} />
    </Paper>
  )
}

HomePage.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(HomePage)
