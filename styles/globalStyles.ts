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
}));
