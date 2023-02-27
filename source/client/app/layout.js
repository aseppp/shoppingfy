'use client';

import FunctionSidebar from '@/components/FunctionSidebar';
import { Sidebar } from '@/components/Sidebar';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import './globals.css';

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
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <Sidebar />
            <FunctionSidebar />
            {children}
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
