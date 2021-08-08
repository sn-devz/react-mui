import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import HeaderImage from '../../assets/images/headerImg.jpg';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import { DropDown } from "../DropDown/DropDown";
import { citesName, priceRange } from "../../utils/constanst/Constants";
import { colors } from "../../utils/constanst/Colors";
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
    headerImg: {
        height: '90vh', 
        position: 'fixed',
        alignItems:'center',
        justifyContent:'center',
        [theme.breakpoints.down("xs")]: {
            height: '100vh'
        },
    },
    container: {
        position:'absolute',
        top:50,
        width:'100%',
        textAlign:'center'
    },
    heading: {
        color:colors.white,
        fontWeight:800,
        fontSize:'55px',
        marginTop:65,
        [theme.breakpoints.down("sm")]: {
            fontSize:'30px',
        },
    },
    subHeading: {
        color: 'white',
        fontSize:20,
        marginTop:0,
        marginBottom:20
    },
    search:
    {
        padding:'20px 20% 20px 20%',
        [theme.breakpoints.down("xs")]: {
            padding:'20px 10% 20px 10%',
        },
    },
    searchContainer: {
        backgroundColor: 'white',
        borderRadius: '15px',
        padding:'15px 20px',
    },
    searchDivUpperRow: {
        color:colors.white,
        fontSize:30,
        paddingLeft:20
    },
    carsModal: {
        height: '50px',
        width: '100%',
        backgroundColor:colors.white,
        borderRadius: '15px',
        border: '1px solid lightgrey',
        padding: 0,
        "&:focus": {
            outline: 'none',
            borderColor: colors.themeColor2
        },
        '&::placeholder': {
            paddingLeft: '10px'
        },
        [theme.breakpoints.down("sm")]: {
            width: 'inherit'
        },
    },
   
    searchItems:{
        display:'flex',
        [theme.breakpoints.down("sm")]: {
            display: 'inherit'
        },
    },
    item: {
        width: '30%',
        margin: '5px',
        [theme.breakpoints.down("sm")]: {
            width: '100%'
        },
    },
    filters:{
        color:colors.white,
        fontSize:15,
        fontWeight:'bold',
    },
    menuButton: {
        backgroundColor: colors.themeColor2,
        borderRadius: '15px',
        display:'flex',
        margin: '5px',
        [theme.breakpoints.down("sm")]: {
            width: '100%'
        },
    },
    buttonIconStyle: {
        margin: '0 auto',
        width:50,
        height:35,
        color: colors.white,
        alignSelf: 'center'
    }
  
}));   
export const Header = ()=> {
    const classes = useStyles();
    const [selectedOptions, setSelectedOptions] = useState(null);
    return(
        <div>
            <img src={HeaderImage} className={classes.headerImg}/>
            <div className={classes.container}>
                <Typography className={classes.heading}>Find Your <span style={{color: colors.themeColor2}}>Perfect</span> Car</Typography>
                <Typography className={classes.subHeading}>Best Place for cars sale and purchase</Typography>
                <div className={classes.search}>
                    <div className={classes.searchContainer}> 
                        <div className={classes.searchItems}>
                            <div className={classes.item}>
                                <input className={classes.carsModal} name="Car Modal" type="text" placeholder="Cars Modals"/>
                            </div>
                            <div className={classes.item}>
                                <DropDown 
                                options={citesName}
                                selectedOption={selectedOptions} 
                                setSelectedOption={setSelectedOptions} 
                                placeHolderText={"Cites"} />
                            </div>
                            <div className={classes.item}>
                                <DropDown 
                                options={priceRange} 
                                selectedOption={selectedOptions} 
                                setSelectedOption={setSelectedOptions} 
                                placeHolderText={"Price Range"} />
                            </div>
                            <div className={classes.menuButton}>
                                <SearchIcon 
                                color="inherit" 
                                className={classes.buttonIconStyle} /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}