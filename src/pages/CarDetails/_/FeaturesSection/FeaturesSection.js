import React from "react";
import { makeStyles, Box, Grid, Typography, Card } from "@material-ui/core";
import {FeatureBadge} from "../../../../components";
import GeneralTyre from "../../../../assets/images/GTAdd.jpg";

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: '#f2f5fb',
        boxShadow: '0 0',
        borderRadius: '0.7rem',
        padding: '1rem 2rem',
        [theme.breakpoints.down("xs")]: {
            padding: '1rem 1.5rem',
        },
    },
    item: {
        [theme.breakpoints.down("xs")]: {
            width: '100%'
        },
    },
    add: {
        width: '100%',
        height: '10rem',
        imageRendering: 'pixelated',
        [theme.breakpoints.down("md")]: {
            height: '8rem',
        },
        [theme.breakpoints.down("xs")]: {
            height: '6rem',
        },
    }
}));
export const FeaturesSection = ({features})=> {
    const classes = useStyles();
    return(
        <>
            <Box mt={2}>
                <Card className={classes.card}>
                    <Typography variant='h2'>Features</Typography>
                    <Box mt={2}>
                        <Grid container>
                            {
                                features.length?
                                features.map((feature, index)=> (
                                    <Grid key={index} item xs={12} sm={6} lg={4}>
                                        <Box mr={1} mb={1}>
                                            <FeatureBadge text={feature} />
                                        </Box>
                                    </Grid>
                                ))
                                :
                                <Typography variant='body2'>No feature listed</Typography>
                            }
                        </Grid>
                        <Box mt={1} p={3}>
                            <img src={GeneralTyre} className={classes.add}/>
                        </Box>
                    </Box>
                </Card>
            </Box>
        </>
    )
}