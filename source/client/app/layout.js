'use client';

import FunctionSidebar from '@/components/FunctionSidebar';
import { Sidebar } from '@/components/Sidebar';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { Quicksand } from 'next/font/google';
import { FunctionBarProvider } from './context';
import './globals.css';

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
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <FunctionBarProvider>
              <Sidebar />
              <FunctionSidebar />
            </FunctionBarProvider>

            {children}
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
