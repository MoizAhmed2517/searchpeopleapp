import { Box, Typography, Grid } from '@mui/material'
import React from 'react'
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import CardAdvantage from './header/misc/CardAdvantage';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import MobileFriendlyOutlinedIcon from '@mui/icons-material/MobileFriendlyOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';

const Advantages = () => {
  return (
    <Box>

        <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "#5fa7ee", mt: 5 }}> <BubbleChartIcon /> Why Choose Scrubworx?</Typography>
        <Typography variant="h4" sx={{ fontWeight: 650, color: "#fff", mt: 2 }}>A <span style={{ color: "#3399ff" }}>delightful experience</span></Typography>
        <Typography variant="h4" sx={{ fontWeight: 650, color: "#fff" }}>waiting for you. Get <span style={{ color: "#3399ff" }}> premium access </span> today!</Typography>

        <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={3}>
                <CardAdvantage heading="Efficiency" content="Reduce manual work and increase productivity." icon={<HandymanOutlinedIcon sx={{ color: '#fff' }} />} />
            </Grid>
            <Grid item xs={3}>
                <CardAdvantage heading="Accuracy" content="Ensure precise data extraction and compilation." icon={<AdsClickOutlinedIcon sx={{ color: '#fff' }} />} />
            </Grid>
            <Grid item xs={3}>
                <CardAdvantage heading="Security" content="Comply with data security and privacy regulations." icon={<ShieldOutlinedIcon sx={{ color: '#fff' }} />} />
            </Grid>
            <Grid item xs={3}>
                <CardAdvantage heading="User-Friendly" content="Intuitive interface for administrators to monitor and manage processing." icon={<MobileFriendlyOutlinedIcon sx={{ color: '#fff' }} />} />
            </Grid>
        </Grid>

    </Box>
  )
}

export default Advantages