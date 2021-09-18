import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { PageNotFound } from "./_/PageNotFound/PageNotFound";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({});
const useStyles = makeStyles((theme) => ({
  root: {
    height: "80vh",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    [breakpoints.down("sm")]: {
      height: "65vh",
    },
  },
}));

export const Errors = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PageNotFound />
    </div>
  );
};
