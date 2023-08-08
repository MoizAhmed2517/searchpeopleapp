import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

const CardFeature = (props) => {
  return (
    <Box>
        <Grid container spacing={2}>

            <Grid item xs={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

                <Box sx={{
                    width: 35,  // Set width
                    height: 35, // Set height
                    borderRadius: '50%',
                    border: '1px solid #9da8b7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#09151e'
                }}>
                    {props.icon}
                </Box>

            </Grid>

            <Grid item xs={10}>

                <Typography variant='body2' sx={{ fontWeight: 600, color: '#fff' }}>{props.heading}</Typography>
                <Typography variant='caption' sx={{ fontWeight: 400, color: '#9da8b7' }}>{props.content}</Typography>

            </Grid>

        </Grid>
    </Box>
  )
}

export default CardFeature