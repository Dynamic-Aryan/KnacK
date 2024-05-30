import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const ResetPassword = () => {

    const [password,setPassword]=useState('')
    const params=useParams();
    // console.log(params.token)

  return (
    <Container py={'16'} h={'90vh'} >
        <form>
            <Heading
              children='Update Password'
              my={'16'}
              textTransform={'uppercase'}
              textAlign={['center','left']}

            />
            <VStack spacing={'8'}>
            <Input
            required
            
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='New Password'
            type='password'
            focusBorderColor='green.500'
          />

          <Button type='submit' w={'full'} colorScheme='pink'>
           Update Password
          </Button>
            </VStack>
        </form>
    </Container>
  )
}


export default ResetPassword