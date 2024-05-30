import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import introVideo from '../../../src/assets/videos/mp3.mp4';

const CoursePage = () => {

    const [lectureNumber,setLectureNumber]=useState(0);
    const lectures=[
        {
            _id:'sadasdsad1',
            title:'sample1',
            description:'sample secfdf ndfds fsf asd fads',
            video:{
                url:'sadsad',
            },
        },
        {
            _id:'sadasdsad2',
            title:'sample2',
            description:'sample secfdf ndfds fsf asd fads',
            video:{
                url:'sadsad',
            },
        },
        {
            _id:'sadasdsad3',
            title:'sample3',
            description:'sample secfdf ndfds fsf asd fads',
            video:{
                url:'sadsad',
            },
        },
    ]

  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width={'100%'}
          // autoPlay
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
        <Heading m='4' children={`#${lectureNumber+1} ${lectures[lectureNumber].title}`}/>
        <Heading m='4' children='Description'/>
        <Text m={'4'} children={lectures[lectureNumber].description} />
      </Box>
      <VStack>
        {
            lectures.map((element,index)=>(
                <button
                onClick={()=>setLectureNumber(index)}
                key={element._id}
                style={{
                    width:'100%',
                    padding:'1rem',
                    textAlign:'center',
                    margin:0,
                    borderBottom:'1px solid rgba(0,0,0,0.2)',

                }}
                >
                    <Text noOfLines={1}>
                        #{index+1} {element.title}
                    </Text>
                </button>
            ))
        }
      </VStack>
    </Grid>
  );
};

export default CoursePage;
