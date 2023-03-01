'use client';

import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <title>Shoppingfy</title>
      <Box>
        <Box ml='180px' w='100%'>
          <Box pt={5} pl={16} color='#34333A' display={['none', 'inline']}>
            <Text fontSize={['lg', '26px']}>
              <span className='heading'>Shoppingfy</span> allows you to take
              your
            </Text>
            <Text fontSize={['lg', '26px']}>shopping list wherever you go</Text>
          </Box>
        </Box>

        <Box ml='180px' h='100vh' mt='57px'>
          <Text>List Product</Text>
        </Box>
      </Box>
    </>
  );
}
