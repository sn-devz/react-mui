import React, {useState} from "react";
import { Box, makeStyles, Typography, Grid } from '@material-ui/core';
import { FaceBookIcon, GoogleIcon, Coupe } from "../../assets/icons/index";
import IconButton from '@material-ui/core/IconButton';
import { border } from "@material-ui/system";


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '6rem',
    },
    nameConatiner: {

    },
    heading: {

    },
    headingDesc: {
        fontSize:18,
        fontWeight:100,
        marginTop:'1rem'
    },
    socialIconStyle: {
        width: '2.5rem',
        marginRight:'1rem'
    },
    socialLoginContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',  
        border: '0.1rem ',
        backgroundColor:'white', 
        padding:'0.7rem 0', 
        borderRadius:'0.4rem',
        boxShadow: '1rem #000',
        
    },
    socialAuthText: {
        fontSize: 25,
        fontWeight: '100',
        
    },
    socialGrid:{
        margin: '0.2rem 0.6rem'
    },
    simpTextGrid:{
        display:'flex', 
        alignItems:'center',
        justifyContent:'center'
    },
    simpText: {
        color:'#000',
        fontWeight:'500',
        
    }
  
}));

export const LoginRegister = ()=> {
   
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid container className={classes.nameConatiner}>
                <Grid item md={6} style={{backgroundColor:'#cbf0ff',}}>
                    <Box mt={5} mb={8} style={{padding:'1rem 2rem',}}>
                        <Typography className={classes.heading} variant="h2">Log in to your account</Typography>
                        <Typography className={classes.headingDesc} >Welcome back! Sign in to your account</Typography>
                    </Box>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={3} className={classes.simpTextGrid} >
                                <Box mb={5}>
                                    <Typography variant='h4' className={classes.simpText}>Continue with :</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={3}  className={classes.socialGrid} >
                                <div className={classes.socialLoginContainer}>
                                    <img src={GoogleIcon} className={classes.socialIconStyle}/>
                                    <Typography className={classes.socialAuthText}>Google</Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={3} className={classes.socialGrid}>
                                <div className={classes.socialLoginContainer}>
                                        <img src={FaceBookIcon} className={classes.socialIconStyle}/>
                                        <Typography className={classes.socialAuthText}>FaceBook</Typography>
                                </div>
                            </Grid>
                        </Grid>
                        

                </Grid>
                <Grid item md={6}>

                </Grid>
            </Grid>
           {/* <Typography> this is login page</Typography>  */}

          </div>
    )
}