import React from 'react';

import { Box, Typography } from '@mui/material';
import { globalStyles } from '@styles/globalStyles';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Button, SubTitle } from '@/elements/atoms';
import { Header, Hero, MainLayout } from '@/elements/organisms';

import Image from 'next/image';

import ImageSection2 from '/public/images/jpg/home-section-2.jpg';
import ImageSection3 from '/public/images/png/home-section-3.png';

const Home: NextPage = () => {
  const router = useRouter();

  const { classes } = globalStyles();

  const handleRedirectToPlans = () => {
    router.replace('/plans');
  };

  return (
    <>
      <Head>
        <title>North</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero>
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
          {/* <Box
          component="form"
          sx={{
            paddingY: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.8rem',
          }}
          noValidate
          autoComplete="off"
        >
          <Input label="Nombre" size="medium" />
          <Input label="Apellido" size="medium" />
          <Button buttonName="secondary" />
        </Box> */}

          <Box component="section">
            <Box marginTop="10.625rem" marginBottom="4.875rem">
              <SubTitle
                align="center"
                textParagraph="Planes destacados"
                textTitle="Conoce nuestros planes destacados"
              />
            </Box>
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
                el lugar de tus sueños"
              />

              <Typography marginTop="1.5rem">
                How travel can be one of the best tools for personal growth. We
                share some of the life lessons we’ve learned on the road that
                has provided us insight into empathy, mindfulness, meditation,
                comfort zones, two-way storytesting, being present, connection
                and more.
              </Typography>

              <Box
                marginTop="4.125rem"
                display="flex"
                // flexDirection={{ xs: 'column', sm: 'row' }}
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
                // flexDirection={{ xs: 'column', sm: 'row' }}
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
                  //boxShadow: '5px 24px 53px rgba(0, 0, 0, 0.25)',
                }}
                alt="image about north"
              />
            </Box>
          </Box>

          <Box component="section" marginY="10.625rem">
            <SubTitle
              align="center"
              textParagraph="Testimonios"
              textTitle="Lo que dicen nuestros clientes"
            />

            <Box>
              <Box component="figure" margin="0" position="relative">
                <Image
                  src={ImageSection3}
                  className={classes.styledGenericImage}
                  style={{
                    borderRadius: '3.125rem 0 3.125rem 0',
                    //boxShadow: '5px 24px 53px rgba(0, 0, 0, 0.25)',
                  }}
                  alt="image about north"
                />
              </Box>
            </Box>
          </Box>
        </MainLayout>
      </main>
    </>
  );
};

export default Home;
