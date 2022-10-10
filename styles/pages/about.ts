import { makeStyles } from 'tss-react/mui';

export const aboutStyles = makeStyles()((theme) => ({
  styledContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',

    '& h2': {
      color: theme.palette.common.white,
    },

    '& p': {
      color: theme.palette.common.white,
    },
  },
}));
