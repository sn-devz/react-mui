import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import HeaderImage from '../../assets/images/headerImg.jpg';

const useStyles = makeStyles((theme) => ({
    headerImg: {
        height: '100vh', 
        width: '100%',
        filter: 'blur(8px)'
    },
}));

export const Home = ()=> {
    const classes = useStyles();
    return(
        <div>
            <img src={HeaderImage} className={classes.headerImg}/>
        </div>
    )
}