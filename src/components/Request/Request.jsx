import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Request = () => {

const [name,setName] =useState('')
const [email,setEmail]=useState('')
const [course,setCourse]=useState('')   
  return (
    <Container h={'92vh'}>
    <VStack h={'full'} justifyContent={'center'} spacing={'7'} >
        <Heading children='Request New Course'/>

        <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="abc"
              type="text"
              focusBorderColor="green.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type="email"
              focusBorderColor="green.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="course" children="Course" />
            <Textarea
              required
              id="message"
              value={course}
              onChange={e => setCourse(e.target.value)}
              placeholder="Explain the course...."
              
              focusBorderColor="green.500"
            />
          </Box>
        
          
          <Button my={'4'} colorScheme="pink" type="submit">
            Send Mail
          </Button>

          
          <Box my={'4'}>
            See available Courses!!{' '}
            <Link to={'/courses'}>
              <Button colorScheme="pink" variant={'link'}>
                Click
              </Button>{' '}
              here please
            </Link>
          </Box>
        </form>
    </VStack>


    </Container>
  )
}



export default Request