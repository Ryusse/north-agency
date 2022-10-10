import { Stack, Box } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { footerStyles } from './styles';
import { LogoDark } from '@/elements/atoms';
import { MainLayout } from '@/elements/organisms';

export const Footer = () => {
  const { classes } = footerStyles();

  const router = useRouter();

  const handleRedirectToHome = () => {
    router.replace('/');
  };

  return (
    <MainLayout>
      <Box component="footer" className={classes.styledContainer}>
        <Box
          onClick={handleRedirectToHome}
          className={classes.styledLogo}
          component="a"
        >
          <LogoDark />
        </Box>

        <Stack
          component="nav"
          className={classes.styledNavbar}
          position="relative"
          direction="row"
          display={{ xs: 'none', lg: 'flex' }}
        >
          <Link href="/plans" type="link">
            Planes de viaje
          </Link>
          <Link href="/about" type="link">
            Sobre nosotros
          </Link>

          <Link href="/asesor" type="link">
            Conviertete en asesor
          </Link>
        </Stack>
      </Box>
    </MainLayout>
  );
};
