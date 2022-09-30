import { makeStyles } from 'tss-react/mui';

import { Align } from '.';

interface Props {
  align: Align;
}

export const subtitleStyles = makeStyles<Props>()((theme, { align }) => ({
  styledParagraph: {
    // fontSize: 'theme.typography.body2',
    color: theme.palette.primary.main,
    textAlign: align === 'center' ? 'center' : 'left',
    fontWeight: 'bold',
  },

  styledTitle: {
    // fontSize: 'theme.typography.h2',
    color: theme.palette.grey[900],
    textAlign: align === 'center' ? 'center' : 'left',
    fontWeight: 'bold',
  },
}));
