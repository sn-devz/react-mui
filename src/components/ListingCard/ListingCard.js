import React from "react";
import {useHistory} from 'react-router-dom';
import { makeStyles, Typography, Card, CardActionArea, CardContent, Button, Divider, Box } from '@material-ui/core';
import CardImage from '../../assets/images/cardImg.jpg';
import { colors } from "../../utils";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 800,
        minWidth: 200,
        borderRadius: '0.7rem',
     },
    media: {
        width: 'inherit',
        objectFit: 'cover',
        '&:hover': {
            transform: 'scale(1.05)',
            transition: 'transform 0.7s'
        },
    },
    bg: {
        backgroundColor: theme.typography.h2.color,
    },
    content: {
        backgroundColor: theme.typography.h2.color,
        paddingTop: '0.5rem'
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
    const history = useHistory();
    return(
        <Card className={classes.root} onClick={()=>{history.push('/car-details')}}>
            <CardActionArea className={classes.bg}>
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