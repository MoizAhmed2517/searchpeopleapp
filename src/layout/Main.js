import { Container, Grid, Typography, Box, Button, Stack, Chip, ListItem, Paper } from '@mui/material'
import React, { useState } from 'react'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import Upload from '../components/header/misc/Upload';
import DownloadButton from '../components/header/misc/DownloadButton';
import CancelIcon from '@mui/icons-material/Cancel';
import ProgressBarLinear from '../components/header/misc/ProgressBarLinear';
import './main.css';
import DownloadIcon from '@mui/icons-material/Download';
import Features from '../components/Features';
import Advantages from '../components/Advantages';
import Footer from '../components/Footer';

const Main = () => {

  const [file, setFile] = useState(null);
  const [trigger, setTrigger] = useState(false);
  const [disabler, setDisabler] = useState(false);

  const handleFileUpload = (file) => {
    setFile(file)
  }

  const handleDelete = (chipToDelete) => () => {
    setFile((chips) => chips.filter((chip) => chip.name !== chipToDelete.name));
  };


  return (
    <>

        {
            trigger === true && <ProgressBarLinear off={setTrigger} on={setDisabler} />
        }

        <Container maxWidth="lg" sx={{ mt: 0, height: '100vh', display: 'flex', flexDirection: 'column' }}> 
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
                        <Typography variant="h3" sx={{ fontWeight: 650, color: '#3399ff' }}>Welcome to Scrubworx!</Typography>
                        <Typography variant="h4" sx={{ fontWeight: 700, color: "#fff", mt: 0.5 }}>Streamline Your Application Processing with Automation </Typography>
                        <Typography variant='body1'sx={{ mt: 1.5, color: '#b0b8c4' }}>
                        At Scrubworx, we understand the challenges of handling large volumes of applications. 
                        That's why we've created a cutting-edge solution to automate and simplify the process. 
                        From document upload to data extraction and compilation, Scrubworx has got you covered.
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
                        <Typography variant='body1'sx={{ mb: 1.5, color: '#b0b8c4', fontStyle: 'italic', fontWeight: '300' }}>
                            Ready to transform your application processing?
                        </Typography>

                        <Upload onFileUpload={handleFileUpload} />

                        <Stack direction="row" sx={{ mt: 2 }} spacing={1}>
                            <Typography variant='subtitle1'sx={{ mt: '5px !important', mr: '3px !important', color: '#b0b8c4', fontStyle: 'italic', fontWeight: '300' }}>
                                Download:
                            </Typography>
                            <DownloadButton fieldName=".csv" trig={setTrigger} off={setDisabler} on={disabler} />
                            <DownloadButton fieldName=".xlsx" trig={setTrigger} off={setDisabler} on={disabler} />
                            <DownloadButton fieldName=".json" trig={setTrigger} off={setDisabler} on={disabler} />
                            <DownloadButton fieldName=".txt" trig={setTrigger} off={setDisabler} on={disabler} />
                        </Stack>

                        {
                            file !== null && file !== 0 
                            ? 
                            <Paper
                                sx={{
                                    boxShadow: 'none',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexWrap: 'wrap',
                                    listStyle: 'none',
                                    p: '10px',
                                    mt: 2,
                                    background: '#141a1f'
                                }}
                                component="ul"
                                >
                                {file.map((data, index) => {
                                    return (
                                        <Stack key={index} direction="row" spacing={2}>
                                            <Chip
                                            label={data.name}
                                            onDelete={handleDelete(data)}
                                            sx={{ color: '#fff', border: '1px solid #fff' }}
                                            deleteIcon={<CancelIcon style={{ color: '#fff' }} />}
                                            />
                                        </Stack>
                                    );
                                })}
                            </Paper>
                            : ""
                        }

                        {
                            trigger === true && 
                                <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', flexDirection: "column" }}>
                                    <Stack direction="row" spacing={1}>
                                        <DownloadIcon sx={{ mt: '5px !important', color: '#b0b8c4' }} />
                                        <Typography variant="h6" sx={{ color: '#b0b8c4', fontWeight: '400' }}>
                                            Please wait file is downloading
                                            <span className="dot-one"> .</span>
                                            <span className="dot-two">.</span>
                                            <span className="dot-three">.</span>
                                        </Typography>
                                        
                                    </Stack>
                                </Box>
                        }



                    </Box>
                </Grid>
            </Grid>
        </Container>

        <Box sx={{ borderTop: '1px solid #1e242c', mt: 12 }} />
        
        <Container maxWidth="lg" sx={{ mt:2, height: '80vh', display: 'flex', flexDirection: 'column' }}>
            <Grid container spacing={2} sx={{ flex: '2' }}>   
                <Grid item xs={12}>
                    <Features />
                </Grid>
            </Grid>
        </Container>

        <Box sx={{ borderTop: '1px solid #1e242c', mt: 2 }} />

        <Container maxWidth="lg" sx={{ mt:2, height: '80vh', display: 'flex', flexDirection: 'column', mb: -9 }}>
            <Grid container spacing={2} sx={{ flex: '2' }}>   
                <Grid item xs={12}>
                    <Advantages />
                </Grid>
            </Grid>
        </Container>

        <Container maxWidth="lg" sx={{ mt:1 , borderTop: '1px solid #1e242c' }} >
            <Footer />
        </Container>
    
    </>
    
  )
}

export default Main