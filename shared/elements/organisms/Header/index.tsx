import { ReactElement, useEffect, useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Slide, Stack } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useRouter } from 'next/router';

import { headerStyles } from './styles';
import { LogoDark, Button, Link } from '@/elements/atoms';
import { Menu } from '@/elements/molecules';
import { MainLayout } from '@/elements/organisms';
import { useScrollPosition } from '@/hooks';

interface Props {
  window?: () => Window;
  children?: ReactElement;
}

const HideOnScroll = ({ window, children }: Props) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide color="transparent" appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export const Header = (props: Props) => {
  const [onScroll, setOnScroll] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const router = useRouter();

  const scrollPosition = useScrollPosition();
  const { classes } = headerStyles({ onScroll });

  useEffect(() => {
    if (scrollPosition > 70) {
      setOnScroll(true);
    } else {
      setOnScroll(false);
    }
  }, [scrollPosition]);

  const handleRedirectToHome = () => {
    router.replace('/');
  };

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar className={classes.styledHeader}>
          <MainLayout>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={4}
            >
              <Box
                onClick={handleRedirectToHome}
                className={classes.styledLogo}
                component="a"
              >
                <LogoDark />
              </Box>

              <Stack
                component="nav"
                position="relative"
                direction="row"
                display={{ xs: 'none', lg: 'flex' }}
              >
                <Link
                  href="/plans"
                  type="link"
                  onScroll={onScroll}
                  active={router.pathname === '/plans'}
                >
                  Planes de viaje
                </Link>
                <Link
                  href="/about"
                  type="link"
                  onScroll={onScroll}
                  active={router.pathname === '/about'}
                >
                  Sobre nosotros
                </Link>

                <Link
                  href="/asesor"
                  type="link"
                  onScroll={onScroll}
                  active={router.pathname === '/asesor'}
                >
                  Conviertete en asesor
                </Link>
              </Stack>

              {/*<Box display={{ xs: 'none', lg: 'block' }}>
                <Button width="contained">Iniciar sesi??n</Button>
              </Box>*/}

              <Box
                display={{ xs: 'grid', lg: 'none' }}
                alignItems="center"
                onClick={() => setOpenMenu(true)}
              >
                <MenuIcon fontSize="large" className={classes.styledMenu} />
              </Box>
            </Stack>
          </MainLayout>
        </AppBar>
      </HideOnScroll>

      <Menu open={openMenu} onClose={() => setOpenMenu(false)} />
    </>
  );
};
