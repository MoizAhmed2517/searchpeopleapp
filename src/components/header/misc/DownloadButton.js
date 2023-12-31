import React, {useState} from 'react';
import { Typography, Button } from '@mui/material'

const DownloadButton = (props) => {

  const handleResponse = (event) => {

    props.trig(true)
    props.off(true)

  }
  return (
    <Button 
      onClick={handleResponse}
      disabled={props.on}
      sx={{
          border: '1px solid #fff',
          borderShadow: "0px 2px 4px rgba(11, 13, 14, 0.8), inset 0px 4px 8px rgba(153, 204, 243, 0.4)",
          borderRadius: '10px',
          color: '#fff',
          '&:hover': { color: "#3399ff" },
          '&.Mui-disabled': {color: '#3e4348', border: "1px solid #3e4348"}
      }}
    >
        <Typography variant='caption' sx={{ mt: 0.3, textTransform: 'lowercase' }}>{props.fieldName}</Typography>
    </Button>
  )
}

export default DownloadButton