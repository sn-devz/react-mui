import React, {useState} from "react";
import Select from 'react-select';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from "../../utils";


  const useStyles = makeStyles({
    divClass: {
      width:props=> props.width
    }
  });
  const customStyles = {
    control: provided => ({
      ...provided,
      fontSize: 15,
      backgroundColor: colors.white,
      outline: 'none',
      boxShadow: 'none',
      borderRadius: '15px',
      "&:hover": {
        borderColor: colors.themeColor2
      },
    }),
    indicatorsContainer: provided => ({
      ...provided,
      height: '50px',
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