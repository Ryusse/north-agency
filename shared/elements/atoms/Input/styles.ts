import { makeStyles } from 'tss-react/mui';

export const inputStyles = makeStyles()((theme) => ({
  styledInput: {
    borderRadius: '6px',

    '& label.Mui-focused': {
      color: theme.palette.secondary.main,
    },
    // '& .MuiInput-underline:after': {
    //   borderBottomColor: 'green',
    // },

    // '&.Mui-focused fieldset': {
    //   borderColor: 'green',
    // },

    '& .MuiInputLabel-root': {
      color: theme.palette.text.secondary,
      fontSize: 14,
      //fontSize: '15px',
      // top: '50%',
      // transform: 'translateY(-50%)',
    },

    '& .MuiOutlinedInput-root': {
      borderRadius: '6px',
      fontSize: 14,

      '&.Mui-focused fieldset': {
        borderColor: theme.palette.secondary.main,
        borderWidth: '0.5px',
      },

      '& fieldset': {
        borderColor: theme.palette.grey[400],
      },

      // '&:hover fieldset': {
      //     borderColor: 'yellow',
      // },
    },
  },
}));
