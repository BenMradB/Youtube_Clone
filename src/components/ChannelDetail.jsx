// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/FetchFromAPI';

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([])

  console.log(videos)

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then(data => setChannelDetail(data?.items[0]) );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(data => setVideos(data.items) );
  }, [id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(252,176,69,1) 0%, rgba(253,29,29,1) 0%, rgba(131,58,180,1) 98%)',
          zIndex: 10,
          height: '300px'
        }}/>

        <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
      </Box>

      <Box p='2'>
        <Box sx={{
          margin: '0 auto',
          display:'flex',
          alignItems:'center',
          justifyContent:'center'
        }} />
            <Videos videos={videos} flexBox={{display: 'flex', justifyContent: 'center'}}/>
      </Box>

    </Box>
  )
}

export default ChannelDetail