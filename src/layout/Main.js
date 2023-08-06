import { Container, Grid, Typography, Box, Button, Stack } from '@mui/material'
import React from 'react'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import Upload from '../components/header/misc/Upload';
import DownloadButton from '../components/header/misc/DownloadButton';


const Main = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 0, height: '80vh', display: 'flex', flexDirection: 'column' }}>
        <Grid container spacing={2} sx={{ flex: '1' }}>

            <Grid item xs={12} md={6}>
                <Box 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'column',
                        justifyContent: 'center', 
                        height: '100%', // adjust as needed
                        paddingRight: 9,
                    }}
                >
                    <Typography variant="h2" sx={{ fontWeight: 650, color: '#3399ff' }}>Search faster</Typography>
                    <Typography variant="h2" sx={{ fontWeight: 800, color: "#fff" }}>with intuitive</Typography>
                    <Typography variant="h2" sx={{ fontWeight: 800, color: "#fff" }}>Scraping AI tools</Typography>
                    <Typography variant='body1'sx={{ mt: 1.5, color: '#b0b8c4' }}>
                        App offers a comprehensive suite of free searching tools to help you collect new dataset faster. 
                        Start with our app, we accept documents in the form of images, pdf, and you can request 
                        any special format using our premium service.
                    </Typography>
                    <Button
                        variant='contained'
                        endIcon={<ChevronRightOutlinedIcon />}
                        sx={{
                            mt: 2,
                            boxShadow: '0px 2px 4px rgba(11, 13, 14, 0.8), inset 0px 4px 8px rgba(153, 204, 243, 0.4)',
                            borderRadius: '10px',
                            width: '80%',
                            height: 50,
                            p: 0,
                            border: '1px solid #121010',
                        }}
                    >
                        <Typography variant='body1' sx={{ textTransform: 'capitalize', mt: 0.3, textAlign: 'left' }}>Discover our premium version</Typography>
                    </Button>
                </Box>
            </Grid>

            <Grid item xs={12} md={6}>

                <Box 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'column',
                        justifyContent: 'center', 
                        height: '100%', // adjust as needed
                        paddingLeft: '10%',
                        alignItems: 'center'
                    }}
                >   
                    <Typography variant='h6'sx={{ mb: 1.5, color: '#b0b8c4', fontStyle: 'italic', fontWeight: '300' }}>
                        Are you looking to search for people data?
                    </Typography>
                    <Upload />

                    <Stack direction="row" sx={{ mt: 2 }} spacing={1}>
                        <Typography variant='subtitle1'sx={{ mt: '5px !important', mr: '3px !important', color: '#b0b8c4', fontStyle: 'italic', fontWeight: '300' }}>
                            Download:
                        </Typography>
                        <DownloadButton fieldName=".csv" />
                        <DownloadButton fieldName=".xlsx" />
                        <DownloadButton fieldName=".json" />
                        <DownloadButton fieldName=".db" />

                    </Stack>

                </Box>
                
            </Grid>

        </Grid>
    </Container>
  )
}

export default Main