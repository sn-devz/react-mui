import React from "react";
import { makeStyles, Box, Grid, Typography, Divider, Card } from "@material-ui/core";
import Carousel from 'react-multi-carousel';
import CardImage from '../../assets/images/cardImg.jpg';
import {DetailsSection, FeaturesSection, SellerCard} from "./_";
import {Listings, CustomButton} from "../../components";

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
        borderRadius: '0.7rem',
        [theme.breakpoints.down("sm")]: {
            height: '25rem',
        },
        [theme.breakpoints.down("xs")]: {
            height: '18rem',
        },
    },
    details: {
        paddingLeft: '2rem',
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        },
    },
    detailsMD: {
        [theme.breakpoints.up("md")]: {
            display: 'none'
        },
    },
    description: {
        color: theme.typography.h1.color,
        fontSize: '1rem',
        fontWeight: 'normal',
        lineHeight: 2,
        [theme.breakpoints.down("xs")]: {
            lineHeight: 1.5,
            fontSize: '0.9rem',
        },
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
    carType: 'coupe',
    features: [
        "Power windows",
        "Power steering",
        "Power mirrors",
        "Retractable mirrors",
        "Backup camera",
        "Blind-spot warning",
        "Brake assist",
        "Parking sensors",
        "sunroof",
        "Forward collision warning"
    ],
    description: <div>
        <p>How the adventure ended will be seen anon. Aouda was anxious, though she said nothing. As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The captain had said “between eleven and twelve knots,” and the Henrietta confirmed his prediction.</p>
        <p>If, then—for there were “ifs” still—the sea did not become too boisterous, if the wind did not veer round to the east, if no accident happened to the boat or its machinery, the Henrietta might cross the three thousand miles from New York to Liverpool in the nine days, between the 12th and the 21st of December. It is true that, once arrived, the affair on board the Henrietta, added to that of the Bank of England, might create more difficulties for Mr. Fogg than he imagined or could desire.</p>
        <p>During the first days, they went along smoothly enough. The sea was not very unpropitious, the wind seemed stationary in the north-east, the sails were hoisted, and the Henrietta ploughed across the waves like a real trans-Atlantic steamer.</p>
    </div>,
    sellerDetails: {
        name: "Ejaz Saab",
        address: "DHA phase 8, Ex park view, lahore",
        email: "ejazsaab@gmail.com",
        phoneNo: "+923245655555",
        imageURL: "https://demo.vehica.com/wp-content/uploads/2020/10/p1-1-100x100.jpg"
    }
}
export const CarDetails = ()=> {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} md={7}>
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
                        <Box mt={1} pr={1} py={1} className={classes.detailsMD}>
                            <DetailsSection details={carData}/>
                            <Box mt={2}>
                                <SellerCard seller={carData.sellerDetails}/>
                            </Box>
                        </Box>
                        <Box px={1} mt={4}>
                            <Typography variant='h2'>Description</Typography>
                            <Box mt={2}>
                                <Typography className={classes.description}>{carData.description}</Typography>
                            </Box>
                        </Box>
                        <Box mt={4}>
                            <FeaturesSection features={carData.features}/>
                        </Box>
                    </Box>
                </Grid>
                <Grid item sm={12} md={5}>
                    <Box pr={1} py={1} className={classes.details}>
                        <DetailsSection details={carData}/>
                        <Box mt={2}>
                            <SellerCard seller={carData.sellerDetails}/>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box mt={4} mx={-3}>
                        <Listings name="Related Listings" headingVariant="h2"/>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box mt={1} mb={2} textAlign="center">
                        <CustomButton name="Start a new search" handleClick={()=>{}} style={{textTransform:"inherit"}}/>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}