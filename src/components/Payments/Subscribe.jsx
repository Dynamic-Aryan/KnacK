import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const Subscribe = () => {
  return (
    <Container h="90vh" p="16">
      <Heading children="Welcome" my={'8'} textAlign={'center'} />
      <VStack
        boxShadow={'lg'}
        alignItems={'stretch'}
        borderRadius={'lg'}
        spacing={'0'}
      >
        <Box bg={'pink.500'} p="4" css={{ borderRadius: '8px 8px 0 0' }}>
          <Text color={'black'} children={`Best Seller - Rs 449`} />
        </Box>
        <Box p={'4'}>
          <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
            <Text
             
              children={`Join our pro pack and get all conetnts hereby`}
            />
            <Heading size={'md'} children={'Rs 449 Only'} />
          </VStack>

          <Button my={'8'} w={'full'} colorScheme="pink">
            Buy Now
          </Button>
        </Box>
        <Box
          bg={'blackAlpha.600'}
          p={'4'}
          css={{ borderRadius: '0 0 8px 8px' }}
        >
          <Heading
            color={'white'}
            textTransform={'uppercase'}
            size={'sm'}
            children={'100% refund at cancellation'}
          />

          <Text fontSize={'xs'} color={'white'} children={'Terms & Conditions Apply'}/>
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
