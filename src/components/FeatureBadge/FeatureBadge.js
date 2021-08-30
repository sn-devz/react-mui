import React from "react";
import { makeStyles, Box, Typography, Card } from "@material-ui/core";
import { CheckCircleOutline } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    card: {
        boxShadow: '0 0',
        border: `0.1rem solid lightgrey`,
        borderRadius: '0.7rem',
        padding: '0.7rem 1rem',
        [theme.breakpoints.down("xs")]: {
            padding: '0.5rem 0.8rem',
        },
    },
    icon: {
        color: theme.palette.secondary.main,
        marginRight: '0.5rem',
        [theme.breakpoints.down("xs")]: {
            width: '1rem'
        },
    }
}));
export const FeatureBadge = ({text})=> {
    const classes = useStyles();
    return(
        <Card className={classes.card}>
            <Box display='flex'>
                <CheckCircleOutline className={classes.icon}/>
                <Typography variant={"body2"}>{text}</Typography>
            </Box>
        </Card>
    )
}