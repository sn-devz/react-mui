import React, { useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import { colors } from "../../utils/constanst/Colors";

const useStyles = makeStyles((theme) => ({
  item: {
    margin: "0.2rem ",
  },
  inputModal: {
    height: "50px",
    width: "99%",
    backgroundColor: colors.white,
    borderRadius: "0.5rem",
    boxShadow: "0 0 0.2rem lightgrey",
    border: "1px solid lightgrey",
    paddingLeft: "0.5rem",
    "&::placeholder": {
      paddingLeft: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "inherit",
      width: "99%",
    },
  },
}));

export const InputComponent = ({ inputName, inputType, inputPlaceHolder }) => {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.item}>
            <input
              className={classes.inputModal}
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
