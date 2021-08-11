import React from "react";
import { makeStyles, Typography, Card, CardActionArea, CardContent, Button, Divider, Box } from '@material-ui/core';
import CardImage from '../../assets/images/cardImg.jpg';
import { colors } from "../../utils";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
        minWidth: 200,
        borderRadius: '0.7rem'
    },
    media: {
        height: 160,
        width: 'inherit',
        objectFit: 'cover',
        '&:hover': {
            transform: 'scale(1.1)',
            transition: 'transform 0.8s'
        }
    },
    content: {
        backgroundColor: theme.typography.h2.color
    },
    price: {color: colors.themeColor2},
    divider: {backgroundColor: 'grey'},
    modelBtn: {
        backgroundColor: colors.themeColor2,
        color: 'white',
        padding: '0.1rem 0.2rem'
    },
    propertyText: {
        marginBottom: 0,
        padding: '0 0.5rem'
    }
}));

export const ListingCard = ()=> {
    const classes = useStyles();
    return(
        <Card className={classes.root}>
            <CardActionArea>
                <img
                className={classes.media}
                src={CardImage}
                title="Contemplative Reptile"
                />
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h6">
                        Audi A4 4-door sedan
                    </Typography>
                    <Typography gutterBottom variant="h5" className={classes.price}>
                        PKR 40,000
                    </Typography>
                    <Divider orientation='horizontal' className={classes.divider}/>
                    <Box display='flex' mt={2}>
                        <Button className={classes.modelBtn}>2020</Button>
                        <Typography gutterBottom variant="body2" className={classes.propertyText}>
                            12000 km
                        </Typography>
                        <Typography gutterBottom variant="body2" className={classes.propertyText}>
                            Automatic
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}