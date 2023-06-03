// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button, Stack } from '@mui/material';
import { categories } from '../utils/constants'


// eslint-disable-next-line react/prop-types
const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction='row'
      sx={{
        mt: 2,
        overflowY: 'auto',
        height: {
          sx: 'auto',
          md: '95%',
        },
        flexDirection: {
          md: 'column',
        }
      }}
    >
      {
        categories.map((category) => (
            <Button 
              key={category.name}
              sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center !important',
                background: category.name === selectedCategory && '#FC1503 !important',
                borderRadius: '30px',
                color: '#FFF',
                gap: 3,
                mb: 2
              }}
              className='category-btn'
              onClick={() => setSelectedCategory(category.name)}
            >
              <span
                style={{
                  marginLeft: '10px',
                  color: category.name === selectedCategory ? '#FFF' : 'red'
                }}
              > {category.icon} </span>
              <span
                style={{
                  opacity: category.name === selectedCategory ? '1' : '0.8'
                }}
              > {category.name} </span>
            </Button>
          )
        )
      }
    </Stack>
  )
}

export default Sidebar