import { makeStyles } from 'tss-react/mui';

export const buttonStyles = makeStyles<{
  buttonName: string;
  width: string;
  position: string;
}>()((theme, { buttonName, width, position }) => ({
  styledButton: {
    paddingInline: 32,
    paddingBlock: 14,
    borderRadius: '6px',
    fontSize: '0.875rem',
    textAlign: 'center',
    transition: 'all 0.2s ease-in-out',

    justifySelf: (() => {
      switch (position) {
        case 'left':
          return 'start';
        case 'right':
          return 'end';
        case 'center':
          return 'center';
        default:
          break;
      }
    })(),

    color: (() => {
      switch (buttonName) {
        case 'primary':
          return theme.palette.common.white;
        case 'secondary':
          return theme.palette.common.white;
        case 'terciary':
          return theme.palette.text.primary;
        default:
          break;
      }
    })(),

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
        case 'terciary':
          return theme.palette.common.white;
        default:
          break;
      }
    })(),

    '&: hover': {
      backgroundColor: (() => {
        switch (buttonName) {
          case 'primary':
            return theme.palette.primary.dark;
          case 'secondary':
            return theme.palette.secondary.dark;
          default:
            break;
        }
      })(),
    },
  },

  styledText: {
    fontWeight: 500,
  },
}));
