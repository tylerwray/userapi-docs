import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'

const AppLayout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
)

AppLayout.propTypes = {
  children: PropTypes.object
}

export default AppLayout
