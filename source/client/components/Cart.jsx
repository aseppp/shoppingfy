'use client';

import React, { useState } from 'react';
import Form from './Form';
import Image from 'next/image';
import { Box, Button, Input, Text, useDisclosure } from '@chakra-ui/react';

const Cart = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [data] = useState(false);

  if (isOpen) {
    return <Form onClose={onClose} />;
  }

  if (!isOpen) {
    return (
      <>
        <Box
          bg='#FFF0DE'
          w='100%'
          height='100vh'
          p={5}
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
        >
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            pt={5}
          >
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
                <Image
                  width={300}
                  height={300}
                  src='/source.svg'
                  alt='source'
                />
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
                <Button onClick={onOpen} width='120px' height='40px'>
                  Add item
                </Button>
              </Box>
            </Box>
          </Box>

          <Box>
            {data !== null && (
              <Text fontWeight='bold' textAlign='center'>
                No items
              </Text>
            )}
          </Box>

          <Box width='100%' display='flex' justifyContent='end' mb='130px'>
            <Box width='250px'>
              <Image src='/human.svg' width={400} height={400} alt='human' />
            </Box>
          </Box>

          <Box position='absolute' bottom={0} width='100%' left={0}>
            <Box
              height='130px'
              bg='white'
              display='flex'
              justifyContent='center'
              alignItems='center'
              px={10}
              mt={3}
            >
              <Box display='flex' justifyContent='center' alignItems='center'>
                <Input type='text' placeholder='Enter name' size='lg' />
                <Button size='lg'>Save</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
};

export default Cart;
