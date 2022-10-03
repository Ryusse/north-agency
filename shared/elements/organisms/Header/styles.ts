import { alpha } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

export const headerStyles = makeStyles<{ onScroll: boolean }>()(
  (theme, { onScroll }) => ({
    styledHeader: {
      width: '100%',
      position: 'fixed',
      left: 0,
      paddingBlock: 22,
      zIndex: 10,
      backdropFilter: onScroll && 'blur(10px)',
      boxShadow: 'none',
      backgroundColor: onScroll
        ? alpha(theme.palette.common.white, 0.9)
        : 'transparent',

      borderBottom: `0.5px ${onScroll ? 'solid' : 'transparent'} ${
        onScroll ? theme.palette.grey[200] : theme.palette.common.white
      }`,
    },

    styledLogo: {
      cursor: 'pointer',
      display: 'grid',
      placeContent: 'center',

      '& path': {
        fill: onScroll
          ? theme.palette.text.primary
          : theme.palette.common.white,
      },
    },

    styledLink: {
      color: onScroll ? theme.palette.text.primary : theme.palette.common.white,
    },

    styledMenu: {
      color: onScroll ? theme.palette.text.primary : theme.palette.common.white,
    },
  })
);
