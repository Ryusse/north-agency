import { Box } from '@mui/material';
import { useRouter } from 'next/router';

import { LogoDark } from './../../atoms/icon/LogoDark';
import { headerStyles } from './styles';
import { Button, Link } from '@/elements/atoms';
import { MainLayout } from '@/elements/organisms';

export const Header = () => {
  const router = useRouter();

  const { classes } = headerStyles();

  const handleRedirectToHome = () => {
    router.replace('/');
  };

  return (
    <header className={classes.styledHeader}>
      <MainLayout>
        <Box className={classes.styledContainer}>
          <Box
            onClick={handleRedirectToHome}
            className={classes.styledLogo}
            component="a"
          >
            <LogoDark />
          </Box>

          <Box className={classes.styledNav} component="nav">
            <Link
              href="/plans"
              type="link"
              active={router.pathname === '/plans'}
            >
              Planes de viaje
            </Link>
            <Link
              href="/about"
              type="link"
              active={router.pathname === '/about'}
            >
              Sobre nosotros
            </Link>

            <Link href="" type="link">
              Conviertete en asesor
            </Link>

            <Box className={classes.styledMarker} component="div"></Box>
          </Box>

          <Box className={classes.styledButtonContainer}>
            <Button width="contained">Iniciar sesión</Button>
          </Box>
        </Box>
      </MainLayout>
    </header>
  );
};
