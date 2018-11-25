import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles, Theme, createStyles } from '@material-ui/core/styles'

import ReactMarkdown from 'react-markdown'

import WelcomeSnackbar from './WelcomeSnackbar'

function getReadme(): Promise<string> {
  const README_ENDPOINT =
    'https://api.github.com/repos/tylerwray/userapi-docs/contents/README.md?ref=master'

  return axios.get(README_ENDPOINT).then(res => atob(res.data.content))
}

function styles(theme: Theme) {
  return createStyles({
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
  })
}

interface Props {
  classes: {
    root: string
    progress: string
    markdown: string
  }
}

function HomePage({ classes }: Props) {
  const [readme, setReadme] = useState('')
  const mounted = useRef(null)

  useEffect(() => {
    if (readme === '') {
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
        <ReactMarkdown className={classes.markdown} source={readme} />
      ) : (
        <div className={classes.progress}>
          <CircularProgress />
        </div>
      )}
      <WelcomeSnackbar open={open} onClose={closeWelcomeSnackbar} />
    </Paper>
  )
}

export default withStyles(styles)(HomePage)
