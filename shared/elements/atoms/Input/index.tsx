import { forwardRef } from 'react';

import { TextField } from '@mui/material';

import { inputStyles } from './styles';

export type InputSize = 'small' | 'medium';

interface Props {
  label?: string;
  size?: InputSize;
  type?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, size = 'medium', type, ...props }: Props, ref) => {
    const { classes } = inputStyles();

    return (
      <TextField
        type={type}
        ref={ref}
        {...props}
        className={classes.styledInput}
        fullWidth
        label={label}
        size={size}
        variant="outlined"
        // inputProps={{ style: { fontSize: 12 } }}
        // InputLabelProps={{ style: { fontSize: 12 } }}
      />
    );
  }
);
