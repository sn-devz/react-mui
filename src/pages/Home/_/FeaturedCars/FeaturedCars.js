import React, {useState} from "react";
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import {ListingCard} from '../../../../components'
import {ListingsData} from "../../../../utils";

const useStyles = makeStyles((theme) => ({
    main: {
        padding: '2rem',
    },
    cardRoot: {
        padding: '0 0.5rem',
        display:'flex'
    },
    gridStyle: {
        paddingTop:'1rem', 
        paddingRight:'0.5rem', 
    },
    gridRightStyle: {
        paddingTop:'1rem',
        paddingLeft: '0.5rem'

    },
    leftGrid:{
        padding:'1rem',marginTop:'2rem'
    }
}));
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    desktopSmall: {
      breakpoint: { max: 1024, min: 700 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 700, min: 500 },
      items: 2
    },
    mobile: {
        breakpoint: { max: 500, min: 0 },
        items: 1
    }
};
export const FeaturedCars = ()=> {

    const classes = useStyles();
    return(
        <Grid container className={classes.main }>
            <Grid item xs={12} sm={12} md={12} >
                <Typography xs={12} variant='h1'>Featured Cars</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className={classes.leftGrid} >
                    <ListingCard data={ListingsData[0]} imgHeight='31.8rem'/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} style={{marginTop:'2rem'}}>
                <Grid container>
                    <Grid item sm={6} xs={12} className={classes.gridStyle}>
                        <ListingCard data={ListingsData[1]}/>
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.gridRightStyle}>
                        <ListingCard data={ListingsData[2]}/>
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.gridStyle}>
                        <ListingCard data={ListingsData[3]}/>
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.gridRightStyle}>
                        <ListingCard data={ListingsData[4]}/>
                    </Grid>
                </Grid>
                </Grid>

                        {/* <ListingCard/>
                        <ListingCard/> */}
                    {/* <div className={classes.cardRoot}>
                        <ListingCard/>
                        <ListingCard/>
                    </div> */}                {/* <Carousel responsive={responsive}>
                {listItem.map((items) => 
                    <div className={classes.cardRoot}>
                        {items.name}
                    </div>
                )}
                </Carousel> */}
        </Grid>
    )
}