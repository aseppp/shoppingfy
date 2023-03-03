'use client';

import React, { useContext } from 'react';
import Cart from './Cart';
import { Box } from '@chakra-ui/react';
import { DetailSidebarContext, FunctionBarContext } from '@/app/context';
import ViewItems from './ViewItems';

const FunctionSidebar = () => {
  const [isOpen] = useContext(FunctionBarContext);
  const [isShow] = useContext(DetailSidebarContext);

  if (isOpen) {
    return (
      <>
        <Box
          position='fixed'
          right={isOpen ? 0 : '-100%'}
          w={['84%', '400px']}
          ml={['70px', 0]}
          height='100vh'
          bg='white'
        >
          <Box>{isOpen && <Cart />}</Box>
        </Box>
      </>
    );
  }

  if (isShow) {
    return (
      <>
        <Box
          position='fixed'
          right={isShow ? 0 : '-100%'}
          w={['84%', '400px']}
          ml={['70px', 0]}
          height='100vh'
          bg='white'
        >
          <Box>{isShow && <ViewItems />}</Box>
        </Box>
      </>
    );
  }
};

export default FunctionSidebar;
