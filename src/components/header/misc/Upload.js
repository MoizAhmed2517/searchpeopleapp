import React from 'react'
import { Typography, Button, Box } from '@mui/material'
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';

const upload = () => {
  return (
    <Box
    sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '30%',
            width: '80%',
            border: '2px dashed #3e4348',
            borderRadius: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
            transition: '0.3s',
            '&:hover': {
                border:'2px dashed #fff',
                backdropFilter: 'blur( 0.1px )',
                background: '#5256582e',
            },
    }}>
        <Button
            startIcon={<UploadFileOutlinedIcon sx={{ color: '#b0b8c4', mt: 0.3, mr: 0.5 }} />}
            component="label"
            sx={{
                width: '100%',
                height: '100%',
            }}
        >
            <Typography variant='h6' sx={{ textTransform: 'capitalize', mt: 0.3, textAlign: 'left', color: '#b0b8c4' }}>Upload documents</Typography>
            <input hidden accept='image/*' type='file' />
        </Button>
    </Box>
  )
}

export default upload