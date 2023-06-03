// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material'
import { Videos } from './';

import { fetchFromAPI } from '../utils/FetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  console.log(searchTerm);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
        .then(data => setVideos(data.items))
        .catch(err => console.log(err));
      
  }, [searchTerm])

  return (
    <Box p={2} sx={{
      overflowY: 'auto', height: '90vh', flex: 2
    }}>
      <Typography variant='h4' fontWeight='bold' marginBottom={2} sx={{
        color: '#FFF'
      }}>
        Search Results For :  <span style={{ color: 'red' }}> {searchTerm} </span> videos
      </Typography>

      <Videos videos={videos} flexBox={{display: 'flex', justifyContent: 'center'}} />
    </Box>
  )
}

export default SearchFeed