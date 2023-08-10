import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from 'react'

const useStyle = makeStyles({
  root:{
    fontSize:'30px !important'
  }
})


const TitleSignin = (props) => {
  const classes = useStyle()
  return (
    <Typography className={classes.root}>{props.children}</Typography>
  )
}

export default TitleSignin