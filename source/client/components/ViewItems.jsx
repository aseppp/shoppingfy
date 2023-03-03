import { DetailSidebarContext } from '@/app/context';
import { Box, Button, Icon, Image, VStack, Text } from '@chakra-ui/react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import React, { useContext } from 'react';
import useSwr from 'swr';
import endpoint from '@/service/constUrl';

const ViewItems = () => {
  const [isOpenDetail, setIsOpenDetail] = useContext(DetailSidebarContext);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data } = useSwr(
    `${endpoint.BASE_URL}/product/${'clenmmcpp00021imdxf4zkp98'}`,
    fetcher
  );

  console.log(data);

  return (
    <>
      <Box p={5}>
        <Box>
          <Button
            variant='link'
            onClick={() => setIsOpenDetail(!isOpenDetail)}
            color='#F9A109'
          >
            <Icon w={8} h={8} as={IoIosArrowRoundBack} mx={2} color='#F9A109' />
            back
          </Button>
        </Box>

        <Box>
          <VStack spacing={4} justifyContent='left' alignItems='normal'>
            <Box mt={5}>
              <Image
                src={`${endpoint.IMAGE_URL}/${data?.data?.result?.image}`}
                display='flex'
                m='auto'
                alt='items'
                borderRadius='25px'
              />
            </Box>

            <Box>
              <Text color='#C1C1C4' fontSize='15px'>
                name
              </Text>
              <Text fontSize='16px' fontWeight={500} lineHeight='30px'>
                {data?.data?.result?.name}
              </Text>
            </Box>

            <Box>
              <Text color='#C1C1C4' fontSize='15px'>
                category
              </Text>
              <Text fontSize='16px' fontWeight={500} lineHeight='30px'>
                {data?.data?.result?.category?.name}
              </Text>
            </Box>

            <Box>
              <Text color='#C1C1C4' fontSize='15px'>
                note
              </Text>
              <Text fontSize='16px' fontWeight={500} lineHeight='30px'>
                {data?.data?.result?.note}
              </Text>
            </Box>
          </VStack>

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
            <Button mx={3} p={8} variant='ghost'>
              Delete
            </Button>
            <Button mx={3} p={8} bg='#F9A109' color='white' borderRadius='12px'>
              Add to list
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ViewItems;
