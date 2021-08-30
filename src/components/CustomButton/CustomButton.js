import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from "../../utils";

const useStyles = makeStyles({
  root: {
    borderRadius: '6px',
    fontWeight: 'bold',
    padding: '8px 20px',
    // color: 'white',
    border: `1px solid ${colors.themeColor2}`,
    "&:hover": {
      color: 'white',
      backgroundColor: colors.themeColor2,
    }
  },
});
export const CustomButton = ({name, handleClick, style, ...props})=> {
  const classes = useStyles(props);
  const [mouseOver, setMouseOver] = useState(false);
  return(
    <Button
      onMouseOver={()=>setMouseOver(true)}
      onMouseOut={()=>setMouseOver(false)}
      color="inherit" 
      className={classes.root}
      onClick={handleClick}
      style={{color: mouseOver?'white': colors.themeColor2, ...style}}
      {...props}
    >
      {name}
    </Button>
  )
}