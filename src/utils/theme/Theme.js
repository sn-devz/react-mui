import { createMuiTheme } from "@material-ui/core";
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
    h1:{
      color: '#3485a1'
    },
    h2:{
      color: '#344146'
    },
    h3:{
      color: '#9e9fab'
    },
    h4:{
      // color: '#4a555a' 
      color: '#0096d6'
    },
    h5:{
      color:'#28458e'
    },

    h6:{
      fontWeight: 'bold'
    },
  
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