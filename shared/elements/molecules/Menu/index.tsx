import { Box, Modal, Typography, Stack } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { menuStyles } from './styles';
import { LogoDark } from '@/elements/atoms';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const Menu = ({ open, onClose }: Props) => {
  const { classes } = menuStyles({ open });

  const router = useRouter();

  const handleRedirectToHome = () => {
    router.replace('/');
  };

  const handleRedirectToAbout = () => {
    router.replace('/about');
  };

  const handleRedirectToAsesor = () => {
    router.replace('/asesor');
  };

  const handleRedirectToPlans = () => {
    router.replace('/plans');
  };

  return (
    <>
      <Modal open={open} onClose={onClose} closeAfterTransition>
        <Box className={classes.styledContainer}>
          <Box
            onClick={handleRedirectToHome}
            className={classes.styledLogo}
            component="a"
          >
            <LogoDark />
          </Box>
          <Stack direction="column" marginTop="1rem" spacing="">
            <Box
              component="a"
              className={classes.styledLink}
              onClick={() => {
                handleRedirectToPlans();
                onClose();
              }}
            >
              <Typography variant="body2">Planes de viaje</Typography>
            </Box>
            <Box
              component="a"
              className={classes.styledLink}
              onClick={() => {
                handleRedirectToAbout();
                onClose();
              }}
            >
              <Typography variant="body2">Sobre nosotros</Typography>
            </Box>
            <Box
              component="a"
              className={classes.styledLink}
              onClick={() => {
                handleRedirectToAsesor();
                onClose();
              }}
            >
              <Typography variant="body2">Conviertete en asesor</Typography>
            </Box>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};
