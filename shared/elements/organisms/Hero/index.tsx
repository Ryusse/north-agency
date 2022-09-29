import { ReactNode } from 'react';

import { Box } from '@mui/material';

import { heroStyles } from './styles';
import { MainLayout } from '@/elements/organisms';

interface Props {
  children: ReactNode;
}

export const Hero = ({ children }: Props) => {
  const { classes } = heroStyles();
  return (
    <Box className={classes.styledHero}>
      <MainLayout>
        <Box
          display="flex"
          alignItems="center"
          justifyContent={{ xs: 'center', lg: 'start' }}
          height="100vh"
        >
          <Box> {children}</Box>
        </Box>
      </MainLayout>
    </Box>
  );
};
