import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { withStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

function styles(theme: Theme) {
  const NAV_ITEM_BACKGROUND_COLOR = 'rgba(0, 0, 0, 0.4)'

  return {
    root: {
      flexGrow: 1
    },
    center: {
      margin: '0 auto'
    },
    title: {
      ...theme.typography.h6,
      color: theme.palette.common.white,
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

interface Props {
  classes: {
    root: string
    center: string
    title: string
    nav: string
    navItem: string
    navItemSelected: string
  }
  children: React.ReactNode
}

function Layout({ classes, children }: Props) {
  return (
    <>
      <AppBar className={classes.root} position="static" color="primary">
        <Toolbar>
          <Link className={classes.title} to="/">
            USER API
          </Link>
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
    </>
  )
}

export default withStyles(styles)(Layout)
