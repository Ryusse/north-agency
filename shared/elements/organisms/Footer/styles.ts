import { makeStyles } from 'tss-react/mui';

export const footerStyles = makeStyles()((theme) => ({
  styledContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBlock: '3.375rem',
  },

  styledLogo: {
    cursor: 'pointer',
    display: 'grid',
    placeContent: 'start',

    '& path': {
      fill: theme.palette.text.primary,
    },
  },

  styledNavbar: {
    display: 'flex',
    gap: '2rem',

    '& a': {
      color: theme.palette.text.primary,
      textDecoration: 'none',
    },
  },
}));
