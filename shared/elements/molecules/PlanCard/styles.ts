import { makeStyles } from 'tss-react/mui';

export const cardStyles = makeStyles<{ backgroundImage: string }>()(
  (theme, { backgroundImage }) => ({
    styledContainer: {
      cursor: 'pointer',
      borderRadius: '0.5rem',
      position: 'relative',

      [theme.breakpoints.up('md')]: {
        overflow: 'hidden',
      },
    },

    styledBackground: {
      transition: 'all 0.2s ease-in-out',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '16rem',
      height: '25.5rem',
      borderRadius: '0.5rem',

      [theme.breakpoints.up('md')]: {
        width: 'auto',
        height: '35.5rem',
      },

      '&:hover': {
        scale: '1.05',
        borderRadius: '0.5rem',
      },
    },

    styledImage: {
      width: '16rem',
      margin: 0,
      display: 'grid',
      borderRadius: '0.5rem',
      height: '25.5rem',

      [theme.breakpoints.up('md')]: {
        width: 'auto',
        height: '35.5rem',
      },

      '& img': {
        transition: 'all 0.2s ease-in-out',
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        borderRadius: '0.5rem',
      },
    },

    styledCover: {
      position: 'absolute',
      left: 0,
      width: '100%',
      bottom: 0,
      height: '20.875rem',
      background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)',
      borderRadius: '0 0 0.5rem 0.5rem',
    },

    styledDetail: {
      position: 'absolute',
      left: 0,
      width: '100%',
      bottom: 0,
      padding: '1.25rem',
    },

    styledRow: {
      display: 'flex',
      gap: '1.625rem',
      justifyContent: 'space-between',
    },

    styledTitle: {
      fontWeight: 'bold',
      color: theme.palette.common.white,
    },

    styledLocation: {
      marginTop: '0.625rem',
      color: theme.palette.common.white,
    },

    styledPrice: {
      marginTop: 'auto',

      fontWeight: 'bold',
      fontSize: '1.1rem !important',
      color: theme.palette.common.white,

      [theme.breakpoints.up('lg')]: {
        fontSize: '1.375rem !important',
      },
    },
  })
);
