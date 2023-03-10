'use client';

import FunctionSidebar from '@/components/FunctionSidebar';
import { Sidebar } from '@/components/Sidebar';
import { CacheProvider } from '@chakra-ui/next-js';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { Quicksand } from 'next/font/google';
import { Provider } from 'react-redux';
import {
  DetailSidebarProvider,
  FunctionBarProvider,
  IdItemsProvider,
} from './context';
import './globals.css';
import { store } from './redux/store';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#FAFAFE', '#1d1d1d')(props),
    },
  }),
};

const theme = extendTheme({ styles, config });

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body className={quicksand.className}>
        <Provider store={store}>
          <CacheProvider>
            <ChakraProvider theme={theme}>
              <FunctionBarProvider>
                <IdItemsProvider>
                  <DetailSidebarProvider>
                    <Sidebar />
                    <FunctionSidebar />
                    <Box>{children}</Box>
                  </DetailSidebarProvider>
                </IdItemsProvider>
              </FunctionBarProvider>
            </ChakraProvider>
          </CacheProvider>
        </Provider>
      </body>
    </html>
  );
}
