import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

function styles(theme) {
  const NAV_ITEM_BACKGROUND_COLOR = 'rgba(0, 0, 0, 0.4)'

  return {
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
      fontFamily: theme.typography.fontFamily,
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
}

const NAV_ITEMS = [
  {
    name: 'docs',
    to: '/docs'
  }
]

function Layout({ classes, children }) {
  return (
    <Fragment>
      <AppBar className={classes.root} position="static" color="primary">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            className={classes.title}
            variant="h6"
            color="inherit"
          >
            USER API
          </Typography>
          <div className={classes.nav}>
            {NAV_ITEMS.map((item, key) => (
              <NavLink
                key={key}
                to={item.to}
                activeClassName={classes.navItemSelected}
                className={classes.navItem}
              >
                {item.name.toUpperCase()}
              </NavLink>
            ))}
          </div>
        </Toolbar>
      </AppBar>
      {children}
    </Fragment>
  )
}

export default withStyles(styles)(Layout)
