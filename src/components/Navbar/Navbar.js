import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/PersonOutline';
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { colors } from "../../utils";
import Typography from "@material-ui/core/Typography";
import {LinkItem} from "./_/index";
import {CustomButton} from '../../components';

const useStyles = makeStyles((theme) => ({
    root: props=> ({
      backgroundColor: props.pathname==='/'? 'transparent' : theme.typography.h2.color,
      color:'white',
      fontWeight: 'bold',
      boxShadow: '0 0',
      paddingTop: '5px',
      paddingBottom: '5px'
    }),
    rootSolid: {
        backgroundColor: 'white',
        fontWeight: 'bold',
        paddingTop: '5px',
        paddingBottom: '5px'
    },
    logo: {
        width: '240px',
        fontSize: '35px',
        fontWeight: '600',
        marginRight: '30px',
        cursor: 'pointer',
        [theme.breakpoints.down("sm")]: {
            width: '230px',
            fontSize: '30px',
            marginRight: '20px',
        },
    },
    tabsSection: {display: 'flex'},
    btnsSection: {display: 'flex', marginTop: '5px', marginLeft: 'auto'},
    menuButton: {
        borderRadius: '6px',
        fontWeight: 'bold',
        padding: '8px 20px',
        border: `1px solid ${colors.themeColor2}`,
        "&:hover": {
            backgroundColor: colors.themeColor2,
        }
    },
    loginBtn: {
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingRight: '20px',
        "&:hover": {
            color: colors.themeColor2,
          }
    }
}));
const tabs = [
    {label: 'Used Cars', href:'/used-cars'},
    {label: 'New Cars', href:'/new-cars'},
    {label: 'Blogs', href:'/blogs'},
]
export const Navbar = ()=> {
    const classes = useStyles({pathname: window.location.pathname});
    const [navBackground, setNavBackground] = useState('root');
    const navRef = useRef();
    navRef.current = navBackground;

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50;
            if(show){
                setNavBackground("rootSolid");
            }else{
                setNavBackground("root")
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
                    <Typography className={classes.logo}>Carsriver<span style={{color: colors.themeColor2}}>.com</span></Typography>
                    <div className={classes.tabsSection}>
                        {
                            tabs.map((tab, index)=> {
                                return(
                                    <LinkItem 
                                    key={index} 
                                    label={tab.label}
                                    type={navBackground}
                                    href={tab.href}/>
                                ) 
                            })
                        }
                    </div>
                    <div className={classes.btnsSection}>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <PersonIcon style={{color: colors.themeColor2}}/>
                        </IconButton>
                        <Typography className={classes.loginBtn}>Log In</Typography>
                        <Typography className={classes.loginBtn}>Register</Typography>
                        <CustomButton name='+ Post An Add' handleClick={()=>{}}/>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}