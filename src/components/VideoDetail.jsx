// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { fetchFromAPI } from '../utils/FetchFromAPI';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CommentIcon from '@mui/icons-material/Comment';

import { Videos } from './';

const VideoDetail = () => {
  const  { id } = useParams();
  const [video, setVideo] = useState(null);
  const [videos, setVideos] = useState([]);

  console.log(video);

  useEffect(() => {
    fetchFromAPI(`videos?part=sippet,statistics&id=${id}`).then(data => {
      setVideo(data.items[0]);
    });

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}`).then(data => {
      setVideos(data.items)
    })
  }, [id])
  
  if (!video?.snippet) return 'Loading ...';

  const { snippet: {  title, channelId, channelTitle}, statistics: { viewCount, likeCount, commentCount } } = video;
  
  return (  
    <Box minHeight='95vh' >
      <Stack direction={{
        xs: 'column',
        md: 'row',
        zIndex: -1
      }}
      >
        <Box flex={1}>
          <Box sx={{
            width: '100%',
            top: '86px'
          }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls />
            <Typography color='#FFF' variant='h5' fontWeight='bold' p={2}>
              {
                title
              }
            </Typography>

              <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{
                color: '#FFF',
                padding: '20px'
              }}
              px={1} py={2}
              >
                <Link to={`/channel/${channelId}`}>
                    <Typography variant={{
                      sm: 'subtitle1',
                      md: 'h6',
                    }}
                    sx={{ color: 'gray', fontWeight: 'bold', fontSize: '20px'}}
                    display={'flex'} justifyContent={'space-between'} alignItems={'center'}
                    >
                      <span> { channelTitle } </span>
                      <CheckCircle sx={{
                        fontSize: '20px',
                        color: 'gray',
                        ml: '5px'
                      }} />
                    </Typography>
                </Link>

                <Stack direction={'row'} gap={'20px'}>
                  <Typography variant='body1' sx={{ opacity: '0.7' }}>
                    <Typography variant='body1' display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={'12px'}>
                      <span>

                        {parseInt(viewCount).toLocaleString()}
                      </span>
                      <RemoveRedEyeIcon sx={{
                          fontSize: '25px'
                      }} />
                    </Typography>
                  </Typography>
                  <Typography variant='body1' sx={{ opacity: '0.7' }}>
                      <Typography variant='body1' display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={'12px'}>
                        <span>{parseInt(likeCount).toLocaleString()}</span>
                        <ThumbUpIcon sx={{
                          fontSize: '25px'
                      }}/>
                      </Typography>
                  </Typography>
                  <Typography variant='body1' sx={{ opacity: '0.7' }}>
                      <Typography variant='body1' display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={'12px'}>
                        <span>{parseInt(commentCount).toLocaleString()}</span>
                        <CommentIcon sx={{
                          fontSize: '25px'
                      }}/>
                      </Typography>
                  </Typography>
                </Stack>

              </Stack>

          </Box>
        </Box>
        <Box px={2} py={{
          md: 1,
          xs: 5
        }}
        justifyContent='center' alignItems='center' maxHeight={'650px'} overflow={'auto'}
        >
          <Typography fontWeight={'bold'} color={'#FFF'} marginBottom={'10px'} fontSize={'35px'} xs={{
            
          }}>
            Related Videos
          </Typography>
          <Videos videos={videos} direction='column' />
        </Box>
      </Stack>

    </Box>
  )
}

export default VideoDetail