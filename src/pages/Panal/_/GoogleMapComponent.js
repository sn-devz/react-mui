import React, { useEffect, useState } from "react";
import { makeStyles, Grid, Typography, Divider } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { colors } from "../../../utils";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import GoogleMapReact from "google-map-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Checkbox from "@material-ui/core/Checkbox";

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

function showGoogleMap() {
  const center = {
    lat: 59.95,
    lng: 30.33,
  };
  const zoom = 11;
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "60vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDf6i9C9ByPYz8NXsTvKj6IoTFd0BNI3PQ" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
function AutoComplete() {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const res = await geocodeByAddress(value)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => console.log("Success", latLng))
      .catch((error) => console.error("Error", error));
  };
  return (
    <PlacesAutocomplete
      value={address}
      onChange={setAddress}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            style={{
              width: "99.2%",
              height: "3rem",
              border: "none",
              borderRadius: "0.5rem",
              paddingLeft: "0.5rem",
            }}
            {...getInputProps({
              placeholder: "Search Places ...",
              className: "location-search-input",
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion) => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: "#fafafa", cursor: "pointer" }
                : { backgroundColor: "#ffffff", cursor: "pointer" };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    // className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const GoogleMapComponent = () => {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <Grid item className={classes.subRoot} lg={12} md={12} sm={12} xs={12}>
      {AutoComplete()}
      <div
        style={{ display: "flex", alignItems: "center", margin: "1.5rem 0" }}
      >
        <Checkbox
          checked={checked}
          onChange={handleChange}
          name="autocomplete-address"
          color="primary"
        />
        <Typography>
          Autocomplete address when marker position is changed.
        </Typography>
      </div>

      {showGoogleMap()}
    </Grid>
  );
};
