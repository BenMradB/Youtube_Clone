// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    }

    return (
        <Paper
            component='form'
            onSubmit={handleSubmit}
            sx={{
                borderRadius: '8px',
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 }
            }}
        >
            <input
                className='search-bar'
                placeholder='Search ...'
                value={searchTerm}
                onChange={(event) => { setSearchTerm(event.target.value); }}
                style={{
                    fontSize: '15px',
                    fontWeight: 'bold'
                }}
            />
            <IconButton
                type='submit'
                sx={{
                    p: '10px',
                    color: 'red'
                }}
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchBar