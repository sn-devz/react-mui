import { createMuiTheme } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({})
export const appTheme = createMuiTheme({
  palette: {
    primary:{
      main:'#f9fafc',
      light:'#fdfdfd',
    },
    secondary:{
        main:'#10469D',
    }
  },
 
  components: {
    table: {
      header: '#8299a2'
    }
  },
  typography: {
    // fontFamily: `Poppins Helvetica Arial sans-serif`,
    button: {
      textTransform: 'capitalize',
      fontSize: '1rem'
    },
    fontFamily: `'Muli', Arial,Helvetica,sans-serif`,
    h1:{
      color: '#3485a1'
    },
    h2:{
      color: '#222732',
      fontWeight: 800,
      fontSize: '2.5rem',
      [breakpoints.down("sm")]: {
        fontSize: '2rem',
      },
      [breakpoints.down("xs")]: {
        fontSize: '1.5rem',
      },
    },
    h3:{
      color: '#9e9fab'
    },
    h4:{
      // color: '#4a555a' 
      color: '#0096d6'
    },
    h5:{
      color:'white',
      fontSize: '1.2rem',
      fontWeight: 'bold'
    },
    h6:{
      color:'white',
      fontSize: '1.1rem'
    },
    body2: {
      color:'grey',
      alignSelf: 'center',
      fontSize: '0.96rem'
    }
  },
  breakpoints: {},
  overrides: {
    MuiCssBaseline:{
      '@global':{
        html: {
          '@media (min-width: 2048px)':{
            fontSize:'16px'
          },
          '@media (min-width: 3840px)':{
            fontSize:'32px'
          },
        },
        '.custom-toolbar + div':{
          height:'calc(100% - 5rem)'
        },
      }
    },
  },
});