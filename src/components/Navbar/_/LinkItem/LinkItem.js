import {
  makeStyles,
  Typography,
  createStyles,
  Box,
} from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import {colors} from "../../../../utils/"

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      textDecoration: "none",
      padding: "0.7rem 0",
      display: "flex",
    },
    navLink: {
      borderTop: "3px solid transparent",
      color: 'grey',
      paddingRight: '10px',
      paddingLeft: '10px',
      margin: '0 10px 0 10px'
    },

    activeRoute: {
      color: 'black',
      fontWeight: 'bold',
      borderBottom: '5px solid',
      borderBottomColor: colors.themeColor2
    },
    itemBgWhite: {
      fontSize: "1rem",
      color: 'white',
      paddingTop: '5px',
      paddingBottom: '5px',
      fontWeight: 600,
    
    },
    itemBgBlack: {
      fontSize: "1rem",
      color: 'black',
      paddingTop: '5px',
      paddingBottom: '5px',
      fontWeight: 600,
      
    },
    hover: {
      "&:hover": {
        color: colors.themeColor2,
      }
    }
  })
);

export const LinkItem = ({
  href,
  label,
  type,
  className,
  allowBorder,
}) => {
  const classes = useStyles({ allowBorder, label, href });
  const activeRoute = (location) => {
    const isActive = href === (location || {}).url;
    return isActive;
  };

  return (
    <>
      <NavLink
        to={href}
        isActive={(match) => activeRoute(match)}
        className={classes.root + " " + classes.navLink + " " + className}
        activeClassName={classes.activeRoute}
      >
        <Box textAlign="center" color="inherit" fontWeight={500} mt={0}>
          <Typography className={[type=='root'? classes.itemBgWhite: classes.itemBgBlack,classes.hover]}>
            {label}
          </Typography>
        </Box>
      </NavLink>
    </>
  );
};
