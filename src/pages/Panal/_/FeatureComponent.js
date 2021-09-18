import React, { useEffect, useState } from "react";
import { makeStyles, Grid, Typography, Button } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { colors } from "../../../utils";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";

const breakpoints = createBreakpoints({});
const useStyles = makeStyles((theme) => ({
  mainRoot: {
    padding: "10rem 13rem",
    [breakpoints.down("md")]: {
      padding: "10rem 1rem",
    },
  },
  divider: { backgroundColor: "grey", margin: "0 2rem" },

  subRoot: {
    backgroundColor: "#f2f5fb",
    padding: "4rem 2rem",
    borderRadius: "1rem",
    alignItems: "center",
    // [breakpoints.down("md")]: {
    //   padding: "10rem 0 10rem 0rem",
    // },
  },
  carsModal: {
    height: "50px",
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: "15px",
    border: "1px solid lightgrey",
    padding: 0,
    "&:focus": {
      outline: "none",
      borderColor: colors.themeColor2,
    },
    "&::placeholder": {
      paddingLeft: "10px",
    },
    [breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  listingInput: {
    height: "50px",
    width: "88.4%",
    backgroundColor: colors.white,
    borderRadius: "15px",
    border: "1px solid lightgrey",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem 0",
    display: "flex",
    padding: 0,
    "&:focus": {
      outline: "none",
      borderColor: colors.themeColor2,
    },
    "&::placeholder": {
      paddingLeft: "10px",
    },
    [breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  listingGrid: {
    marginLeft: "8.5rem",
    [breakpoints.down("sm")]: {
      marginLeft: "1rem",
    },
  },
  dropDownGrid: {
    margin: "1rem ",
  },
  itemContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textEditor: {
    height: "30rem",
    width: "88.4%",
    backgroundColor: colors.white,
    borderRadius: "15px",
    border: "1px solid lightgrey",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    padding: 0,
    margin: "1rem 0",
    "&:focus": {
      outline: "none",
      borderColor: colors.themeColor2,
    },
    "&::placeholder": {
      paddingLeft: "10px",
    },
    [breakpoints.down("sm")]: {
      width: "100%",
      height: "20rem",
    },
  },
  grayColor: {
    color: colors.light_gray,
    "&:hover": {
      color: colors.themeColor2,
    },
  },
  featureItemClick: {
    border: "0.1rem solid #ff4605",
    backgroundColor: "#fff0eb",
  },
  featureItemWithoutClick: {
    backgroundColor: colors.white,
    "&:hover": {
      border: "0.1rem solid #ff4605",
      backgroundColor: "#fff0eb",
    },
  },
  featureItemStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0.5rem 1rem",
    padding: "1.4rem 0",
    borderRadius: "1rem",
    cursor: "pointer",
  },
  iconSize: {
    fontSize: "5rem",
    marginRight: "1rem",
    [breakpoints.down("sm")]: {
      fontSize: "3.5rem",
    },
  },
  selectorTextSize: {
    fontSize: "3rem",
    [breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  selectorMainContainer: {
    display: "flex",
    alignItems: "center",
  },
  tipLeftCont: {
    padding: "1rem 0.8rem",
  },
  selectorSubCont: {
    margin: "2rem 0",
    backgroundColor: "#e9f5ff",
    border: "0.12rem solid #058aff",
    borderRadius: "0.5rem",

    [breakpoints.down("sm")]: {
      display: "none",
    },
  },
  headingText: {
    margin: "2rem 0",
    [breakpoints.down("sm")]: {
      margin: "2rem 0",
    },
  },
  tipsText: { color: colors.themeColor2, fontWeight: "300" },
}));

export const FeatureComponent = ({ basicFeatures, onClick, showBtn }) => {
  const classes = useStyles();
  const [selectedF, setSelectedF] = useState([]);

  function fSelectedArray(items, index) {
    const isPresent = [...selectedF].some((item) => items === item);
    // debugger;
    if (isPresent) {
      const newItem = [...selectedF].filter((item) => item !== items);
      setSelectedF(newItem);
    } else {
      setSelectedF([...selectedF, items]);
    }
  }

  useEffect(() => {
    // debugger;
  }, [selectedF]);
  return (
    <Grid container className={classes.subRoot} lg={12} md={12} sm={12} xs={12}>
      {basicFeatures.map((items, index) => (
        <Grid
          item
          lg={2}
          md={2}
          className={`${classes.featureItemStyle}  ${
            selectedF.includes(items)
              ? classes.featureItemClick
              : classes.featureItemWithoutClick
          }`}
          onClick={() => fSelectedArray(items, index)}
        >
          <Typography>{items}</Typography>
        </Grid>
      ))}
      {showBtn && (
        <Grid container style={{ margin: "3rem 0 0 2rem" }}>
          <Button
            onClick={onClick}
            style={{
              color: colors.themeColor2,
              textDecorationLine: "underline",
            }}
          >
            LoadMore
          </Button>
          {/* <a href="#" onClick={onClick} style={{ color: colors.themeColor2 }}>
            {" "}
            Load More
          </a> */}
        </Grid>
      )}
    </Grid>
  );
};
