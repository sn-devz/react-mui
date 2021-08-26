import React, { useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import { colors } from "../../utils/constanst/Colors";

const useStyles = makeStyles((theme) => ({
  item: {
    width: "100%",
    margin: "0.1rem ",
    [theme.breakpoints.down("sm")]: {
      width: "99%",
    },
  },
  carsModal: {
    height: "50px",
    width: "90%",
    backgroundColor: colors.white,
    borderRadius: "0.5rem",
    border: "1px solid lightgrey",
    paddingLeft: "0.5rem",
    "&:focus": {
      outline: "none",
      borderColor: colors.themeColor2,
    },
    "&::placeholder": {
      paddingLeft: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "inherit",
    },
  },
}));

export const InputConponnet = ({ inputName, inputType, inputPlaceHolder }) => {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.item}>
            <input
              className={classes.carsModal}
              name={inputName}
              type={inputType}
              placeholder={inputPlaceHolder}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
