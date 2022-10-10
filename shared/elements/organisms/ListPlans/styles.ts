import { makeStyles } from 'tss-react/mui';

export const listStyles = makeStyles()((theme) => ({
  styledContainer: {
    display: 'flex',
    columnGap: '1rem',
    overflowX: 'auto',

    [theme.breakpoints.up('md')]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(20rem,1fr))',
      rowGap: '3.625rem',
      columnGap: '2rem',
    },
  },
}));
