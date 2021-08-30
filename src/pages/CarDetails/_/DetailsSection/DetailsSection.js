import React from "react";
import { makeStyles, Box, Grid, Typography, Divider, Card } from "@material-ui/core";
import { StarOutline } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    detailsCard: {
        backgroundColor: '#f2f5fb',
        boxShadow: '0 0',
        borderRadius: '0.7rem',
        padding: '1rem 2rem',
        [theme.breakpoints.down("xs")]: {
            padding: '1rem 1.5rem',
        },
    },
    specsItem: {
        marginTop: '0.5rem'
    }
}));
export const DetailsSection = ({details})=> {
    const classes = useStyles();
    const specifications = [
        {name: 'Make:', value: details.make},
        {name: 'Model:', value: details.model},
        {name: 'Color:', value: details.color},
        {name: 'Drive Type:', value: details.driveType},
        {name: 'Transmission:', value: details.transmission},
        {name: 'Condition:', value: details.condition},
        {name: 'Year:', value: details.year},
        {name: 'Fuel Type:', value: details.fuelType},
        {name: 'Engine Size:', value: details.engineSize},
        {name: 'Doors:', value: details.doors},
        {name: 'Engine Size:', value: details.engineSize},
    ]
    return(
        <>
            <Typography variant='h3'>{details.name}</Typography>
            <Box display='flex' mt={1} mb={2}>
                <Box mr={2}>
                    <Typography variant='body2'>{details.year}</Typography>
                </Box>
                <Box mr={2}>
                    <Typography variant='body2'>{details.carType}</Typography>
                </Box>
                <Box mr={2}>
                    <Typography variant='body2'>{details.fuelType}</Typography>
                </Box>
            </Box>
            <Divider/>
            <Box mt={2}>
                <Typography variant='h4'>{`PKR ${details.price}`}</Typography>
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
        </>
    )
}