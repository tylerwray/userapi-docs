import React, { Fragment, useState } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar'

import { endpoints } from './endpoints'
import Endpoint from '../Endpoint'
import CloseIconButton from '../CloseIconButton'

const styles = {
  toolBar: {
    backgroundColor: '#F5F5F5'
  },
  tabBar: {
    maxWidth: 800,
    margin: '0 auto'
  }
}

function DocsPage() {
  const [open, setOpen] = useState(false)

  function onClose() {
    setOpen(false)
  }

  function onSnippetCopy() {
    setOpen(true)
    setTimeout(() => {
      setOpen(false)
    }, 1500)
  }

  return (
    <Fragment>
      {endpoints.map((endpoint, key) => (
        <Endpoint key={key} {...endpoint} onSnippetCopy={onSnippetCopy} />
      ))}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        ContentProps={{
          'aria-describedby': 'message-id'
        }}
        message={<span id="message-id">Copied response to clipboard</span>}
        action={<CloseIconButton onClick={onClose} />}
      />
    </Fragment>
  )
}

export default withStyles(styles)(DocsPage)
