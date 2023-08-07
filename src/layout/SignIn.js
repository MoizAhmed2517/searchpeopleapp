import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import InputLabel from '@mui/material/InputLabel';
import { Link } from "react-router-dom";
import { Stack } from '@mui/material';

function Copyright(props) {
    return (
        <Stack direction="row" spacing={0.5} sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <Typography variant="body2" align="center" {...props} sx={{ color: '#fff', mt: 6 }}>{'Copyright © '}</Typography>
            <Typography variant='subtitle2' align='center' sx={{ color:'#3399ff', fontWeight: 300, }} component={Link} to="/"> PeopleSearch</Typography>
            <Typography variant="body2" align="center" {...props} sx={{ color: '#fff', mt: 6 }}>{new Date().getFullYear()}</Typography>
        </Stack>
    );
  }
  
  // TODO remove, this demo shouldn't need to reset the theme.
  
  const defaultTheme = createTheme();

const SignIn = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
    };
    
    return (
    <ThemeProvider theme={defaultTheme} >
        <Container component="main" maxWidth="xs" >

                <Box
                    sx={{
                    mt: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}
                >
                    <Box component={Link} to="/">
                        <PsychologyAltOutlinedIcon sx={{ color: '#fff', width: 60, height: 60, mb: 1.5 }} />
                    </Box>

                    <Typography variant="h5" sx={{ color:'#fff', fontWeight: 300, }}>
                    Sign in to PeopleSearch
                    </Typography>

                    <Box 
                        component="form" 
                        onSubmit={handleSubmit} 
                        noValidate 
                        sx={{ 
                            mt: 3,
                            background: '#131314',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '30%',
                            width: '80%',
                            border: '1px solid #3e4348',
                            borderRadius: '10px',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderRadius: '10px',
                            transition: '0.3s',
                            p: 2,
                        }}
                    >
                        {/* Username */}
                        <Typography align="left" variant='body2' sx={{ color: '#fff' }}>Username or email</Typography>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            name="email"
                            size="small"
                            sx={{ 
                                mt: 0.3,
                                color: '#fff',
                                '& .MuiOutlinedInput-input': { // change color of input text
                                    color: '#fff',  // specify your color here
                                },
                                '& .MuiOutlinedInput-root': { // for MUI version 5
                                    '& fieldset': {
                                        borderColor: '#3e4348',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#3e4348'
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#3399ff', // on hover
                                    },
                                }

                             }}
                        />

                        {/* Password */}
                        <Grid container>
                            <Grid item xs={6}>
                                <Typography align="left" variant='body2' sx={{ color: '#fff', mt: 2 }}>Password</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography align="right" variant='body2' sx={{ color: '#3399ff', mt: 2 }}>Forgot Password?</Typography>
                            </Grid>
                        </Grid>
                        
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            type="password"
                            id="password"
                            name="password"
                            size="small"
                            sx={{ 
                                mt: 0.3,
                                color: '#fff',
                                '& .MuiOutlinedInput-input': { // change color of input text
                                    color: '#fff',  // specify your color here
                                },
                                '& .MuiOutlinedInput-root': { // for MUI version 5
                                    '& fieldset': {
                                        borderColor: '#3e4348',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#3e4348'
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#3399ff', // on hover
                                    },
                                }

                             }}
                        />



                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, background: '#3399ff' }}
                            component={Link}

                        >
                            Sign In
                        </Button>

                    </Box>

                    <Box
                        sx={{ 
                            mt: 3,
                            background: '#131314',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '30%',
                            width: '80%',
                            border: '1px solid #3e4348',
                            borderRadius: '10px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '10px',
                            transition: '0.3s',
                            p: 2,
                        }}
                    >

                        <Stack direction="row" spacing={0.5}>
                            <Typography variant='subtitle2' align='center' sx={{ color:'#fff', fontWeight: 300, }}>New to PeopleSearch? </Typography>
                            <Typography variant='subtitle2' align='center' sx={{ color:'#3399ff', fontWeight: 300, }} component={Link} to="/signup"> Create an account</Typography>
                        </Stack>

                        

                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    </ThemeProvider>
    );
}

export default SignIn