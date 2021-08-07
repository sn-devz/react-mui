import React, {useState} from "react";
import Select from 'react-select';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from "../../utils/constanst/Colors";


  const useStyles = makeStyles({
      divClass: {
          width:props=> props.divWidth,
          marginTop:1.3
      },
    
  });
  const customStyles = {
    control: provided => ({
      ...provided,
      minHeight: '5vh',
      fontSize: 15,
      backgroundColor: colors.white,
      outline: 'none',
      boxShadow: 'none',
      borderRadius:0,
    }),
    indicatorsContainer: provided => ({
      ...provided,
      height:'8.3vh',
    }),
    clearIndicator: provided => ({
      ...provided,
      
    }),
    dropdownIndicator: provided => ({
      ...provided,
    }),

  };
 

export const DropDown = ({options,selectedOption,setSelectedOption,placeHolderText,...props})=> {
    const classes = useStyles(props);
    return(
        <div className={classes.divClass}>
            <Select
                styles={customStyles}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                placeholder={placeHolderText}
            />
      </div>
    )
}