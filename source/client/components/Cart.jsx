'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';

const Cart = () => {
  const [showAdd, setShowAdd] = useState(false);

  if (showAdd) {
    return (
      <>
        <Box p={5} height='100vh' position='relative'>
          <Box mb='40px'>
            <Text fontSize='24px' lineHeight='30px' fontWeight='bold'>
              Add a new item
            </Text>
          </Box>

          <Box>
            <form>
              <VStack spacing={8}>
                <FormControl>
                  <FormLabel color='#34333A'>Name</FormLabel>
                  <Input
                    type='name'
                    py={7}
                    size='lg'
                    placeholder='Enter a name'
                    border='2px solid #BDBDBD'
                  />
                </FormControl>

                <FormControl>
                  <FormLabel color='#34333A'>Note (optional)</FormLabel>
                  <Textarea
                    placeholder='Here is a sample placeholder'
                    height='110px'
                    border='2px solid #BDBDBD'
                  />
                </FormControl>

                <FormControl
                  display='flex'
                  justifyContent='center'
                  flexDirection='column'
                >
                  <Text color='#34333A' mb={3}>
                    Image
                  </Text>

                  <Box
                    display='flex'
                    alignItems='center'
                    border='2px solid #BDBDBD'
                    rounded='lg'
                    height='61px'
                    p={3}
                  >
                    <FormLabel mb='50%' mt='50%' color='gray.500'>
                      Select image file
                    </FormLabel>
                    <Input
                      type='file'
                      height='61px'
                      multiple
                      width='100%'
                      srOnly
                      display='flex'
                      alignItems='center'
                    />
                  </Box>
                </FormControl>

                <FormControl>
                  <FormLabel color='#34333A'>Category</FormLabel>
                  <Select
                    placeholder='large size'
                    size='lg'
                    height='61px'
                    border='2px solid #BDBDBD'
                  >
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                  </Select>
                </FormControl>
              </VStack>
            </form>
          </Box>

          <Box
            position='absolute'
            bottom={10}
            right={0}
            left={0}
            w='100%'
            margin='auto'
            display='flex'
            justifyContent='center'
          >
            <Button
              onClick={() => setShowAdd(!showAdd)}
              mx={3}
              p={8}
              variant='ghost'
            >
              Cancel
            </Button>
            <Button mx={3} p={8} bg='#F9A109' color='white' borderRadius='12px'>
              Save
            </Button>
          </Box>
        </Box>
      </>
    );
  } else {
    return (
      <>
        <Box bg='#FFF0DE' w='100%' height='100vh' p={5}>
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
                <Button
                  onClick={() => setShowAdd(!showAdd)}
                  width='120px'
                  height='40px'
                >
                  Add item
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
};

export default Cart;
