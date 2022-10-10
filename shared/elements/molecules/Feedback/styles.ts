import { Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

export const feedbackStyles = makeStyles<{
  backgroundColor: string;
  position: string;
}>()((theme, { backgroundColor, position }) => ({
  styledContainer: {
    paddingBlock: '1rem',
    paddingInline: '1.5rem',
    width: '100%',
    borderRadius: '0.5rem',
    boxShadow:
      '0px 100px 80px rgba(33, 51, 113, 0.06), 0px 41.7776px 33.4221px rgba(33, 51, 113, 0.0431313), 0px 22.3363px 17.869px rgba(33, 51, 113, 0.0357664), 0px 12.5216px 10.0172px rgba(33, 51, 113, 0.03), 0px 6.6501px 5.32008px rgba(33, 51, 113, 0.0242336), 0px 2.76726px 2.21381px rgba(33, 51, 113, 0.0168687)',

    marginLeft: position === 'right' ? 'auto' : null,
    marginRight: position === 'left' ? 'auto' : null,
    margin: position === 'center' ? 'auto' : null,

    [theme.breakpoints.up('lg')]: {
      maxWidth: '33.125rem',
    },

    '& p': {
      color: (() => {
        switch (backgroundColor) {
          case 'white':
            return theme.palette.text.primary;
          case 'red':
            return theme.palette.common.white;
          default:
            break;
        }
      })(),
    },

    backgroundColor: (() => {
      switch (backgroundColor) {
        case 'white':
          return theme.palette.common.white;
        case 'red':
          return theme.palette.primary.main;
        default:
          break;
      }
    })(),
  },

  styledProfile: {
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    marginTop: '1.5rem',
  },

  styledImage: {
    width: '2.5rem',
    height: '2.5rem',
    margin: 0,

    '& img': {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
    },
  },

  styledName: {
    fontWeight: 'bold',
    fontSize: '1rem !important',
  },
}));
