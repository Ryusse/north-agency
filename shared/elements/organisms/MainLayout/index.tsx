import { ReactNode } from 'react';

import { Box } from '@mui/material';

interface Props {
  children: ReactNode;
  component?: string;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <Box
      position="relative"
      maxWidth={1312}
      width={{
        xs: '100%',
        md: 'calc(100% - 3rem)',
        lg: 'calc(100% - 100px)',
      }}
      marginX="auto"
      px={{ xs: 2, md: 2, lg: 0 }}
    >
      {children}
    </Box>
  );
};
