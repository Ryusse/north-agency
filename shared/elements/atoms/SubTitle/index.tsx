import { Typography } from '@mui/material';

import { subtitleStyles } from './styles';

export type Align = 'center' | 'left';

interface Props {
  align: Align;
  textParagraph: string;
  textTitle: string;
}

export const SubTitle = ({
  align = 'left',
  textParagraph,
  textTitle,
}: Props) => {
  const { classes } = subtitleStyles({ align });

  return (
    <>
      <Typography component="p" className={classes.styledParagraph}>
        {textParagraph}
      </Typography>
      <Typography variant="h2" className={classes.styledTitle}>
        {textTitle}
      </Typography>
    </>
  );
};
