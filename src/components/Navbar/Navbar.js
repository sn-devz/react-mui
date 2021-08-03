import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../logo.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: 'white'
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
        fontWeight: 'bold'
    },
    menuButton: {
        borderRadius: '6px',
        fontWeight: 'bold',
        backgroundColor: 'red'
        // border: '2px solid red'
    }
}));

export const Navbar = ()=> {
    const classes = useStyles();
    return(
        <div>
            <AppBar className={classes.root}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <img src={logo} className={classes.logo}/>
                    </IconButton>
                    <div className={classes.btnSection}>
                        <Tabs>
                            <Tab className={classes.tabs} label='Used Cars'/>
                            <Tab className={classes.tabs} label='New Cars'/>
                            <Tab className={classes.tabs} label='Blogs'/>
                        </Tabs>
                        <Button color="inherit" className={classes.menuButton}>Post An Add</Button>
                        <Tabs>
                            <Tab className={classes.tabs} label='Sign In'/>
                        </Tabs>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}