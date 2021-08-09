import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { colors, white } from "../../utils/constanst/Colors";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor:colors.themeColor1,
      paddingTop:100, 
      paddingBottom:50
    },
   
    logoText:{
        textAlign:'center',
        color:white,
        fontWeight:'bold',
        fontSize:30
    },
  
    listStyle: {
        color:colors.white,
        marginBottom:10,
        fontSize:15,
        "&:hover": {
           color: colors.themeColor2,
        }
    },
    pStyle: {
        fontSize: 18,
        color: colors.white,
        textAlign:'left',
    },
    addressContainer:{
        marginRight:10
    },
    phnNo: {
        textAlign:'center',
        fontSize:25,
        color:colors.white
    },
    addressText:{
        lineBreak:2
    },
    iconContainer: {
        display:'flex',
        justifyContent: "center",
        marginRight:20,
        marginTop:5
    },

    copyTextStyle:{
        fontSize:16,
        color:colors.white,
        textAlign:'left'
    },
    iconDivStyle: {
         height:40,
         width:40, 
         borderRadius:40/2, 
         backgroundColor:'black', 
         opacity:0.2,
         display:'flex',
         justifyContent:'center',
         alignItems:'center',
         marginRight:5
    },
    iconStyle:{
        color: white, 
        height:25,
        width:35
    },
    gridContainer:{
        paddingTop:30, 
    },
    divider:{
        height : 0.1,
        backgroundColor:colors.light_gray,
        width:"95%",
        margin:'0 auto',
        marginTop:30,
    },
 
     basicText: {
         textAlign:'center',
         color: colors.white,
         margin:0
     }
  }));
  

export const Footer = ()=> {
    const classes = useStyles();

    return(
            <Grid container  className={classes.root}>
                <Grid item xs={12} sm={3} md={2} >
                        <h2 className={classes.logoText}>Carsrivers</h2>
                </Grid>
                <Grid item xs={12} sm={3}  md={3} >
                    <Grid container xs={12} >
                        <Grid item xs={12} sm={4} >
                            <div >
                                <ul>
                                    <li className={classes.listStyle}>Listing</li>
                                    <li className={classes.listStyle}>FAQ</li>
                                    <li className={classes.listStyle}>About Us</li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <div >
                            <ul>
                                    <li className={classes.listStyle}>Blogs</li>
                                    <li className={classes.listStyle}>Our Team</li>
                                    <li className={classes.listStyle}>Contact</li>
                                </ul>
                        </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={3} md={5}>
                        <p className={classes.pStyle}>Award-winning, family owned dealership of new and pre-owned vehicles with several locations across the city. Lowest prices and the best customer service guaranteed.</p>
                </Grid>
                <Grid item xs={12} sm={3} md={2}>
                    <div className={classes.addressContainer}>
                        <h2 className={classes.phnNo}>Phone Number</h2>
                        <p className={classes.basicText}>carsriver@gmail.com</p>
                        <p className={classes.basicText}>Street Address here</p>
                    </div>
                </Grid>
                    <div className={classes.divider}/>
                <Grid container xs={12} className={classes.gridContainer}>
                    <Grid item  xs={12} sm={6} md={10} style={{paddingLeft:30,}}>
                        <p className={classes.copyTextStyle}>Copyright © 2021. All rights reserved. Privacy Policy</p>
                    </Grid>
                    <Grid item  xs={12} sm={6} md={2}>
                           <div className={classes.iconContainer}>
                               <div className={classes.iconDivStyle}>
                                   <FacebookIcon className={classes.iconStyle}/>
                               </div>
                               <div className={classes.iconDivStyle}>
                                   <TwitterIcon className={classes.iconStyle}/>
                               </div>
                               <div className={classes.iconDivStyle}>
                                   <InstagramIcon className={classes.iconStyle}/>
                               </div>
                           </div>
                    </Grid>
                </Grid>
            </Grid>
         
            
    )
}