import React, { useEffect, useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import { LoginRegisterHeader } from "../../components/LoginRegisterHeader/LoginRegisterHeader";
import { colors } from "../../utils/constanst/Colors";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      backgroundColor: colors.loginBackground,
      padding: "1rem",
    },
  },

  loginContainer: {
    backgroundColor: colors.loginBackground,
    justifyContent: "center",
    padding: "8rem 0",
    [theme.breakpoints.down("md")]: {
      padding: "7rem 0",
    },
  },
  loginContainerSmall: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  signUpContainer: {
    backgroundColor: colors.white,
    justifyContent: "center",
    padding: "8rem 0",
    [theme.breakpoints.down("md")]: {
      padding: "7rem 0",
      backgroundColor: colors.loginBackground,
    },
  },
  signUpContainerSmall: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

export const LoginRegister = () => {
  const classes = useStyles();
  const [check, setCheck] = useState(true);

  const loginInputItem = [
    {
      inputName: "Email",
      inputType: "text",
      inputPlactHolder: "Email",
    },
    {
      inputName: "Password",
      inputType: "password",
      inputPlactHolder: "Password",
    },
  ];
  const registerInputItem = [
    {
      inputName: "userName",
      inputType: "text",
      inputPlactHolder: "User Name*",
    },
    {
      inputName: "email",
      inputType: "text",
      inputPlactHolder: "Email*",
    },
    {
      inputName: "phone",
      inputType: "text",
      inputPlactHolder: "Phone",
    },
    {
      inputName: "password",
      inputType: "text",
      inputPlactHolder: "Password*",
    },
  ];
  const getValues = (data) => {
    setCheck(data);
  };
  return (
    <Grid container className={classes.root}>
      <Grid
        container
        md={12}
        sm={12}
        xs={12}
        lg={6}
        className={
          check
            ? `${classes.loginContainer} `
            : `${classes.loginContainer} ${classes.loginContainerSmall}`
        }
      >
        <LoginRegisterHeader
          heading={"Log in to your account"}
          desc={"Welcome back! Sign in to your account"}
          inputItem={loginInputItem}
          type={"login"}
          callback={getValues}
          check={check}
        />
      </Grid>
      <Grid
        container
        xs={0}
        md={12}
        lg={6}
        className={
          check
            ? `${classes.signUpContainerSmall} ${classes.signUpContainer}`
            : classes.signUpContainer
        }
      >
        <LoginRegisterHeader
          heading={"Register"}
          desc={"Create new account today."}
          inputItem={registerInputItem}
          type={"register"}
          callback={getValues}
          check={check}
        />
      </Grid>
    </Grid>
  );
};
