import React, { useState } from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { colors } from "../../utils";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import {
  InputContainer,
  ImageSeletorComponent,
  ImgFileSelector,
  GoogleMapComponent,
  FeatureComponent,
} from "./_/index";

const breakpoints = createBreakpoints({});
const useStyles = makeStyles((theme) => ({
  mainRoot: {
    padding: "10rem 13rem",
    [breakpoints.down("md")]: {
      padding: "10rem 1rem",
    },
  },
  grayColor: {
    color: colors.light_gray,
    "&:hover": {
      color: colors.themeColor2,
    },
  },
  iconSize: {
    fontSize: "5rem",
    marginRight: "1rem",
    [breakpoints.down("sm")]: {
      fontSize: "3.5rem",
    },
  },
  selectorMainContainer: {
    display: "flex",
    alignItems: "center",
  },
  headingText: {
    margin: "2rem 0",
    [breakpoints.down("sm")]: {
      margin: "2rem 0",
    },
  },
}));

const HeaderComponent = ({ classes, text }) => {
  return (
    <Grid container sm={12} xs={12} md={12} lg={12}>
      <Grid
        item
        lg={12}
        className={`${classes.selectorMainContainer} ${classes.headingText}`}
      >
        <Typography variant="h1">{text}</Typography>
      </Grid>
    </Grid>
  );
};

export const Panal = () => {
  const classes = useStyles();

  const [basicFeatures, setBasicF] = useState([
    "360-degree camera",
    "Blind spot alert",
    "Bluetooth",
    "Cooled seats",
    "Heated seats",
  ]);
  const [moreFeatures, setMoreF] = useState([
    "Leather seats",
    "LED headlights",
    "Memory seat",
    "Navigation System",
    "Reversing camera",
    "Side airbags",
    "Sound system",
  ]);
  const [showLoadFBtn, setShowLoadFBtn] = useState(true);
  const [showLoadSFBtn, setShowLoadSFBtn] = useState(true);

  function addMoreFeatures() {
    setBasicF([...basicFeatures, ...moreFeatures]);
    setShowLoadFBtn(!showLoadFBtn);
  }
  function addMoreSFeatures() {
    setBasicF([...basicFeatures, ...moreFeatures]);
    setShowLoadSFBtn(!showLoadSFBtn);
  }
  return (
    <Grid container className={classes.mainRoot}>
      <InputContainer />
      <ImageSeletorComponent />
      <ImgFileSelector
        text={"Select Photo"}
        icon={
          <PhotoLibraryIcon
            className={`${classes.iconSize} ${classes.grayColor}`}
          />
        }
      />
      <HeaderComponent classes={classes} text={"Attachments"} />
      <ImgFileSelector
        text={"Select File"}
        icon={
          <PhotoLibraryIcon
            className={`${classes.iconSize} ${classes.grayColor}`}
          />
        }
      />
      <HeaderComponent classes={classes} text={"Location"} />
      <GoogleMapComponent />
      <HeaderComponent classes={classes} text={"Features"} />
      <FeatureComponent
        basicFeatures={basicFeatures}
        showBtn={showLoadFBtn}
        onClick={() => addMoreFeatures()}
      />
      <HeaderComponent classes={classes} text={"Safety Features"} />
      <FeatureComponent
        basicFeatures={basicFeatures}
        showBtn={showLoadFBtn}
        onClick={() => addMoreSFeatures()}
      />
    </Grid>
  );
};
