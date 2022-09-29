import { TextField } from '@mui/material';

import { inputStyles } from './styles';

export type InputSize = 'small' | 'medium';

interface Props {
  label?: string;
  size?: InputSize;
}

export const Input = ({ label, size = 'medium' }: Props) => {
  const { classes } = inputStyles();

  return (
    <TextField
      className={classes.styledInput}
      fullWidth
      label={label}
      size={size}
      variant="outlined"
      // inputProps={{ style: { fontSize: 12 } }}
      // InputLabelProps={{ style: { fontSize: 12 } }}
    />
  );
};
