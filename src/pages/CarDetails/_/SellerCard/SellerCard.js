import React from "react";
import { makeStyles, Box, Typography, Card } from "@material-ui/core";
import {LocationOnOutlined, EmailOutlined, PhoneOutlined} from "@material-ui/icons";
import {CustomButton} from "../../../../components";

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: '#f2f5fb',
        boxShadow: '0 0',
        borderRadius: '0.7rem',
        padding: '1rem 1.5rem',
        [theme.breakpoints.down("xs")]: {
            padding: '1rem',
        },
    },
    name: {fontWeight: 600},
    icon: {
        color: theme.palette.secondary.main,
        marginRight: '0.5rem'
    },
    img: {
        height: '4rem',
        width: '4rem',
        borderRadius: '50%'
    }
}));
export const SellerCard = ({seller})=> {
    const classes = useStyles();
    const {name, address, email, phoneNo, imageURL} = seller;
    return(
        <Card className={classes.card}>
            <Box display='flex' mb={2}>
                <Box>
                    <Box ml={1}>
                        <Typography variant="h2" className={classes.name}>{name?name:"Carsriver's User"}</Typography>
                    </Box>
                    <Box display='flex' mt={1}>
                        <LocationOnOutlined className={classes.icon}/>
                        <Typography variant="body2">{address}</Typography>
                    </Box>
                    <Box display='flex' mt={1}>
                        <EmailOutlined className={classes.icon}/>
                        <Typography variant="body2">{email?email:"Not Available"}</Typography>
                    </Box>
                    <Box display='flex' mt={1}>
                        <PhoneOutlined className={classes.icon}/>
                        <Typography variant="body2">{phoneNo}</Typography>
                    </Box>
                </Box>
                <Box ml='auto'>
                    <img src={imageURL} className={classes.img}/>
                </Box>
            </Box>
            <CustomButton name="Send Message" handleClick={()=>{}} style={{width: '100%'}}/>
        </Card>
    )
}