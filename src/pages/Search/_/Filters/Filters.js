import React, { useState } from "react";
import { makeStyles, Paper, Typography, Box, Grid } from "@material-ui/core";
import {NavigateNext} from "@material-ui/icons";
import {DropDown, DualInput} from "../../../../components";
import {makes, model, type, mileage, driveType, fuelType, transmission, carColors} from "../../../../utils/constanst";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.info.light,
        boxShadow: '0 0',
        margin: '1rem 0',
        padding: '1.5rem'
    },
    text: {
        fontSize: '1.1rem', 
        alignSelf: 'center'
    },
    btn: {cursor: 'pointer'}
}))
const initialState = {
    make: '',
    model: '',
    type: '',
    mileage: '',
    driveType: '',
    fuelType: '',
    transmission: '',
    color: '',
    minPrice: '',
    maxPrice: '',
    minYear: '',
    maxYear: ''
}
export const Filters = ()=> {
    const classes = useStyles();
    const [filters, setFilters] = useState(initialState);
    const handleChange = (e,name)=> {
        setFilters({
            ...filters,
            [name]: e.value
        })
    }
    const handleChangeInput = (e,name)=> {
        setFilters({
            ...filters,
            [name]: e.target.value
        })
    }
    return(
        <Paper className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={4} md={3}>
                    <DropDown
                        name="make"
                        placeHolderText="Make"
                        selectedOption={filters.make}
                        setSelectedOption={handleChange}
                        options={makes}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <DropDown
                        name="model"
                        placeHolderText="Model"
                        selectedOption={filters.model}
                        setSelectedOption={handleChange}
                        options={model}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <DualInput 
                        type="number"
                        label1="Min Price"
                        label1Name="minPrice"
                        label1Value={filters.minPrice}
                        label2="Max Price"
                        label2Name="maxPrice"
                        label2Value={filters.maxPrice}
                        handleChange={handleChangeInput}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <DualInput 
                        type="number"
                        label1="Min Year"
                        label1Name="minYear"
                        label1Value={filters.minYear}
                        label2="Max Year"
                        label2Name="maxYear"
                        label2Value={filters.maxYear}
                        handleChange={handleChangeInput}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <DropDown
                        name="type"
                        placeHolderText="Type"
                        selectedOption={filters.type}
                        setSelectedOption={handleChange}
                        options={type}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <DropDown
                        name="mileage"
                        placeHolderText="Mileage"
                        selectedOption={filters.mileage}
                        setSelectedOption={handleChange}
                        options={mileage}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <DropDown
                        name="driveType"
                        placeHolderText="Drive Type"
                        selectedOption={filters.driveType}
                        setSelectedOption={handleChange}
                        options={driveType}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <DropDown
                        name="fuelType"
                        placeHolderText="Fuel Type"
                        selectedOption={filters.fuelType}
                        setSelectedOption={handleChange}
                        options={fuelType}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <DropDown
                        name="transmission"
                        placeHolderText="Transmission"
                        selectedOption={filters.transmission}
                        setSelectedOption={handleChange}
                        options={transmission}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <DropDown
                        name="color"
                        placeHolderText="Color"
                        selectedOption={filters.color}
                        setSelectedOption={handleChange}
                        options={carColors}
                    />
                </Grid>
            </Grid>
            <Box display='flex' mt={2} mr={1}>
                <Box display='flex'>
                    <Box alignSelf='center'><NavigateNext color='action'/></Box>
                    <Typography variant='body2' className={`${classes.text} ${classes.btn}`} onClick={()=>setFilters(initialState)}>
                        Clear all
                    </Typography>
                </Box>
                <Box display='flex' ml={2}>
                    <Typography variant='h4' className={classes.text}>
                        {`Filters(${Object.keys(filters).filter(e=>filters[e]).length})`}
                    </Typography>
                </Box>
            </Box>
        </Paper>
    )
}