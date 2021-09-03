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
    control: (provided, state) => ({
      ...provided,
      color: colors.themeColor2,
      fontSize: 15,
      backgroundColor: colors.white,
      outline: 'none',
      boxShadow: 'none',
      borderRadius: '15px',
      border: state.isFocused?`0.1px solid ${colors.themeColor2} !important`:`0.1px solid lightgrey !important`,
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
    })
  };
 

export const DropDown = ({options,selectedOption,setSelectedOption,placeHolderText,...props})=> {
    const classes = useStyles(props);
    return(
      <div className={classes.divClass}>
        <Select
          styles={customStyles}
          defaultValue={selectedOption}
          onChange={(e)=>setSelectedOption(e, props.name)}
          options={options}
          placeholder={placeHolderText}
          components={{
            IndicatorSeparator: () => null
          }}
        />
      </div>
    )
}