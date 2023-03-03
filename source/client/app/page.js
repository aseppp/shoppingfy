'use client';

import React, { useContext } from 'react';
import { Box, Text, VStack, Icon } from '@chakra-ui/react';
import useSwr from 'swr';
import endpoint from '@/service/constUrl';
import { HiPlus } from 'react-icons/hi';
import { DetailSidebarContext, FunctionBarContext } from './context';

export default function Home() {
  const [isOpen, setIsOpen] = useContext(FunctionBarContext);
  const [isOpenDetail, setIsOpenDetail] = useContext(DetailSidebarContext);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data } = useSwr(`${endpoint.BASE_URL}/categories`, fetcher);

  return (
    <>
      <title>Shoppingfy</title>

      <Box ml={['65px', '180px']}>
        <Box pt={5} pl={16} color='#34333A' display={['none', 'inline']}>
          <Text fontSize={['lg', '26px']}>
            <span className='heading'>Shoppingfy</span> allows you to take your
          </Text>
          <Text fontSize={['lg', '26px']}>shopping list wherever you go</Text>
        </Box>
      </Box>

      <VStack
        ml={['65px', '180px']}
        mt={['0', '57px']}
        mr={isOpen || isOpenDetail ? [0, '400px'] : 0}
        pt={['20px', 0]}
        spacing={[10, 16]}
        alignItems='normal'
      >
        {data &&
          data.data.result.map((item, key) => (
            <VStack key={key} justifyContent='left' alignItems='normal'>
              <Text fontSize='18px' lineHeight='22px' fontWeight='600'>
                {item.name}
              </Text>

              <Box display='flex' alignItems='center' flexWrap='wrap'>
                {item.product.map((i, k) => (
                  <Box
                    key={k}
                    width='182px'
                    height='60px'
                    bg='white'
                    mr={5}
                    mt={5}
                    px={4}
                    gap={1}
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                    boxShadow='md'
                    borderRadius='2xl'
                  >
                    <Text
                      fontWeight='600'
                      onClick={() => {
                        setIsOpenDetail(!isOpenDetail), setIsOpen(false);
                      }}
                      cursor='pointer'
                    >
                      {i.name}
                    </Text>
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
    </>
  );
}
