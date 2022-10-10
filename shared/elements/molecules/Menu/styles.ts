import { alpha } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

export const menuStyles = makeStyles<{ open: boolean }>()(
  (theme, { open }) => ({
    styledContainer: {
      right: open ? '0' : '-100%',
      position: 'fixed',
      top: 0,
      height: '100vh',
      width: '70vw',
      backgroundColor: theme.palette.common.white,
      transition: 'all 0.2s ease-out',
      padding: '1rem',
    },

    styledLogo: {
      '& path': {
        fill: theme.palette.text.primary,
      },
    },

    styledLink: {
      paddingBlock: '0.8rem',
      paddingInline: '1.2rem',
      //backgroundColor: theme.palette.primary.main,
      color: theme.palette.text.primary,
      borderRadius: '0.5rem',
      textDecoration: 'none',
      fontWeight: 'medium',
    },

    styledLinkActive: {},
  })
);
