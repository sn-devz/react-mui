import React, { useState } from "react";
import { Box, makeStyles, Typography, Grid, Button } from "@material-ui/core";
import { FaceBookIcon, GoogleIcon } from "../../assets/icons/index";
import { colors } from "../../utils/constanst/Colors";
import { InputConponnet } from "./index";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({});

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "30rem",
  },
  heading: {
    fontSize: "2.3rem",
    fontSize: "900",
  },
  headingDesc: {
    fontWeight: "100",
    marginTop: "1rem",
    color: colors.black,
  },
  socialIconStyle: {
    width: "2.2rem",
    marginRight: "0.3rem",
  },
  socialLoginContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  socialAuthText: {
    fontSize: "1.4rem",
    fontWeight: "100",
  },
  socialGridDiv: {
    display: "flex",
    height: "3.5rem",
    backgroundColor: "white",
    margin: "0.3rem 0.45rem",
    boxShadow: "0 0 4px lightgray",
    // border: "0.01rem solid lightgray",
    borderRadius: "0.7rem",
    width: "10.1rem",
    [breakpoints.down("sm")]: {
      width: "100%",
    },
    "&:hover": {
      boxShadow: "0 0 2px black",
    },
  },
  socialGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  simpText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: "0.9rem",
  },
  m: {
    backgroundColor: (props) => props.backcolor,
    justifyContent: "center",
    padding: "10rem 0",
  },

  checkBoxContainer: { display: "flex", alignItems: "center" },
  modelBtn: {
    backgroundColor: colors.themeColor2,
    color: colors.white,
    padding: "1rem 3rem",
    margin: "1rem 0",
    borderRadius: "0.5rem",
    fontSize: "1.2rem",
  },
  radioContainer: {
    display: "flex",
    flexDirection: "row",
    margin: "2rem 0",
  },
  linkContainer: {
    fontWeight: "600",
    textDecorationLine: "underline",
    color: colors.themeColor2,
  },
  forgetPass: {
    textAlign: "end",
    fontWeight: "100",
    textDecorationLine: "underline",
  },
}));

export const LoginRegisterHeader = ({
  heading,
  desc,
  inputItem,
  type,
  ...props
}) => {
  const classes = useStyles(props);
  const [state, setState] = React.useState(false);
  const handleChange = () => {
    setState(!state);
  };
  const [value, setValue] = useState("");

  const handleChangeF = (event) => {
    setValue(event.target.value);
  };
  const loginCheckBox = () => {
    return (
      <Grid container>
        <Grid container className={classes.checkBoxContainer}>
          <Grid item xs={6} sm={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state}
                  onChange={handleChange}
                  name={"remeber"}
                  // iconStyle={{ fill: "white" }}
                  // color={}
                  style={{
                    color: state ? colors.themeColor2 : "lightgray",
                  }}
                />
              }
              label="Remember"
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <Typography className={classes.forgetPass}>
              ForgetPassword
            </Typography>
          </Grid>
        </Grid>
        <Button className={classes.modelBtn}>Login</Button>
      </Grid>
    );
  };
  const registerBox = () => {
    return (
      <Grid container>
        <RadioGroup
          className={classes.radioContainer}
          value={value}
          onChange={handleChangeF}
        >
          <FormControlLabel
            value="business"
            control={<Radio />}
            label="Business Seller"
            style={{ marginRight: "5rem" }}
          />
          <FormControlLabel
            value="privare"
            control={<Radio />}
            label="Private Seller"
          />
        </RadioGroup>
        <Grid
          item
          md={12}
          sm={12}
          xs={12}
          className={classes.checkBoxContainer}
        >
          <FormControlLabel
            style={{ marginRight: "0.5rem" }}
            control={
              <Checkbox
                checked={state}
                onChange={handleChange}
                name={"remeber"}
                style={{ color: colors.themeColor2 }}
              />
            }
            label="I accept the"
          />

          <Typography className={classes.linkContainer}>
            privacy policy
          </Typography>
        </Grid>
        <Button className={classes.modelBtn}>Register</Button>
      </Grid>
    );
  };

  return (
    <Grid container md={6} sm={6} xs={12} className={classes.m}>
      <div className={classes.mainContainer}>
        <Grid item md={12} sm={12} xs={12}>
          <Box mt={5} mb={8}>
            <Typography className={classes.heading} variant="h2">
              {heading}
            </Typography>
            <Typography variant="h5" className={classes.headingDesc}>
              {desc}
            </Typography>
          </Box>
          <Grid container>
            <Grid item xs={12} sm={12} md={3} style={{ alignSelf: "center" }}>
              <Typography variant="h5" className={classes.simpText}>
                Continue with :
              </Typography>
            </Grid>
            <div className={classes.socialGridDiv}>
              <Grid item xs={12} sm={12} md={12} className={classes.socialGrid}>
                <img src={GoogleIcon} className={classes.socialIconStyle} />
                <Typography className={classes.socialAuthText}>
                  Google
                </Typography>
              </Grid>
            </div>

            <div className={classes.socialGridDiv}>
              <Grid item xs={12} sm={12} md={12} className={classes.socialGrid}>
                <img src={FaceBookIcon} className={classes.socialIconStyle} />
                <Typography className={classes.socialAuthText}>
                  FaceBook
                </Typography>
              </Grid>
            </div>
          </Grid>
          <Box mt={5} mb={5}>
            <Typography variant="h4" className={classes.headingDesc}>
              or
            </Typography>
          </Box>
          {/* {
                            new Array(inputItem).fill(null).map((index) => {
                              return <InputConponnet/>
                            })
                        } */}

          {inputItem.map((item) => {
            return (
              <InputConponnet
                inputType={item.inputType}
                inputName={item.inputName}
                inputPlaceHolder={item.inputPlactHolder}
              />
            );
          })}

          {type === "login" ? loginCheckBox() : registerBox()}
        </Grid>
      </div>
    </Grid>
  );
};
