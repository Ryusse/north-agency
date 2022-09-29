import { makeStyles } from 'tss-react/mui';

export const headerStyles = makeStyles()((theme) => ({
  styledHeader: {
    width: '100%',
    position: 'fixed',
    left: 0,
    paddingBlock: 52,
    zIndex: 100,
  },

  styledContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  styledLogo: {
    cursor: 'pointer',
  },

  styledNav: {
    display: 'none',
    position: 'relative',

    [theme.breakpoints.up('lg')]: {
      display: 'flex',
    },
  },

  styledButtonContainer: {
    display: 'none',

    [theme.breakpoints.up('lg')]: {
      display: 'flex',
    },
  },

  styledMarker: {
    // position: 'absolute',
    // height: '4px',
    // width: 'calc(100% / 3)',
    // background: theme.palette.common.white,
    // bottom: '8px',
    // left: 0,
    // transition: '0.5s',
    // borderRadius: '4px',
  },
}));
