import React from 'react'
import useStyle from './useStyle'

const Layout = (props) => {
  const classes = useStyle()
  return (
    <div className={classes.layout}>
      {props.children}
    </div>
  )
}

export default Layout