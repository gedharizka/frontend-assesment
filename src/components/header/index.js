import React from 'react'
import { AppBar,Box, } from "@mui/material";
import useStyle from './useStyle'
import logo from "../../assets/image4.svg";

const HeaderHome = () => {
  const classes = useStyle()
  return (
    <AppBar color="primary" position='static' className={classes.root}>
      <Box className={classes.boxImg}>
        <img src={logo} alt="logo" />
      </Box>
    </AppBar>
  )
}

export default HeaderHome