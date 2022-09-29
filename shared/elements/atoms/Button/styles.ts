import { makeStyles } from 'tss-react/mui';

export const buttonStyles = makeStyles<{
  buttonName: string;
  width: string;
}>()((theme, { buttonName, width }) => ({
  styledButton: {
    paddingInline: 32,
    paddingBlock: 14,
    borderRadius: '6px',
    fontSize: '1rem',
    textAlign: 'center',
    color: theme.palette.common.white,
    //fontWeight: 600,
    // backgroundColor: theme.palette.primary.main,
    // (({ buttonName }) => buttonName && (
    //   color: "red",
    // )),
    width: (() => {
      switch (width) {
        case 'contained':
          return 'auto';
        case 'full':
          return '100%';
        default:
          break;
      }
    })(),

    backgroundColor: (() => {
      switch (buttonName) {
        case 'primary':
          return theme.palette.primary.main;
        case 'secondary':
          return theme.palette.secondary.main;
        default:
          break;
      }
    })(),
  },

  styledText: {
    fontWeight: 600,
  },
}));
