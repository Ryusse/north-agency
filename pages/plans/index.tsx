import { Typography } from '@mui/material';
import { NextPage } from 'next';
import Head from 'next/head';

import { Hero } from './../../shared/elements/organisms/Hero/index';
import { MainLayout } from '@/elements/organisms';

const Plans: NextPage = () => {
  return (
    <>
      <Head>
        <title>North: Planes</title>
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
            Conoce nuestros planes de viaje
          </Typography>
        </Hero>

        <MainLayout>
          <div>
            <h1>Body</h1>
          </div>
        </MainLayout>
      </main>
    </>
  );
};

export default Plans;
