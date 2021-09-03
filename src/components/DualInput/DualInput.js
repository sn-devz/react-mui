import React from "react";
import {makeStyles, Box, TextField} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    btn1: {
        backgroundColor: 'white',
        border: '0.1px solid lightgrey',
        height: '3.1rem',
        borderTopLeftRadius: '15px',
        borderBottomLeftRadius: '15px',
        // padding: '0 0.5rem 0.5rem 0.5rem !important'
    },
    btn2: {
        backgroundColor: 'white',
        border: '0.1px solid lightgrey',
        height: '3.1rem',
        borderTopRightRadius: '15px',
        borderBottomRightRadius: '15px',
    },
    label: {
        paddingLeft: '1.5rem'
    }
}))
export const DualInput = ({type, label1, label2})=> {
    const classes = useStyles();
    return(
        <Box display='flex'>
            <TextField
            id={label1}
            placeholder={label1}
            type={type}
            InputProps={{disableUnderline: true}}
            InputLabelProps={{className:classes.label}}
            className={classes.btn1}
            />
            <TextField
            id={label1}
            placeholder={label1}
            type={type}
            InputProps={{disableUnderline: true}}
            InputLabelProps={{className:classes.label}}
            className={classes.btn2}
            />
        </Box>
    )
}