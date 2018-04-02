import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tabs, { Tab } from 'material-ui/Tabs'
import { withStyles } from 'material-ui/styles'
import { endpoints } from '../endpoints'
import Endpoint from '../../../shared/Endpoint'

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
    classes: PropTypes.object
  }

  state = {
    selectedRequestLang: 'bash'
  }

  changeLanguage(lang) {
    this.setState({ selectedRequestLang: lang })
  }

  render() {
    const { classes } = this.props

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
            response={ep.exampleResponse} />
        ))}
      </div>
    )
  }
}

export default withStyles(styles)(Docs)
