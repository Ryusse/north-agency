import { ReactNode } from 'react';

import { ButtonBase, Typography } from '@mui/material';

import { buttonStyles } from './styles';

export type ButtonName =
  | 'primary'
  | 'secondary'
  | 'primary-outlined'
  | 'terciary';
export type ButtonType = 'submit' | 'button';
export type Width = 'contained' | 'full';
export type Positon = 'left' | 'center' | 'right';

interface Props {
  buttonName?: ButtonName;
  width?: Width;
  children: ReactNode;
  type?: ButtonType;
  position?: Positon;
}

export const Button = ({
  buttonName = 'primary',
  width = 'full',
  children,
  type = 'submit',
  position = 'left',
}: Props) => {
  const { classes } = buttonStyles({ buttonName, width, position });

  return (
    <>
      <ButtonBase className={classes.styledButton} type={type}>
        <Typography className={classes.styledText}>{children}</Typography>
      </ButtonBase>
    </>
  );
};
