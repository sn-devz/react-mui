import React from "react";
import { useHistory } from "react-router-dom";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Box,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/PersonOutline";
import Menu from "@material-ui/icons/Menu";
import Close from "@material-ui/icons/CloseOutlined";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { colors } from "../../utils";
import { LinkItem } from "./_/index";
import { CustomButton } from "../../components";

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    backgroundColor:
      props.pathname === "/" ? "transparent" : theme.typography.h2.color,
    color: "white",
    fontWeight: "bold",
    boxShadow: "0 0",
    paddingTop: "5px",
    paddingBottom: "5px",
  }),
  rootSolid: {
    backgroundColor: "white",
    fontWeight: "bold",
    paddingTop: "5px",
    paddingBottom: "5px",
  },
  logo: {
    width: "240px",
    fontSize: "35px",
    fontWeight: "600",
    marginRight: "30px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      width: "230px",
      fontSize: "30px",
      marginRight: "20px",
    },
  },
  tabsSection: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  btnsSection: {
    display: "flex",
    marginTop: "5px",
    marginLeft: "auto",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuButton: {
    borderRadius: "6px",
    fontWeight: "bold",
    padding: "8px 20px",
    border: `1px solid ${colors.themeColor2}`,
    "&:hover": {
      backgroundColor: colors.themeColor2,
    },
  },
  loginBtn: {
    fontWeight: "bold",
    alignSelf: "center",
    paddingRight: "10px",
    "&:hover": {
      color: colors.themeColor2,
    },
    cursor: "pointer",
  },
  toggleDrawer: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  drawer: {
    backgroundColor: theme.typography.h2.color,
    width: "18rem",
    height: "inherit",
  },
  closeIcon: {
    color: colors.themeColor2,
    float: "right",
  },
}));
const tabs = [
  { label: "Used Cars", href: "/search" },
  { label: "New Cars", href: "/new-cars" },
  { label: "Blogs", href: "/blogs" },
];
const MappedItems = ({ navBackground }) => (
  <>
    {tabs.map((tab, index) => {
      return (
        <LinkItem
          key={index}
          label={tab.label}
          type={navBackground}
          href={tab.href}
        />
      );
    })}
  </>
);
export const Navbar = () => {
  const classes = useStyles({ pathname: window.location.pathname });
  const [navBackground, setNavBackground] = useState("root");
  const [toggle, setToggle] = useState(false);
  const navRef = useRef();
  const history = useHistory();
  navRef.current = navBackground;

  const ButtonsSection = () => (
    <>
      <Box display="flex">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <PersonIcon style={{ color: colors.themeColor2 }} />
        </IconButton>
        <Typography
          className={classes.loginBtn}
          onClick={() => {
            history.push("/login-register");
          }}
        >
          Log In
        </Typography>
        <Typography className={classes.loginBtn}>|</Typography>
        <Typography className={classes.loginBtn}>Register</Typography>
      </Box>
    </>
  );

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setToggle(open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (show) {
        setNavBackground("rootSolid");
      } else {
        setNavBackground("root");
      }
    };
    const closeDrawer = () => {
      const windowSize = window.matchMedia("(min-width: 960px)");
      if (windowSize.matches) setToggle(false);
    };
    document.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => closeDrawer());
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <AppBar position="fixed" className={classes[navRef.current]}>
        <Toolbar>
          <Typography
            className={classes.logo}
            onClick={() => {
              history.push("/");
            }}
          >
            Carsriver<span style={{ color: colors.themeColor2 }}>.com</span>
          </Typography>
          <div className={classes.tabsSection}>
            <MappedItems navBackground={navBackground} />
          </div>
          <div className={classes.btnsSection}>
            <Box mr={1}>
              <ButtonsSection />
            </Box>
            <CustomButton name="+ Post An Add" handleClick={() => {}} />
          </div>
          <Box
            display="flex"
            marginLeft="auto"
            className={classes.toggleDrawer}
          >
            <div>
              <IconButton
                aria-label="Menu"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <Menu style={{ color: colors.themeColor2 }} />
              </IconButton>
            </div>
          </Box>
        </Toolbar>
        <div className={classes.toggleDrawer}>
          {
            <Drawer anchor={"left"} open={toggle} onClose={toggleDrawer(false)}>
              <div className={classes.drawer}>
                <Box m={2} mb={1}>
                  <CustomButton name="+ Post An Add" handleClick={() => {}} />
                  <IconButton
                    aria-label="Menu"
                    className={classes.closeIcon}
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    <Close />
                  </IconButton>
                </Box>
                <Box>
                  <MappedItems navBackground={navBackground} />
                </Box>
                <Box ml={2} mb={2}>
                  <ButtonsSection />
                </Box>
              </div>
            </Drawer>
          }
        </div>
      </AppBar>
    </div>
  );
};
