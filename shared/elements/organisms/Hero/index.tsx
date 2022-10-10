import { ReactNode } from 'react';

import { Box } from '@mui/material';

import { heroStyles } from './styles';
import { MainLayout } from '@/elements/organisms';

export type Height = 'full' | 'medium';
export type Align = 'left' | 'center' | 'right';
interface Props {
  children: ReactNode;
  backgroundImage: string;
  height?: Height;
  align?: Align;
}

export const Hero = ({
  children,
  backgroundImage,
  height = 'full',
  align = 'left',
}: Props) => {
  const { classes } = heroStyles({ backgroundImage, height, align });
  return (
    <Box className={classes.styledHero}>
      <MainLayout>
        <Box className={classes.styledContent}>
          <Box> {children}</Box>
        </Box>
      </MainLayout>
    </Box>
  );
};
