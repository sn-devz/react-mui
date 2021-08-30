import React from "react";
import { Box, makeStyles, Typography } from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import {ListingCard} from '../ListingCard';
import {ListingsData} from "../../utils";

const useStyles = makeStyles((theme) => ({
    main: {
        padding: '2rem'
    },
    cardRoot: {
        padding: '0 0.5rem'
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
export const Listings = ({name, headingVariant})=> {
    const classes = useStyles();
    return(
        <div className={classes.main}>
            <Typography variant={headingVariant?headingVariant:'h1'}>{name}</Typography>
            <Box mt={4}>
                <Carousel responsive={responsive}>
                {ListingsData.map((item, index) => 
                    <div key={index} className={classes.cardRoot}>
                        <ListingCard data={item}/>
                    </div>
                )}
                </Carousel>
            </Box>
        </div>
    )
}