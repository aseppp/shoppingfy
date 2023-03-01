'use client';

import React from 'react';
import { Box, Text, VStack, Icon } from '@chakra-ui/react';
import useSwr from 'swr';
import endpoint from '@/service/constUrl';
import { HiPlus } from 'react-icons/hi';

export default function Home() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSwr(
    `${endpoint.BASE_URL}/categories`,
    fetcher
  );

  console.log(data);
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

        <VStack ml='180px' mt='57px' spacing={10} alignItems='normal'>
          {data &&
            data.data.result.map((item, key) => (
              <VStack
                spacing={5}
                key={key}
                justifyContent='left'
                alignItems='normal'
              >
                <Text fontSize='18px' lineHeight='22px' fontWeight='600'>
                  {item.name}
                </Text>

                <Box display='flex' alignItems='center'>
                  {item.product.map((i, k) => (
                    <Box
                      key={k}
                      width='182px'
                      height='50px'
                      bg='white'
                      mr={5}
                      display='flex'
                      alignItems='center'
                      justifyContent='space-between'
                      flexWrap='wrap'
                      px={4}
                      boxShadow='md'
                      borderRadius='2xl'
                    >
                      <Text>{i.name}</Text>
                      <Icon
                        w={5}
                        h={5}
                        as={HiPlus}
                        cursor='pointer'
                        // onClick={() => console.log('Work')}
                      />
                    </Box>
                  ))}
                </Box>
              </VStack>
            ))}
        </VStack>
      </Box>
    </>
  );
}
