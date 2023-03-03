'use client';

import React, { useContext } from 'react';
import Cart from './Cart';
import { Box } from '@chakra-ui/react';
import { FunctionBarContext } from '@/app/context';

const FunctionSidebar = () => {
  const [isOpen] = useContext(FunctionBarContext);

  return (
    <>
      <Box
        position='fixed'
        right={0}
        w={['84%', '400px']}
        ml={['70px', 0]}
        height='100vh'
        zIndex='10'
        bg='white'
      >
        <Box>{isOpen && <Cart />}</Box>
      </Box>
    </>
  );
};

export default FunctionSidebar;
