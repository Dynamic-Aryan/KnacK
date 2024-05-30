import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [NewPassword, setNewPassword] = useState('');
  return (
    <Container py={'16'} minH={'90vh'}>
      <form>
        <Heading
          textTransform={'uppercase'}
          children="Change Password"
          my={'16'}
          textAlign={['center', 'left']}
        />

        <VStack spacing={'8'}>
          <Input
            required
            id="password"
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
            placeholder="Your Old Password Was!!!"
            type="password"
            focusBorderColor="pink.500"
          />
          <Input
            required
            id="password"
            value={NewPassword}
            onChange={e => setNewPassword(e.target.value)}
            placeholder="Your New Password is!!!"
            type="password"
            focusBorderColor="pink.500"
          />
          <Button w={'full'} colorScheme="pink" type="submit">
            Change
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ChangePassword;
