import { createTheme } from '@mui/material';

const theme = createTheme();

export const northH1 = (theme.typography.h1 = {
  fontSize: '2rem',
  lineHeight: '140%',

  [theme.breakpoints.up('sm')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '3rem',
  },
});

export const northH2 = (theme.typography.h2 = {
  fontSize: '1.5rem',

  [theme.breakpoints.up('lg')]: {
    fontSize: '2.5rem',
  },
});
