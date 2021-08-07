import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { DropDown } from "../DropDown/DropDown";
import { citesName, priceRange } from "../../utils/constanst/Constants";
import { colors } from "../../utils/constanst/Colors";
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
    container: {
        position:'absolute',
        top:70,
        width:'100%'
    },
    logoText:{
        color: colors.white,
        textAlign:'center',
        fontSize:40,
        fontWeight:'bold',
        marginBottom: 10
    },
    desText: {
        color:colors.light_gray,
        textAlign:'center',
        fontSize:20,
        marginTop:0,
        marginBottom:20
    },
    searchDiv:
    {
        width:"64vw",
        height:"25vh",
        backgroundColor:colors.black,
        opacity:0.7,
        margin: '0 auto',
        borderRadius:10,
        padding:20
    },
    searchDivUpperRow: {
        color:colors.white,
        fontSize:30,
        paddingLeft:20
    },
    carsModal: {
        height:"8vh",
        width:"20vw",
        backgroundColor:colors.white,
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8,    
    },
   
    tableStyle:{
        marginTop:15,
        display:'flex'
    },
    filters:{
        color:colors.white,
        textAlign:'center',
        fontSize:15,
        fontWeight:'bold',
    },
    heading: {
        color:colors.white,
        fontWeight:'bold',
        fontSize:40,
        textAlign:'center',
        marginTop:80
    },
    menuButton: {
        backgroundColor: colors.red,
        height:"9vh",width:"7vw", 
        borderTopRightRadius:8,
        borderBottomRightRadius:8,
        display:'flex',
           alignItems:'center',
       },
       buttonIconStyle: {
           margin: '0 auto',
           width:50,
           height:35,
           color: colors.white
       }
  
}));   
export const Header = ()=> {
    const classes = useStyles();
    const [selectedOptions, setSelectedOptions] = useState(null);
    return(
        <div className={classes.container}>
            <p className={classes.logoText}>CarsRiver.com</p>
            <p className={classes.desText}>Best Place for car sales and purchase</p>
            <div className={classes.searchDiv} > 
                <div className={classes.searchDivUpperRow}>Buy  Rent  Invest</div>
                <div className={classes.tableStyle}>
                    <div>
                        <input className={classes.carsModal} name="Car Modal" type={"text"} placeholder="Cars Modals"/>
                    </div>
                        <DropDown options={citesName} selectedOption={selectedOptions} setSelectedOption={setSelectedOptions} divWidth={"25vw"} placeHolderText={"Cites"} />
                        <DropDown options={priceRange} selectedOption={selectedOptions} setSelectedOption={setSelectedOptions} divWidth={"20vw"} placeHolderText={"Price Range"} />
                        <div className={classes.menuButton}>
                            <SearchIcon color="inherit" className={classes.buttonIconStyle} /> 
                        </div>
                
                </div>
                <p className={classes.filters}>Advanced Filter</p>
            </div>
            <h2 className={classes.heading}>Sell and Buy with us</h2>
        </div>
    )
}