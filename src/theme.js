import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const blue = "#0B72B9";
const orange = "#FFBA60";
const grey = "#868686";
const white = "#fff"

const theme = createMuiTheme({
   palette: {
    common: {
      blue: blue,
      orange: orange,
      white: white
    },
    primary: {
      main: blue
    },
    secondary: {
      main: orange
    }
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      color: "white",
      fontSize: "1rem"
    },
    h1: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: blue,
      lineHeight: 1.5
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: blue
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: blue,
      fontWeight: 700
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Raleway",
      color: blue,
      lineHeight: 1
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: grey
    },
    subtitle2: {
      color: "white",
      fontWeight: 300,
      fontSize: "1.25rem"
    },
    body1: {
      fontSize: "1.25rem",
      color: grey,
      fontWeight: 300
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: grey
    }
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: blue,
        fontSize: "1rem"
      }
    },
    MuiInput: {
      root: {
        color: blue,
        fontWeight: 300
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${blue}`
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${blue}`
        }
      }
    }
  }
});

export default theme;
