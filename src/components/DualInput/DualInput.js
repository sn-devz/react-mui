import React from "react";
import {makeStyles, Box, TextField} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    btn: {
        backgroundColor: 'white',
        border: '0.1px solid lightgrey',
        height: '3.1rem',
        width: '100%'
    },
    btn1: {
        borderTopLeftRadius: '15px',
        borderBottomLeftRadius: '15px'
    },
    btn2: {
        borderTopRightRadius: '15px',
        borderBottomRightRadius: '15px',
    },
    input: {
        marginTop: '0.6rem',
        paddingLeft: '0.6rem',
        color: 'grey',
        fontWeight: 'normal',
        // Styling for removing arrows from type NUMBER input
        '& input[type=number]': {
            '-moz-appearance': 'textfield'
        },
        '& input[type=number]::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        },
        '& input[type=number]::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        },
        '& ::placeholder':{
            color: 'grey'
        }
    },
    label: {
        paddingLeft: '1.5rem'
    }
}))
export const DualInput = ({type, label1, label1Name, label1Value, label2, label2Name, label2Value, handleChange})=> {
    const classes = useStyles();
    return(
        <Box display='flex'>
            <TextField
            id={label1}
            name={label1Name}
            placeholder={label1}
            type={type}
            value={label1Value}
            InputProps={{disableUnderline: true, className: classes.input}}
            InputLabelProps={{className:classes.label}}
            className={`${classes.btn} ${classes.btn1}`}
            onChange={(e)=> {handleChange(e,label1Name)}}
            />
            <TextField
            id={label1}
            name={label2Name}
            placeholder={label2}
            type={type}
            value={label2Value}
            InputProps={{disableUnderline: true, className: classes.input}}
            InputLabelProps={{className:classes.label}}
            className={`${classes.btn} ${classes.btn2}`}
            onChange={(e)=> {handleChange(e,label2Name)}}
            />
        </Box>
    )
}