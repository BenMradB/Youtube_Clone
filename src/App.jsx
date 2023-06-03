// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail } from './components/index';

const App = () => (
      <Router>
        <Box sx={{ background: '#000' }}>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
            <Route path="/channel/:id" exact element={<ChannelDetail />} />
            <Route path="/video/:id" exact element={<VideoDetail />} />
          </Routes>
      </Box>
    </Router>
)

export default App