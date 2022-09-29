import { ReactNode } from 'react';

import { ButtonBase, Typography } from '@mui/material';

import { buttonStyles } from './styles';

export type ButtonName = 'primary' | 'secondary' | 'primary-outlined';
export type Width = 'contained' | 'full';

interface Props {
  buttonName?: ButtonName;
  width?: Width;
  children: ReactNode;
}

export const Button = ({
  buttonName = 'primary',
  width = 'full',
  children,
}: Props) => {
  const { classes } = buttonStyles({ buttonName, width });

  return (
    <>
      <ButtonBase className={classes.styledButton}>
        <Typography className={classes.styledText}>{children}</Typography>
      </ButtonBase>
    </>
  );
};
