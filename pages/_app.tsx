import type { EmotionCache } from '@emotion/react';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';

import NorthTheme from '../styles/theme';
import createEmotionCache from '../utility/createEmotionCache';
import { Header } from '@/elements/organisms';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={NorthTheme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
