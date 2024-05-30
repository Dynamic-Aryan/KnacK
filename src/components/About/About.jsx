import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import introVideo from '../../../src/assets/videos/mp3.mp4';
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndCondition from '../../assets/docs/termsAndCondition'

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar
        src="https://avatars.githubusercontent.com/u/97832985?v=4"
        boxSize={['40', '48']}
      />
      <Text children="Co-Founder" opacity={0.7} />
    </VStack>
    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Aryan Pachchigar" size={['md', 'xl']} />
      <Text
        textAlign={['center', 'left']}
        children={`Hi I am a Web Developer.
     My mission is to make this app very useful.`}
      />
    </VStack>
  </Stack>
);

const VideoPlayer = () => (
  <Box>
    <video
      // autoPlay
      muted
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      src={introVideo}
    ></video>
  </Box>
);
const TandC=({termsAndCondition})=>(
    <Box>
        <Heading
           size={'md'}
           children='Terms & Condition'
           textAlign={['center','left']}
           my={'4'}


        />
        <Box h={'sm'} p={'4'} overflowY={'scroll'}>
            <Text
              fontFamily={'heading'}
              letterSpacing={'widest'}
              textAlign={['center','left']}
            >{termsAndCondition}</Text>
            <Heading
              my={'4'}
              size={'xs'}
              children='Refund only applicable for cancellation within 7days.'

            />
        </Box>
    </Box>
)
const About = () => {
  return (
    <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m={'8'} direction={['column', 'row']} alignItems={'center'}>
        <Text fontFamily={'cursive'} m={'8'} textAlign={['center', 'left']}>
          Here is a video streaming platform with some premium courses available
          only for premium users.
        </Text>
        <Link to={'/subscribe'}>
          <Button variant={'ghost'} colorScheme="pink">
            Checkout our current and upcoming Plans
          </Button>
        </Link>
      </Stack>

      <VideoPlayer />
       
     <TandC termsAndCondition={termsAndCondition} />
      <HStack my={'4'} padding={'4'}>
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily={'sans-serif'}
          textTransform={'uppercase'}
          children={'Payment is secured by Razorpay'}
        />
      </HStack>
    </Container>
  );
};

export default About;
