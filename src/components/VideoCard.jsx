// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoChannelUrl, demoVideoTitle, demoVideoUrl, demoChannelTitle } from '../utils/constants';
import ChannelDetail from './ChannelDetail';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    return (
        <Card sx={{
            width: {
                md: '300px',
                xs: '100%'
            },
            boxShadow: 'none',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
        }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{
                        width: '300px',
                        height: '180px',
                        borderTopLeftRadius: '10px',
                        borderTopRightRadius: '10px',
                    }}
                />
            </Link>
            <CardContent
                sx={{
                    background: '#1e1e1e',
                    height: '106px',
                    marginTop: '-6px'
                }}
            >
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
                        {
                            snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)
                        }
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2' fontWeight='bold' color='gray'
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        {
                            snippet?.channelTitle || demoChannelTitle
                        }
                        <CheckCircle sx={{
                            fontSize: 12,
                            color: 'gray',
                            ml: '5px'
                        }}/>
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard