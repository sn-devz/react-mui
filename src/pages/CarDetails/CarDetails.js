import React from "react";
import { makeStyles, Box, Grid, Typography, Divider, Card } from "@material-ui/core";
import { StarOutline } from "@material-ui/icons";
import Carousel from 'react-multi-carousel';
import CardImage from '../../assets/images/cardImg.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '6rem',
        padding: '1rem 1.5rem',
    },
    carousel: {
        borderRadius: '0.7rem'
    },
    media: {
        objectFit: 'cover',
        width: 'inherit',
        height: '30rem',
        borderRadius: '0.7rem'
    },
    detailsCard: {
        backgroundColor: '#f2f5fb',
        boxShadow: '0 0',
        borderRadius: '0.7rem',
        padding: '1rem 2rem'
    },
    specsItem: {
        marginTop: '0.5rem'
    }
}));
const responsive = {
    allSizes: {
      breakpoint: { max: 4000, min: 0 },
      items: 1
    }
};
const carData = {
    name: 'BMW 8-series 2-door coupe grey',
    images: [
        'https://demo.vehica.com/wp-content/uploads/2020/08/6.jpg',
        'https://demo.vehica.com/wp-content/uploads/2020/02/1-58-1024x683.jpg',
        'https://demo.vehica.com/wp-content/uploads/2020/02/3-59-768x512.jpg',
        'https://demo.vehica.com/wp-content/uploads/2020/02/4-59-768x512.jpg',
        'https://demo.vehica.com/wp-content/uploads/2020/02/5-59-768x512.jpg'
    ],
    price: '220,00000',
    make: 'BMW',
    model: '8-series',
    color: 'grey',
    driveType: 'front wheel drive',
    transmission: 'automatic',
    condition: 'used',
    year: '2020',
    fuelType: 'Petrol',
    engineSize: '3.8L',
    doors: '2-door',
    carType: 'coupe'
}
export const CarDetails = ()=> {
    const classes = useStyles();
    const specifications = [
        {name: 'Make:', value: carData.make},
        {name: 'Model:', value: carData.model},
        {name: 'Color:', value: carData.color},
        {name: 'Drive Type:', value: carData.driveType},
        {name: 'Transmission:', value: carData.transmission},
        {name: 'Condition:', value: carData.condition},
        {name: 'Year:', value: carData.year},
        {name: 'Fuel Type:', value: carData.fuelType},
        {name: 'Engine Size:', value: carData.engineSize},
        {name: 'Doors:', value: carData.doors},
        {name: 'Engine Size:', value: carData.engineSize},
    ]
    return(
        <div className={classes.root}>
            <Grid container>
                <Grid item sm={12} md={7}>
                    <Box px={1}>
                        <Carousel responsive={responsive} className={classes.carousel}>
                            {
                                carData.images.length?
                                carData.images.map((image, index)=> (
                                    <img
                                    key={index}
                                    className={classes.media}
                                    src={image}
                                    />
                                ))
                                :
                                <img
                                className={classes.media}
                                src={CardImage}
                                />
                            }
                        </Carousel>
                    </Box>
                </Grid>
                <Grid item sm={12} md={5}>
                    <Box pl={5} pr={1} py={1}>
                        <Typography variant='h3'>{carData.name}</Typography>
                        <Box display='flex' mt={1} mb={2}>
                            <Box mr={2}>
                                <Typography variant='body2'>{carData.year}</Typography>
                            </Box>
                            <Box mr={2}>
                                <Typography variant='body2'>{carData.carType}</Typography>
                            </Box>
                            <Box mr={2}>
                                <Typography variant='body2'>{carData.fuelType}</Typography>
                            </Box>
                        </Box>
                        <Divider/>
                        <Box mt={2}>
                            <Typography variant='h4'>{`PKR ${carData.price}`}</Typography>
                            <Box display='flex' mt={1} mb={2}>
                                <StarOutline color='action'/>
                                <Typography variant='body2'>Add to favourites</Typography>
                            </Box>
                            <Card className={classes.detailsCard}>
                                {
                                    specifications.map((spec, index)=> (
                                        <Grid container key={index} className={classes.specsItem}>
                                            <Grid item xs={6}>
                                                <Typography variant='body1'>{spec.name}</Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Typography variant='body2'>{spec.value}</Typography>
                                            </Grid>
                                        </Grid>
                                    ))
                                }
                            </Card>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}