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
  fontSize: '1.6rem',
  fontWeight: 700,
  lineHeight: '2.2rem',

  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
    lineHeight: '2.8125rem',
  },
});

export const northSubtitle1 = (theme.typography.subtitle1 = {
  fontSize: '1.2rem',
  fontWeight: 500,
  lineHeight: '1.75rem',

  [theme.breakpoints.up('md')]: {
    fontSize: '1.375rem',
  },
});

export const northBody1 = (theme.typography.body1 = {
  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: '1.75rem',

  [theme.breakpoints.up('lg')]: {
    fontSize: '0.875rem',
  },
});

export const northBody2 = (theme.typography.body2 = {
  fontSize: '0.75rem',

  [theme.breakpoints.up('md')]: {
    fontSize: '0.875rem',
  },
});
