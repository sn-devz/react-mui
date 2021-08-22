import { createTheme } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({})
export const appTheme = createTheme({
  palette: {
    primary:{
      main:'#f9fafc',
      light:'#fdfdfd',
    },
    secondary:{
      main:'#ff4605',
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
      color: '#222732',
      fontSize: '1.8rem',
    },
    h4:{
      color: '#ff4605',
      fontSize: '1.5rem',
      fontWeight: 'bold'
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
    body1: {
      fontSize: '0.95rem',
      fontWeight: 'bold'
    },
    body2: {
      color:'#a7a8a8',
      alignSelf: 'center',
      fontSize: '0.95rem'
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