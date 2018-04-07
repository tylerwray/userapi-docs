import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tabs, { Tab } from 'material-ui/Tabs'
import { withStyles } from 'material-ui/styles'
import { endpoints } from '../endpoints'
import Endpoint from '../../../shared/Endpoint'
import CloseButton from '../../../shared/CloseButton'
import { connect } from 'react-redux'
import Snackbar from 'material-ui/Snackbar'
import { copiedCodeSnippet, closeCopiedMessage } from '../actions/codeBlock'

const styles = () => ({
  toolBar: {
    backgroundColor: '#F5F5F5'
  },
  tabBar: {
    maxWidth: 800,
    margin: '0 auto'
  }
})

class Docs extends Component {
  static propTypes = {
    classes: PropTypes.object,
    copiedMessageOpen: PropTypes.bool.isRequired,
    onSnippetCopy: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
  }

  state = {
    selectedRequestLang: 'bash'
  }

  changeLanguage(lang) {
    this.setState({ selectedRequestLang: lang })
  }

  render() {
    const { classes, copiedMessageOpen, onSnippetCopy, onClose } = this.props

    return (
      <div>
        <div className={classes.toolBar}>
          <div className={classes.tabBar}>
            <Tabs
              value={this.state.selectedRequestLang}
              onChange={(_, value) => this.changeLanguage(value)}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
            >
              <Tab label="Curl" value="bash" />
              <Tab label="Javascript" value="javascript" />
              <Tab label="Go" value="go" />
              <Tab label="PHP" value="php"/>
            </Tabs>
          </div>
        </div>
        {endpoints.map((ep, key) => (
          <Endpoint
            key={key}
            endpoint={ep.endpoint}
            method={ep.method}
            description={ep.description}
            request={ep[this.state.selectedRequestLang]}
            requestLanguage={this.state.selectedRequestLang}
            status={ep.exampleStatus}
            response={ep.exampleResponse}
            onSnippetCopy={onSnippetCopy}
          />
        ))}
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={copiedMessageOpen}
          SnackbarContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="message-id">Copied response to clipboard</span>}
          action={
            <CloseButton onClick={onClose} />
          }
        />
      </div>
    )
  }
}

const mapStateToProps = ({ codeBlock }) => ({
  copiedMessageOpen: codeBlock.messageOpen
})

const mapDispatchToProps = dispatch => ({
  onSnippetCopy: () => {
    dispatch(copiedCodeSnippet())
  },
  onClose: () => {
    dispatch(closeCopiedMessage())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Docs))
