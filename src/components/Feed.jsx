// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState, useEffect } from 'react';
import { Stack, Box, Typography } from '@mui/material'
import { Sidebar, Videos } from './';

import { fetchFromAPI } from '../utils/FetchFromAPI';

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(
            `search?part=snippet&q=${selectedCategory}`
        ).then((data) => setVideos(data.items));
    }, [selectedCategory])

    return (
        <Stack sx={{
            flexDirection: {
                sx: 'column',
                md: 'row'
            }
        }}
        >
            <Box sx={{
                background: '#000',
                height: {
                    sx: 'auto',
                    md: '92vh'
                },
                borderRight: '1px solid #3d3d3d',
                px: {
                    sx: 0,
                    md: 2
                }
            }}
            >
                <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />

                <Typography className='copyright'
                    variant='body2' sx={{
                        mt: 1.5,
                        color: '#FFF'
                    }}
                >
                    Copyright &copy;2023 Benmrad Bilel
                </Typography>
            </Box>

            <Box p={2} sx={{
                overflowY: 'auto', height: '90vh', flex: 2
            }}>
                <Typography variant='h4' fontWeight='bold' marginBottom={2} sx={{
                    color: '#FFF'
                }}>
                    {selectedCategory} <span style={{ color: 'red' }}> videos </span>
                </Typography>

                <Videos videos={videos} />
            </Box>
        </Stack>
    )
}

export default Feed