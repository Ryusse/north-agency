import { Box, Typography, Stack } from '@mui/material';
import Image from 'next/image';

import imageTest from '/public/images/jpg/card-image.jpg';

import { cardStyles } from '@/elements/molecules/PlanCard/styles';

export const PlanCard = () => {
  const backgroundImage = imageTest.src;
  const { classes } = cardStyles({ backgroundImage });
  console.log(backgroundImage);
  return (
    <Box className={classes.styledContainer}>
      {/*<Box component="figure" className={classes.styledImage}>
        <Image src={backgroundImage} alt="image" />
      </Box>*/}
      <Box className={classes.styledBackground}></Box>
      <Box className={classes.styledCover}></Box>
      <Box className={classes.styledDetail}>
        <Box>
          <Box>
            <Typography variant="subtitle1" className={classes.styledTitle}>
              Full Day Lunahuaná y Cerro Azul
            </Typography>
          </Box>
          <Box className={classes.styledRow}>
            <Typography variant="body1" className={classes.styledLocation}>
              Lima, Perú
            </Typography>
            <Typography variant="body1" className={classes.styledPrice}>
              S/ 120
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
