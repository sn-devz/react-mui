import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { colors } from "../../../../utils";
import { useHistory } from "react-router-dom";

const breakpoints = createBreakpoints({});

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    justifyContent: "center",
  },
  btnStyle: {
    backgroundColor: colors.themeColor2,
    color: colors.white,
    padding: "0.8rem 3.5rem",
    margin: "1rem 0 0 0",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    fontWeight: "bold",
    [breakpoints.down("sm")]: {
      width: "70%",
    },
    "&:hover": {
      backgroundColor: "#fa6c39",
    },
  },
  headingText: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginTop: "2rem",
    fontWeight: "bold",
    [breakpoints.down("sm")]: {
      margin: "0 2rem",
    },
  },
  textError: {
    textAlign: "center",
    fontSize: "15rem",
    fontWeight: "bold",
    [breakpoints.down("sm")]: {
      fontSize: "7rem",
    },
  },
}));

export const PageNotFound = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container xs={12} sm={12} className={classes.mainContainer}>
      <Grid item xs={12} sm={12}>
        <Typography className={classes.headingText}>
          Oops! That page can't be found.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography className={classes.textError}>404</Typography>
      </Grid>
      <Button className={classes.btnStyle} onClick={() => history.push("/")}>
        Back to HomePage
      </Button>
    </Grid>
  );
};
