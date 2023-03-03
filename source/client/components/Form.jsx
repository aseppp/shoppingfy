import {
  Alert,
  AlertIcon,
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
import React from 'react';
import { useForm } from 'react-hook-form';
import useSwr from 'swr';
import useSWRMutation from 'swr/mutation';
import endpoint from '@/service/constUrl';

const Form = ({ onClose }) => {
  const { handleSubmit, register, watch } = useForm();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data } = useSwr(`${endpoint.BASE_URL}/categories`, fetcher);
  const { trigger, isMutating } = useSWRMutation(
    `${endpoint.BASE_URL}/product`,
    sendRequest
  );

  const onSubmit = () => {
    const formData = new FormData();
    formData.append('name', watch('name'));
    formData.append('note', watch('note'));
    formData.append('categoryId', watch('category'));
    formData.append('image', watch('image')[0]);

    trigger(formData);
  };

  return (
    <>
      <Box p={5} height='100vh' position='relative'>
        <Box mb='40px'>
          <Text fontSize='24px' lineHeight='30px' fontWeight='bold'>
            Add a new item
          </Text>
        </Box>

        <Box>
          {isMutating && (
            <Alert status='success' variant='solid' mb={3}>
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={8}>
              <FormControl>
                <FormLabel color='#34333A'>Name</FormLabel>
                <Input
                  {...register('name')}
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
                  {...register('note')}
                  placeholder='Enter a note'
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
                    {...register('image')}
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
                  {...register('category')}
                  py={7}
                  size='lg'
                  placeholder='Select category'
                >
                  {data.data.result.map((i, k) => (
                    <option key={k} value={i.id}>
                      {i.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
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
              <Button onClick={onClose} mx={3} p={8} variant='ghost'>
                Cancel
              </Button>
              <Button
                type='submit'
                mx={3}
                p={8}
                bg='#F9A109'
                color='white'
                borderRadius='12px'
              >
                Save
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Form;

async function sendRequest(url, { arg }) {
  return fetch(url, {
    method: 'POST',
    body: arg,
  });
}
