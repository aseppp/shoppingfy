'use client';

import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import Image from 'next/image';

const Cart = () => {
  return (
    <>
      <Box bg='#FFF0DE' w='100%' height='100vh' p={5}>
        <Box display='flex' alignItems='center' justifyContent='center' pt={5}>
          <Box
            bg='#80485B'
            w='309px'
            height='129px'
            borderRadius='24px'
            position='relative'
          >
            <Box
              w='80px'
              height='80px'
              placeItems='flex-end'
              top={-5}
              position='absolute'
            >
              <Image width={300} height={300} src='/source.svg' alt='source' />
            </Box>

            <Box float='right' alignItems='center' mt='5%' mb='5%' mr={10}>
              <Box mb={2}>
                <Text color='white' fontSize='16px' fontWeight='700'>
                  Didn't find what you
                </Text>
                <Text color='white' fontSize='16px' fontWeight='700'>
                  need?
                </Text>
              </Box>
              <Button width='120px' height='40px'>
                Add item
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Cart;
