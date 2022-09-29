import HeroBackground from '/public/images/jpg/home-background.jpg';

import { makeStyles } from 'tss-react/mui';

export const heroStyles = makeStyles()((theme) => ({
  styledHero: {
    width: '100%',
    backgroundImage: `url(${HeroBackground.src})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  },
}));
