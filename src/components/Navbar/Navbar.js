import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../logo.jpg';
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { colors } from "../../utils/constanst/Colors";

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: 'transparent',
      color:'white',
      fontWeight: 'bold',
    },
    rootSolid: {
        backgroundColor: 'white',
        fontWeight: 'bold',
      },

    logo: {
        width: '200px',
        height: '40px'
    },
    btnSection: {
        display: 'flex',
        marginLeft: 'auto'
    },
    tabs: {
        fontWeight: 'bold',
        // color:'white'
        textTransform: 'capitalize'
    },
    menuButton: {
        borderRadius: '6px',
        fontWeight: 'bold',
        backgroundColor: 'red'
        // border: '2px solid red'
    },
    // tabRoot: {
    //     "&:hover": {
    //       backgroundColor: colors.red,
          
    //     }
    //   },
    
}));

export const Navbar = ()=> {
    const classes = useStyles();
    const [navBackground, setNavBackground] = useState('root');
    const navRef = useRef();
    navRef.current = navBackground;

    useEffect(() => {
        const handleScroll = () => {
        const show = window.scrollY > 15;
        if(show){
            setNavBackground("rootSolid");
            console.log("here", show)
        }else{
            setNavBackground("root")
            console.log("else", show)

        }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
        document.removeEventListener("scroll", handleScroll);
    }
    }, [])
    return(
        <div>
            <AppBar position='fixed' className={classes[navRef.current]} >
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <img src={logo} className={classes.logo}/>
                    </IconButton>
                    <div className={classes.btnSection}>
                        <Tabs>
                        {/* classes={{root: classes.tabRoot}} */}
                            <Tab className={classes.tabs} label='Used Cars' />
                            <Tab className={classes.tabs} label='New Cars'/>
                            <Tab className={classes.tabs} label='Blogs' />
                        </Tabs>
                        <Button color="inherit" className={classes.menuButton}>Post An Add</Button>
                        <Tabs>
                            <Tab className={classes.tabs} label='Sign In' />
                        </Tabs>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}