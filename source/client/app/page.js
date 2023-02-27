'use client';

import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <title>Shoppingfy</title>

      <Box ml='120px' height='100vh'>
        <Box pt={5} pl={16} color='#34333A'>
          <Text fontSize={['lg', '26px']}>
            <span className='heading'>Shoppingfy</span> allows you to take your
          </Text>
          <Text fontSize={['lg', '26px']}>shopping list wherever you go</Text>
        </Box>
      </Box>
    </>
  );
}
