// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Stack } from '@mui/material';

import { logo } from '../utils/constants'
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
    return (
        <Stack direction="row" justifyContent="space-between" alignItems="center" p={2} sx={{ background: '#000', position: 'sticky', top: 0 }}>
            <Link to='/' style={{ display: 'flex', alignItems: 'center'}}>
                <img src={logo} alt="logo" height={45} />
            </Link>
            <SearchBar />
        </Stack>
    )
}

export default Navbar