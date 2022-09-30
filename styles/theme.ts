import { createTheme } from '@mui/material/styles';

import {
  northH1,
  northH2,
  northBody1,
  northBody2,
  northSubtitle1,
} from './typography';
import { northFontFamily } from './utils';

let NorthTheme = createTheme();

NorthTheme = createTheme({
  palette: {
    primary: {
      main: '#DE3151',
      light: '#fff',
    },

    secondary: {
      main: '#353CEE',
    },

    grey: {
      400: '#D4D4D4',
      900: '#333F51',
    },

    text: {
      primary: '#333F51',
      secondary: '#8E9BAE',
    },
  },
  typography: {
    fontFamily: northFontFamily,
    h1: northH1,
    h2: northH2,
    body1: northBody1,
    body2: northBody2,
    subtitle1: northSubtitle1,
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

export default NorthTheme;
