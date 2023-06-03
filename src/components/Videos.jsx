// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './'

// eslint-disable-next-line react/prop-types
const Videos = ({ videos, flexBox, direction }) => {
    return (
        <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='flex-start' gap={2} id='stack' sx={{
            display: flexBox?.display,
            justifyContent: flexBox?.justifyContent,
            pb: 2
        }}>
            {
                // eslint-disable-next-line react/prop-types
                videos.map((item, index) => {
                    return (
                        <Box key={index}>
                            {item.id.videoId !== undefined && <VideoCard video={item} />}
                            {item.id.channelId !== undefined && <ChannelCard channelDetail={item} />}
                        </Box>
                    )
                })
            }
        </Stack>
    )
}

export default Videos