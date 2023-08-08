import { Typography, Box, Grid } from '@mui/material'
import React from 'react'
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import CardFeature from './header/misc/CardFeature';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DataSaverOnOutlinedIcon from '@mui/icons-material/DataSaverOnOutlined';
import SimCardDownloadOutlinedIcon from '@mui/icons-material/SimCardDownloadOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';

const Features = () => {
  return (
    <Box sx={{
        height: '30%',

    }}>

        <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "#5fa7ee", mt: 5 }}> <BubbleChartIcon /> Features</Typography>
        <Typography variant="h4" sx={{ fontWeight: 650, color: "#fff", mt: 2 }}>Scrubworx can revolutionize</Typography>
        <Typography variant="h4" sx={{ fontWeight: 650, color: "#3399ff" }}>your workflow</Typography>
        <Typography variant="body1" sx={{ fontWeight: 400, color: "#9da8b7", mt:1}}>Scrubworx is your one-stop solution, taking care of everything from uploading documents to extracting and compiling data</Typography>

        <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={6} >
                <CardFeature heading="Application Upload" content="Our advanced OCR technology converts documents into machine-readable text" icon={<CloudUploadOutlinedIcon sx={{ widht: 25, height: 25, color: '#66a7ff' }} />} />
            </Grid>
            <Grid item xs={6} >
                <CardFeature heading="Text Extraction" content="Our advanced OCR technology converts documents into machine-readable text" icon={<TextFieldsIcon sx={{ widht: 25, height: 25, color: '#66a7ff' }} />} />
            </Grid>
            <Grid item xs={6} mt={3}>
                <CardFeature heading="Name & Address Parsing" content="Utilize NLP latest entity techniques to extract and standardize applicant information" icon={<PersonOutlineOutlinedIcon sx={{ widht: 25, height: 25, color: '#66a7ff' }} />} />
            </Grid>
            <Grid item xs={6} mt={3}>
                <CardFeature heading="Pertinent information Integration" content="Seamlessly retrieve and update applicant phone numbers with our extensive informational  integration" icon={<DataSaverOnOutlinedIcon sx={{ widht: 25, height: 25, color: '#66a7ff' }} />} />
            </Grid>
            <Grid item xs={6} mt={3}>
                <CardFeature heading="Excel Compilation" content="Compile all applicants' information into a user-friendly Excel spreadsheet" icon={<SimCardDownloadOutlinedIcon sx={{ widht: 25, height: 25, color: '#66a7ff' }} />} />
            </Grid>
            <Grid item xs={6} mt={3}>
                <CardFeature heading="Batch Processing" content="Handle multiple applications efficiently with our automated batch processing" icon={<AccountTreeOutlinedIcon sx={{ widht: 25, height: 25, color: '#66a7ff' }} />} />
            </Grid>
        </Grid>

    </Box>
  )
}

export default Features