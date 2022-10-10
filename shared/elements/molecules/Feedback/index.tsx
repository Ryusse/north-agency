import { Box, Typography, Stack } from '@mui/material';
import Image from 'next/image';

import UserImage from '/public/images/png/feedback-1.jpg';

import { feedbackStyles } from './styles';

export type BackgroundColor = 'white' | 'red';
export type Position = 'left' | 'center' | 'right';

interface Props {
  backgroundColor?: BackgroundColor;
  position?: Position;
}

export const Feedback = ({
  backgroundColor = 'white',
  position = 'right',
}: Props) => {
  const { classes } = feedbackStyles({ backgroundColor, position });

  return (
    <Box className={classes.styledContainer}>
      <Typography>
        Great service. Organised very well. Amazing trip and great
        recommendation regarding dates and location. I would book again with
        travelonline. Nearly everything went smoothly and we were happy with the
        service.
      </Typography>
      <Stack className={classes.styledProfile}>
        <Box component="figure" className={classes.styledImage}>
          <Image src={UserImage} />
        </Box>
        <Box>
          <Typography className={classes.styledName}>Arlene McCoy</Typography>
          <Typography>Traveler</Typography>
        </Box>
      </Stack>
    </Box>
  );
};
