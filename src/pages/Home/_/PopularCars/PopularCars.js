import React, {useState} from "react";
import { Box, makeStyles, Typography } from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import {ListingCard} from '../../../../components'

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
export const PopularCars = ()=> {
    const [listItem, setListItem] = useState([
        {
            name: <ListingCard/>
        },
        {
            name: <ListingCard/>
        },
        {
            name: <ListingCard/>
        },
        {
            name: <ListingCard/>
        },
        {
            name: <ListingCard/>
        },
        {
            name: <ListingCard/>
        },
        {
            name: <ListingCard/>
        },
        {
            name: <ListingCard/>
        }
    ])
    const classes = useStyles();
    return(
        <div className={classes.main}>
            <Typography variant='h1'>Popular Makes</Typography>
            <Box mt={4}>
                <Carousel responsive={responsive}>
                {listItem.map((items) => 
                    <div className={classes.cardRoot}>
                        {items.name}
                    </div>
                )}
                </Carousel>
            </Box>
        </div>
    )
}