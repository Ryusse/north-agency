import React from 'react';

import { Box, Typography, Stack } from '@mui/material';
import { globalStyles } from '@styles/globalStyles';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Button, SubTitle } from '@/elements/atoms';
import { Feedback } from '@/elements/molecules';
import { Hero, ListPlans, MainLayout } from '@/elements/organisms';

import HeroBackground from '/public/images/jpg/home-background.jpg';
import ImageSection2 from '/public/images/jpg/home-section-2.jpg';
import ImageSection3 from '/public/images/png/home-section-3.png';
import ImageSection4 from '/public/images/jpg/home-section-4.jpg';

const Home: NextPage = () => {
  const router = useRouter();

  const { classes } = globalStyles();

  const handleRedirectToPlans = () => {
    router.replace('/plans');
  };

  const handleRedirectToAsesor = () => {
    router.replace('/asesor');
  };

  return (
    <>
      <Head>
        <title>North | Agencia de viajes</title>
        <meta name="description" content="Agencia de viajes North" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero backgroundImage={HeroBackground.src}>
          <Typography
            variant="h1"
            textAlign={{
              xs: 'center',
              lg: 'left',
            }}
            color="common.white"
            fontWeight={700}
          >
            Encuentra los <br className={classes.styledBreak} />
            mejores lugares para <br className={classes.styledBreak} />
            estar en familia
          </Typography>
          <Box
            marginTop={7}
            display="flex"
            justifyContent={{ xs: 'center', lg: 'left' }}
            onClick={handleRedirectToPlans}
          >
            <Button buttonName="primary" width="contained">
              Ver planes
            </Button>
          </Box>
        </Hero>

        <MainLayout>
          <Box component="section">
            <Box marginTop="10.625rem" marginBottom="4.875rem">
              <SubTitle
                align="center"
                textParagraph="Planes destacados"
                textTitle="Conoce nuestros planes destacados"
              />
            </Box>

            <ListPlans />
          </Box>

          <Box
            component="section"
            display="flex"
            flexDirection={{ xs: 'column', lg: 'row' }}
            justifyContent="space-between"
            gap="5rem"
            marginY="10.625rem"
          >
            <Box maxWidth={{ lg: '36rem' }}>
              <SubTitle
                align="left"
                textParagraph="Punto de viaje"
                textTitle="Te ayudamos a encontrar 
                el lugar de tus sue??os"
              />

              <Typography marginTop="1.5rem">
                How travel can be one of the best tools for personal growth. We
                share some of the life lessons we???ve learned on the road that
                has provided us insight into empathy, mindfulness, meditation,
                comfort zones, two-way storytesting, being present, connection
                and more.
              </Typography>

              <Box
                marginTop="4.125rem"
                display="flex"
                justifyContent="start"
                gap={{ xs: '1rem', md: '5rem' }}
              >
                <Box width={{ xs: '100%', sm: '11rem' }}>
                  <Typography
                    variant="subtitle1"
                    marginTop=""
                    color="primary.main"
                    fontWeight={700}
                  >
                    100+
                  </Typography>
                  <Typography
                    marginTop="0.625rem"
                    color="primary.grey.900"
                    fontWeight={600}
                  >
                    Planes de viaje
                  </Typography>
                </Box>

                <Box width={{ xs: '100%', sm: '11rem' }}>
                  <Typography
                    variant="subtitle1"
                    marginTop=""
                    color="primary.main"
                    fontWeight={700}
                  >
                    20+
                  </Typography>
                  <Typography
                    marginTop="0.625rem"
                    color="primary.grey.900"
                    fontWeight={600}
                  >
                    Convenios
                  </Typography>
                </Box>
              </Box>

              <Box
                marginTop="4rem"
                display="flex"
                justifyContent="start"
                gap={{ xs: '1rem', md: '5rem' }}
              >
                <Box width={{ xs: '100%', sm: '11rem' }}>
                  <Typography
                    variant="subtitle1"
                    marginTop=""
                    color="primary.main"
                    fontWeight={700}
                  >
                    50+
                  </Typography>
                  <Typography
                    marginTop="0.625rem"
                    color="primary.grey.900"
                    fontWeight={600}
                  >
                    Transportes
                  </Typography>
                </Box>

                <Box width={{ xs: '100%', sm: '11rem' }}>
                  <Typography
                    variant="subtitle1"
                    marginTop=""
                    color="primary.main"
                    fontWeight={700}
                  >
                    1000+
                  </Typography>
                  <Typography
                    marginTop="0.625rem"
                    color="primary.grey.900"
                    fontWeight={600}
                  >
                    Clientes satisfechos
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              component="figure"
              margin="0"
              position="relative"
              borderRadius="3.125rem 0 3.125rem 0"
              display="grid"
              boxShadow="5px 24px 53px rgba(0, 0, 0, 0.25)"
            >
              <Image
                src={ImageSection2}
                className={classes.styledGenericImage}
                style={{
                  borderRadius: '3.125rem 0 3.125rem 0',
                }}
                alt="image about north"
              />
            </Box>
          </Box>

          <Box component="section" marginY="10.625rem">
            <Box marginBottom="4.875rem">
              <SubTitle
                align="center"
                textParagraph="Testimonios"
                textTitle="Lo que dicen nuestros clientes"
              />
            </Box>

            <Stack
              direction={{ xs: 'column', lg: 'row' }}
              justifyContent="space-between"
              alignItems="center"
              spacing="5rem"
            >
              <Box component="figure" margin="0" position="relative">
                <Image src={ImageSection3} alt="feedback image" />
              </Box>

              <Stack spacing="2.5rem" width={{ lg: '719.45px' }}>
                <Box>
                  <Feedback position="right" />
                </Box>
                <Box>
                  <Feedback backgroundColor="red" position="left" />
                </Box>
                <Box>
                  <Feedback position="right" />
                </Box>
              </Stack>
            </Stack>
          </Box>

          <Box component="section" marginY="10.625rem" position="relative">
            <Box component="figure" margin="0" display="grid">
              <Image src={ImageSection4} alt="feedback image" />
            </Box>

            <Box
              position="absolute"
              top="50%"
              left="50%"
              style={{
                transform: 'translate(-50%,-50%)',
              }}
            >
              <Typography
                variant="subtitle1"
                marginBottom="2.5rem"
                color="#fff"
                fontWeight={600}
              >
                ??Quieres convertirete en asesor de venta?
              </Typography>
              <Box
                component="a"
                marginX="auto"
                display="grid"
                onClick={handleRedirectToAsesor}
              >
                <Button
                  buttonName="terciary"
                  width="contained"
                  position="center"
                >
                  Postula ahora
                </Button>
              </Box>
            </Box>
          </Box>
        </MainLayout>
      </main>
    </>
  );
};

export default Home;
