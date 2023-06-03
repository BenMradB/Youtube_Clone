// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => {
    console.log(channelDetail)
    return (
        <Box
            sx={{
                boxShadow: 'none',
                borderRadius: '20px',
                width: {
                    xs: '352px',
                    md: '300px'
                },
                height: '326px',
                margin: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                marginTop
            }}
        >
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        color: 'white'
                    }}
                >
                    <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture } 
                        alt={channelDetail?.snippet?.title}
                        sx={{
                            height: '180px',
                            width: '180px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            mb: 2,
                            border: '1px solid #E3E3E3'
                        }}
                    />

                    <Typography variant='h6' sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        {channelDetail?.snippet?.title}
                        <CheckCircle sx={{
                            fontSize: 15,
                            color: 'gray',
                            ml: '5px'
                        }}/>
                    </Typography>

                    {
                        channelDetail?.statistics?.subscriberCount &&
                        <Typography>
                            {
                                parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString() 
                            }
                            Subscribers
                        </Typography>
                    }

                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard