import React, {useEffect} from "react";
import { makeStyles, Breadcrumbs, Typography, Box, Link } from "@material-ui/core";
import {NavigateNext} from "@material-ui/icons";
import {Filters} from "./_";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '6rem'
    },
    breadcrumb: {color: theme.palette.secondary.main}
}))
export const Search = ()=> {
    const classes = useStyles();
    useEffect(()=>{
        window.scroll(0,0);
    })
    return(
        <div className={classes.root}>
            <Box ml={3}>
                <Breadcrumbs separator={<NavigateNext fontSize="small" />} aria-label="breadcrumb">
                    <Link color="textPrimary" href="/">
                        <Typography variant="body2">Homepage</Typography> 
                    </Link>
                    <Typography variant="body2" className={classes.breadcrumb}>Search</Typography>
                </Breadcrumbs>
            </Box>
            <Filters/>
        </div>
    )
}