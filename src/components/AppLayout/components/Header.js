import React from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'

import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

const NAV_ITEM_BACKGROUND_COLOR = 'rgba(0, 0, 0, 0.4)'

const styles = {
  root: {
    flexGrow: 1
  },
  center: {
    margin: '0 auto'
  },
  title: {
    marginRight: '10px',
    textDecoration: 'none'
  },
  nav: {
    marginLeft: '50px',
    height: '4em'
  },
  navItem: {
    color: 'white',
    transition: 'all 150ms ease',
    textDecoration: 'none',
    lineHeight: '65px',
    padding: '23px',
    '&:hover': {
      backgroundColor: NAV_ITEM_BACKGROUND_COLOR
    }
  },
  navItemSelected: {
    color: 'white',
    paddingBottom: '19px',
    backgroundColor: NAV_ITEM_BACKGROUND_COLOR,
    borderBottom: '4px solid white'
  }
}

const NAV_ITEMS = [
  {
    name: 'docs',
    to: '/docs'
  }
]

const Header = ({ classes }) => (
  <AppBar className={classes.root} position="static" color="primary">
    <Toolbar>
      <Typography component={Link} to="/" className={classes.title} variant="title" color="inherit">
        USER API
      </Typography>
      <div className={classes.nav}>
        {NAV_ITEMS.map((item, key) => (
          <NavLink key={key} to={item.to} activeClassName={classes.navItemSelected} className={classes.navItem}>
            {item.name.toUpperCase()}
          </NavLink>
        ))}
      </div>
    </Toolbar>
  </AppBar>
)

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header)
