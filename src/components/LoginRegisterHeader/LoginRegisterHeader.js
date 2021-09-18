import React, { useEffect, useState } from "react";
import { Box, makeStyles, Typography, Grid, Button } from "@material-ui/core";
import { FaceBookIcon, GoogleIcon } from "../../assets/icons/index";
import { colors } from "../../utils/constanst/Colors";
import { InputComponent } from "./index";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({});

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "30rem",
  },
  alignCenter: {
    alignSelf: "center",
  },
  heading: {
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
      fontWeight: "900",
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  headingDesc: {
    fontWeight: "100",
    marginTop: "1rem",

    color: colors.black,
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9rem",
    },
  },
  socialIconStyle: {
    width: "2.2rem",
    marginRight: "0.3rem",
  },
  socialAuthText: {
    fontSize: "1.4rem",
    fontWeight: "100",
  },
  socialGridDiv: {
    display: "flex",
    height: "3.5rem",
    backgroundColor: colors.white,
    margin: "0.3rem 0.45rem",
    boxShadow: "0 0 4px lightgray",
    borderRadius: "0.7rem",
    width: "10.1rem",
    [breakpoints.down("md")]: {
      width: "100%",
    },
    "&:hover": {
      boxShadow: "0 0 2px black",
    },
  },
  socialGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  simpText: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: "0.9rem",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      marginBottom: "0.4rem",
    },
  },

  checkBoxContainer: {
    display: "flex",
    alignItems: "center",
  },
  modelBtn: {
    backgroundColor: colors.themeColor2,
    color: colors.white,
    padding: "1rem 3rem",
    margin: "1rem 0",
    borderRadius: "0.5rem",
    fontSize: "1.2rem",
    [breakpoints.down("md")]: {
      width: "100%",
    },
  },
  radioContainer: {
    display: "flex",
    flexDirection: "row",
    margin: "1rem 0",
  },
  linkContainer: {
    fontWeight: "600",
    textDecorationLine: "underline",
    color: colors.themeColor2,
  },
  forgetPass: {
    textAlign: "end",
    fontWeight: "100",
    textDecorationLine: "underline",
  },

  buttonContainer: {
    padding: "0 1rem",
    [breakpoints.up("lg")]: {
      display: "none",
    },
  },
  btnStyle: {
    width: "13rem",
    height: "4rem",
    borderRadius: "0.5rem",
    boxShadow: "0 0 0.2rem lightgray",
  },
}));

export const LoginRegisterHeader = ({
  heading,
  desc,
  inputItem,
  type,
  callback,
  check,
  ...props
}) => {
  const classes = useStyles(props);
  const [state, setState] = React.useState(false);
  const [value, setValue] = useState("business");

  const handleChange = () => {
    setState(!state);
  };
  const handleChangeF = (event) => {
    setValue(event.target.value);
  };
  const loginCheckBox = () => {
    return (
      <Grid container>
        <Grid container style={{ padding: "0 0 0 0.5rem" }}>
          <Grid item xs={6} sm={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state}
                  onChange={handleChange}
                  name={"remeber"}
                  size={"small"}
                />
              }
              label="Remember"
            />
          </Grid>
          <Grid item xs={6} sm={6} className={classes.alignCenter}>
            <Typography className={classes.forgetPass}>
              ForgetPassword
            </Typography>
          </Grid>
        </Grid>
        <Button className={classes.modelBtn}>Login</Button>
      </Grid>
    );
  };
  const registerBox = () => {
    return (
      <Grid container style={{ padding: "0 0 0 0.5rem" }}>
        <RadioGroup
          className={classes.radioContainer}
          value={value}
          onChange={handleChangeF}
        >
          <FormControlLabel
            value="business"
            control={<Radio />}
            label="Business Seller"
            style={{ marginRight: "5rem" }}
          />
          <FormControlLabel
            value="privare"
            control={<Radio />}
            label="Private Seller"
          />
        </RadioGroup>
        <Grid
          item
          md={12}
          sm={12}
          xs={12}
          className={classes.checkBoxContainer}
        >
          <FormControlLabel
            style={{ marginRight: "0.5rem" }}
            control={
              <Checkbox
                checked={state}
                onChange={handleChange}
                name={"acceptTerms"}
              />
            }
            label="I accept the"
          />

          <Typography className={classes.linkContainer}>
            privacy policy
          </Typography>
        </Grid>
        <Button className={classes.modelBtn}>Register</Button>
      </Grid>
    );
  };
  return (
    <div className={classes.mainContainer}>
      <Grid item md={12} sm={12} xs={12}>
        <Grid container sm={12} className={classes.buttonContainer}>
          <Grid
            item
            xs={6}
            sm={6}
            style={{ display: "flex", padding: "0 0.8rem" }}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              style={{
                backgroundColor: check
                  ? colors.smlLoginScreenBtn
                  : colors.white,
              }}
              className={classes.btnStyle}
              onClick={() => {
                callback(true);
              }}
            >
              Login
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            style={{ display: "flex", padding: "0 0.8rem" }}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              style={{
                backgroundColor: check
                  ? colors.white
                  : colors.smlLoginScreenBtn,
              }}
              className={classes.btnStyle}
              onClick={() => callback(false)}
            >
              Register
            </Button>
          </Grid>
        </Grid>
        <Box mt={5} mb={3}>
          <Typography className={classes.heading} variant="h2">
            {heading}
          </Typography>
          <Typography variant="h5" className={classes.headingDesc}>
            {desc}
          </Typography>
        </Box>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={3}
            className={classes.alignCenter}
          >
            <Typography variant="h5" className={classes.simpText}>
              Continue with:
            </Typography>
          </Grid>
          <div className={classes.socialGridDiv}>
            <Grid item xs={12} sm={12} md={12} className={classes.socialGrid}>
              <img src={GoogleIcon} className={classes.socialIconStyle} />
              <Typography className={classes.socialAuthText}>Google</Typography>
            </Grid>
          </div>

          <div className={classes.socialGridDiv}>
            <Grid item xs={12} sm={12} md={12} className={classes.socialGrid}>
              <img src={FaceBookIcon} className={classes.socialIconStyle} />
              <Typography className={classes.socialAuthText}>
                FaceBook
              </Typography>
            </Grid>
          </div>
        </Grid>
        <Box mt={5} mb={5}>
          <Typography variant="h4" className={classes.headingDesc}>
            or
          </Typography>
        </Box>

        {inputItem.map((item) => {
          return (
            <InputComponent
              inputType={item.inputType}
              inputName={item.inputName}
              inputPlaceHolder={item.inputPlactHolder}
            />
          );
        })}

        {type === "login" ? loginCheckBox() : registerBox()}
      </Grid>
    </div>
  );
};
