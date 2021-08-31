import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Header } from "../../components/Header";
import {FeaturedCars} from './_/index';
import {Listings} from '../../components';

const useStyles = makeStyles((theme) => ({

}));

export const Home = ()=> {
    const classes = useStyles();
    useEffect(()=>{
        window.scroll(0,0);
    })
    return(
        <div>
            <Header/>
            <FeaturedCars/>
            <Listings name="Popular Makes"/>
        </div>
    )
}