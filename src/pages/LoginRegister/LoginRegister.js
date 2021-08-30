import React, { useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import { LoginRegisterHeader } from "../../components/LoginRegisterHeader/LoginRegisterHeader";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export const LoginRegister = () => {
  const classes = useStyles();
  const loginInputItem = [
    {
      inputName: "Email",
      inputType: "text",
      inputPlactHolder: "Email and UserName",
    },
    {
      inputName: "Password",
      inputType: "password",
      inputPlactHolder: "Password",
    },
  ];
  const registerInputItem = [
    {
      inputName: "Email",
      inputType: "text",
      inputPlactHolder: "Email and UserName",
    },
    {
      inputName: "Password",
      inputType: "password",
      inputPlactHolder: "Password",
    },
    {
      inputName: "Email",
      inputType: "text",
      inputPlactHolder: "Email and UserName",
    },
    {
      inputName: "Password",
      inputType: "text",
      inputPlactHolder: "Password",
    },
  ];
  return (
    <div>
      <Grid container className={classes.root}>
        <LoginRegisterHeader
          heading={"Log in to your account"}
          desc={"Welcome back! Sign in to your account"}
          backcolor={"#f2f5fb"}
          inputItem={loginInputItem}
          type={"login"}
        />
        <LoginRegisterHeader
          heading={"Register"}
          desc={"Create new account today."}
          inputItem={registerInputItem}
          type={"register"}
        />
      </Grid>
    </div>
  );
};
