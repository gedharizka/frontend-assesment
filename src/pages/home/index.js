import React from "react";
import HeaderHome from "../../components/header";
import lLeftTiltTransparent from "../../assets/lLeftTiltTransparent.svg";
import fb from "../../assets/Facebook.svg";
import apple from "../../assets/apple.svg";
import google from "../../assets/google.svg";
import slider from "../../assets/Group21.svg";
import {
  Container,
  FormControl,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import TitleSignin from "../../components/title-signin";
import { RemoveRedEye } from "@mui/icons-material";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "95vh",
    flexDirection: "column",
    justifyContent: "center",
  },
  MuiFormControlRoot: {
    marginTop: `28px !important`,
  },
  inputRoot: {
    borderRadius: "8 !important",
  },
  iconColor: {
    color: theme.palette.primary.main,
  },
  boxFlex: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 28,
  },
  textMuted: {
    fontSize: 13,
    color: "#b0b0b0",
  },
  btnLogin: {
    width: "100%",
    marginTop: "28px",
    height: 59,
    boxShadow: "0px 4px 61px 0px rgba(62, 118, 255, 0.40) !important",
  },
}));

const Home = () => {
  const classes = useStyle();
  return (
    <>
      <HeaderHome />
      <Container maxWidth={false} disableGutters>
        <Grid container spacing={2} disableGutters>
          <Grid
            className={classes.root}
            item
            direction="column"
            alignItems="center"
            lg={6}
            md={6}
            xs={6}
            disableGutters
          >
            <img src={lLeftTiltTransparent} alt="home" />
            <Box sx={{mt:'116px'}}>
              <img src={slider} alt="slider"  />
            </Box>

            
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            item
            lg={6}
            md={6}
            xs={6}
            disableGutters
          >
            <Grid lg={6} md={6}>
              <form>
                <TitleSignin>Sign in</TitleSignin>
                <FormControl className={classes.MuiFormControlRoot} fullWidth>
                  <TextField
                    placeholder="Email"
                    fullWidth
                    className={classes.inputRoot}
                  />
                </FormControl>
                <FormControl className={classes.MuiFormControlRoot} fullWidth>
                  <TextField
                    placeholder="Password"
                    className={classes.inputRoot}
                    type="password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <RemoveRedEye className={classes.iconColor} />
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                  />
                </FormControl>
                <Grid
                  container
                  direction="row"
                  sx={{ mt: "28px" }}
                  justifyContent="end"
                >
                  <Typography className={classes.textMuted}>
                    forgot password
                  </Typography>
                </Grid>

                <Button
                  variant="contained"
                  sx={{ mt: "28px" }}
                  className={classes.btnLogin}
                >
                  Login
                </Button>
              </form>

              <Grid sx={{mt:'45px'}} container direction="row" justifyContent="center">
                <Typography className={classes.textMuted}>
                  or continue with
                </Typography>
              </Grid>

              <Grid container sx={{mt:'45px'}} direction="row" justifyContent="center">
                <Box>
                  <img src={fb} alt="login-fb"/>
                </Box>
                <Box>
                  <img src={apple} alt="login-apple" />
                </Box>
                <Box>
                  <img src={google} alt="login-goole"/>
                </Box>
              </Grid>

              <Grid  sx={{mt:'55px'}} container direction="row" justifyContent="center">
                <Typography variant="subtitle1">You Don't Have Account ? <a href="http://localhost:3000">Register Here </a></Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
