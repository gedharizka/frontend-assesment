import {createTheme} from '@mui/material/styles'

const theme = createTheme({
  palette:{
    primary:{
      main:'#3E76FF'
    }
  },
  typography :{
    'fontFamily':` 'Poppins', sans-serif`,
    "fontWeightRegular":"400",
    "fontWeightMedium":"500",
    "fontWeightBold":"600"
  },
  components :{
    MuiAppBar :{
      styleOverrides:{
        colorPrimary: {
          backgroundColor:"#fff"
        }
      },
    }
  }
})

export default theme