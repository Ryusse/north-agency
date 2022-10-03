import { makeStyles } from 'tss-react/mui';

import { Align } from '.';

interface Props {
  align: Align;
}

export const subtitleStyles = makeStyles<Props>()((theme, { align }) => ({
  styledParagraph: {
    // fontSize: 'theme.typography.body2',
    color: theme.palette.primary.main,
    textAlign: 'start',
    fontWeight: 'bold',

    [theme.breakpoints.up('lg')]: {
      textAlign: align === 'center' ? 'center' : 'left',
    },
  },

  styledTitle: {
    color: theme.palette.grey[900],
    textAlign: 'start',
    fontWeight: 'bold',

    [theme.breakpoints.up('lg')]: {
      textAlign: align === 'center' ? 'center' : 'left',
    },
  },
}));
