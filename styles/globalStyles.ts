import { makeStyles } from 'tss-react/mui';

export const globalStyles = makeStyles()((theme) => ({
  styledBreak: {
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
  },

  styledGenericImage: {
    '& img': {
      objectFit: 'cover',
      widt: '100%',
      height: '100%',
    },
  },
}));
