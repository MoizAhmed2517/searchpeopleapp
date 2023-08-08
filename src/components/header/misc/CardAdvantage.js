import { Box, Typography } from '@mui/material'
import React from 'react'


const CardAdvantage = (props) => {
  return (
    <Box sx={{ 
        p: 3,
        height: 'auto',
        background: '#131d26',
        border: '1px solid #2f3a46',
        borderRadius: '10px',
     }}>

        <Box sx={{

            height: 10,
            width: 10,
            boxShadow: '0px 1px 6px 0px rgba(0, 89, 178, 1), 0px 2px 30px 0px rgba(0, 0, 0, 0.25) inset',
            borderRadius: '5px',
            border: '1px solid #3399ff',
            p: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#003a75',
        }}>
            {props.icon}
        </Box>

        <Typography variant='body2' sx={{ mt: 2, fontWeight: 600, color: '#fff' }}>{props.heading}</Typography>
        <Typography variant="caption"  sx={{ mt: 0.5, fontWeight: 400, color: '#9da8b7' }}>{props.content}</Typography>
        
    </Box>
  )
}

export default CardAdvantage