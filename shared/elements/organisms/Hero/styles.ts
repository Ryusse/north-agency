import { makeStyles } from 'tss-react/mui';

export const heroStyles = makeStyles<{
  backgroundImage: string;
  height: string;
  align: string;
}>()((theme, { backgroundImage, height, align }) => ({
  styledHero: {
    width: '100%',
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

    height: (() => {
      switch (height) {
        case 'full':
          return '100vh';
        case 'medium':
          return '450px';
        default:
          break;
      }
    })(),
  },

  styledContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: (() => {
      switch (align) {
        case 'center':
          return 'center';
        case 'left':
          return 'start';
        case 'right':
          return 'end';
        default:
          break;
      }
    })(),

    height: (() => {
      switch (height) {
        case 'full':
          return '100vh';
        case 'medium':
          return '450px';
        default:
          break;
      }
    })(),
  },
}));
