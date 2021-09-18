import React, { useEffect, useState } from "react";
import { Grid, Typography, Divider, makeStyles } from "@material-ui/core";

import { carCondition, colors } from "../../../utils";
import { DropDown } from "../../../components";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});
const useStyles = makeStyles((theme) => ({
  divider: { backgroundColor: "grey", margin: "0 2rem" },

  subRoot: {
    backgroundColor: "#f2f5fb",
    padding: "4rem 2rem",
    borderRadius: "1rem",
    alignItems: "center",
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

    [breakpoints.down("md")]: {
      width: "93%",
    },
    [breakpoints.down("sm")]: {
      width: "98%",
    },
  },
  listingGrid: {
    marginLeft: "8.5rem",

    [breakpoints.down("md")]: {
      marginLeft: "4rem",
    },
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
  header: {
    padding: "2rem",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    width: "80%",
    backgroundColor: "#e9f5ff",
    border: "0.12rem solid #058aff",
    borderRadius: "0.5rem",
    margin: "2.5rem 0",
    [breakpoints.down("md")]: {
      width: "86%",
    },
    [breakpoints.down("sm")]: {
      width: "96%",
    },
  },
  headerText: {
    color: "#058aff",
    fontSize: "1.2rem",
  },
}));

export const InputContainer = () => {
  const classes = useStyles();

  const [selectedOptions, setSelectedOptions] = useState(null);
  return (
    <Grid item sm={12} className={classes.subRoot}>
      <Grid container className={classes.itemContainer}>
        <Grid item className={classes.header}>
          <span className={classes.headerText}>
            You can also&nbsp;
            <a
              className={classes.headerText}
              href="mailto:yourcompany@gmail.com"
            >
              Login
            </a>
            &nbsp;or&nbsp;
            <a
              className={classes.headerText}
              href="mailto:yourcompany@gmail.com"
            >
              Register
            </a>
            &nbsp;here.
          </span>
        </Grid>
        <Grid item md={12} sm={12} className={classes.listingGrid}>
          <Typography>Listing Title</Typography>
          <input
            className={classes.listingInput}
            name="Car Modal"
            type="text"
            placeholder="Cars Modals"
          />
        </Grid>
      </Grid>

      <Grid container className={classes.itemContainer}>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={3}
          className={classes.dropDownGrid}
        >
          <Typography>Condition</Typography>
          <DropDown
            width={"100%"}
            options={carCondition}
            selectedOption={selectedOptions}
            setSelectedOption={setSelectedOptions}
            placeHolderText={"Select"}
          />
        </Grid>
        <Grid item sm={12} md={5} lg={3} className={classes.dropDownGrid}>
          <Typography>Type</Typography>
          <DropDown
            width={"100%"}
            options={carCondition}
            selectedOption={selectedOptions}
            setSelectedOption={setSelectedOptions}
            placeHolderText={"Select"}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={3}
          className={classes.dropDownGrid}
        >
          <Typography>Make</Typography>
          <DropDown
            width={"100%"}
            options={carCondition}
            selectedOption={selectedOptions}
            setSelectedOption={setSelectedOptions}
            placeHolderText={"Select"}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={3}
          className={classes.dropDownGrid}
        >
          <Typography>Model</Typography>
          <DropDown
            options={carCondition}
            selectedOption={selectedOptions}
            setSelectedOption={setSelectedOptions}
            placeHolderText={"Select"}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={3}
          className={classes.dropDownGrid}
        >
          <Typography>Price</Typography>
          <input
            className={classes.carsModal}
            name="Car Modal"
            type="text"
            placeholder="Cars Modals"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={3}
          className={classes.dropDownGrid}
        >
          <Typography>Year</Typography>
          <input
            className={classes.carsModal}
            name="Car Modal"
            type="text"
            placeholder="Cars Modals"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={3}
          className={classes.dropDownGrid}
        >
          <Typography>Drive Type</Typography>
          <DropDown
            options={carCondition}
            selectedOption={selectedOptions}
            setSelectedOption={setSelectedOptions}
            placeHolderText={"Select"}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={3}
          className={classes.dropDownGrid}
        >
          <Typography>Transmission</Typography>
          <DropDown
            options={carCondition}
            selectedOption={selectedOptions}
            setSelectedOption={setSelectedOptions}
            placeHolderText={"Select"}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={3}
          className={classes.dropDownGrid}
        >
          <Typography>Fuel Type</Typography>
          <DropDown
            options={carCondition}
            selectedOption={selectedOptions}
            setSelectedOption={setSelectedOptions}
            placeHolderText={"Select"}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={3}
          className={classes.dropDownGrid}
        >
          <Typography>Mileage</Typography>
          <input
            className={classes.carsModal}
            name="Car Modal"
            type="text"
            placeholder="Cars Modals"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={3}
          className={classes.dropDownGrid}
        >
          <Typography>Engine Size</Typography>
          <input
            className={classes.carsModal}
            name="Car Modal"
            type="text"
            placeholder="Cars Modals"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={3}
          className={classes.dropDownGrid}
        >
          <Typography>Cylinders</Typography>
          <DropDown
            options={carCondition}
            selectedOption={selectedOptions}
            setSelectedOption={setSelectedOptions}
            placeHolderText={"Select"}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={3}
          className={classes.dropDownGrid}
        >
          <Typography>Color</Typography>
          <DropDown
            options={carCondition}
            selectedOption={selectedOptions}
            setSelectedOption={setSelectedOptions}
            placeHolderText={"Select"}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={3}
          className={classes.dropDownGrid}
        >
          <Typography>Doors</Typography>
          <DropDown
            options={carCondition}
            selectedOption={selectedOptions}
            setSelectedOption={setSelectedOptions}
            placeHolderText={"Select"}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={3}
          className={classes.dropDownGrid}
        >
          <Typography>Vin</Typography>
          <input
            className={classes.carsModal}
            name="Car Modal"
            type="text"
            placeholder="Cars Modals"
          />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={12} sm={12} className={classes.listingGrid}>
          <Typography>Description</Typography>
          <input className={classes.textEditor} name="Car Modal" type="text" />
          <Typography>
            Video - copy any online video link e.g. YouTube, Facebook, Instagram
            or .mp4
          </Typography>
          <input
            className={classes.listingInput}
            name="Car Modal"
            type="text"
            placeholder="Video link"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
