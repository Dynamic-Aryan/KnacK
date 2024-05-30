import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <Container py={'16'} minH={'90vh'}>
      <form>
        <Heading
          textTransform={'uppercase'}
          children="Update Profile"
          my={'16'}
          textAlign={['center', 'left']}
        />

        <VStack spacing={'8'}>
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            type="text"
            focusBorderColor="pink.500"
          />
          <Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            type="text"
            focusBorderColor="pink.500"
          />
          <Button w={'full'} colorScheme="pink" type="submit">
            Update now
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
