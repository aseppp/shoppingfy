'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BsListStars } from 'react-icons/bs';
import { MdOutlineHistory } from 'react-icons/md';
import { CgShoppingCart } from 'react-icons/cg';
import { BiChart } from 'react-icons/bi';
import { Box, Icon } from '@chakra-ui/react';

export const Sidebar = () => {
  return (
    <>
      <Box w={['60px', '100px']} position='fixed' left={0} bg='white'>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          flexDirection='column'
          height='100vh'
          py={5}
          zIndex='20'
        >
          <Box w='50px'>
            <Image width={500} height={500} src='/logo.svg' alt='logo' />
          </Box>

          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            position='relative'
            gap={['35px', '67px']}
          >
            <Link href='/'>
              <Icon w={8} h={8} as={BsListStars} />
            </Link>
            <Link href='/'>
              <Icon w={8} h={8} as={MdOutlineHistory} />
            </Link>
            <Link href='/'>
              <Icon w={8} h={8} as={BiChart} />
            </Link>
          </Box>

          <Box
            w='50px'
            height='50px'
            bg='#F9A109'
            borderRadius='50%'
            display='flex'
            justifyContent='center'
            alignItems='center'
            p={2}
          >
            <Link href='/cart'>
              <Icon
                w={7}
                h={7}
                as={CgShoppingCart}
                display='flex'
                justifyContent='center'
                alignItems='center'
                color='white'
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};
