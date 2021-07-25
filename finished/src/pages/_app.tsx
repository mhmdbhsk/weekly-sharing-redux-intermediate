import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import theme from '../theme/index';
import FontFace from '../theme/fonts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <FontFace />
    </ChakraProvider>
  );
}

export default MyApp;
