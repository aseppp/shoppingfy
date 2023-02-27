import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Cart from './Cart';

const FunctionSidebar = () => {
  return (
    <>
      <Box
        position='fixed'
        right={0}
        w={['84%', '400px']}
        ml={['70px', 0]}
        height='100vh'
        zIndex='10'
      >
        <Box>
          <Cart />
        </Box>
      </Box>
    </>
  );
};

export default FunctionSidebar;
