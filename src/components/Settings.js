import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Paper, Container, Switch as MuiSwitch, TextField, FormControlLabel, Button, Dialog, DialogTitle, DialogContent, DialogActions, Avatar } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';


// Custom theme
const getTheme = (darkMode) => createTheme({
    palette: {
        mode: darkMode ? 'dark' : 'light',
        background: {
            default: darkMode ? '#121212' : '#D6D6D6',
        },
        text: {
            primary: darkMode ? '#ffffff' : '#000000',
        },
    },
});

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    textAlign: 'left',
    color: theme.palette.text.primary,
    background: theme.palette.mode === 'dark'
        ? 'linear-gradient(135deg, #424242 0%, #616161 100%)'
        : 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 0 30px rgba(0,0,0,0.2)',
    },
}));

const Settings = () => {
    const [windowWidth, setWindowWidth] = useState("");

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth)
            console.log(windowWidth)
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [windowWidth]);
    const [darkMode, setDarkMode] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    };

    const handleProfileOpen = () => {
        setProfileOpen(true);
    };

    const handleProfileClose = () => {
        setProfileOpen(false);
    };

    const theme = getTheme(darkMode);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', backgroundColor: theme.palette.background.default, minHeight: '100vh', pt: 11 }}>
                <Box component="nav" sx={{ width: windowWidth > 1034 ? 240 : null, flexShrink: 0 }}>

                </Box>
                <Container sx={{ pt: 4, pb: 8 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Item>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Avatar src="https://via.placeholder.com/150" sx={{ width: 64, height: 64, mr: 2 }} />
                                    <Box>
                                        <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: windowWidth > 582 ? null : "20px", }}>Piyush Joshi</Typography>
                                        <Typography variant="subtitle1" style={{ fontSize: windowWidth > 582 ? null : "14px", }}>Full Stack Developer</Typography>
                                        <Typography variant="subtitle1" style={{ fontSize: windowWidth > 582 ? null : "14px", }}>India, Haryana</Typography>
                                    </Box>
                                    <Button variant="contained" color="primary" sx={{ ml: 'auto' }} onClick={handleProfileOpen}>Edit</Button>
                                </Box>
                                <Typography variant="h6" sx={{ mb: 2 }}>Personal Information</Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField label="First Name" fullWidth margin="normal" defaultValue="Piyush" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField label="Last Name" fullWidth margin="normal" defaultValue="Joshi" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField label="Email" fullWidth margin="normal" defaultValue="piyushjoshi81204@gmail.com" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField label="Phone" fullWidth margin="normal" defaultValue="+91 94857XXXXX" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField label="Bio" fullWidth margin="normal" defaultValue="Full Stack Developer" multiline rows={2} />
                                    </Grid>
                                </Grid>
                                <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>Address</Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField label="Country" fullWidth margin="normal" defaultValue="India" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField label="City/State" fullWidth margin="normal" defaultValue="Haryana" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField label="Postal Code" fullWidth margin="normal" defaultValue="125XXX" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField label="TAX ID" fullWidth margin="normal" defaultValue="ABCD1234567" />
                                    </Grid>
                                </Grid>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item>
                                <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', fontSize: windowWidth > 582 ? null : "20px" }}>Preferences</Typography>
                                <FormControlLabel
                                    control={<MuiSwitch checked={darkMode} onChange={handleDarkModeToggle} />}
                                    label="Dark Mode"
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item>
                                <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', fontSize: windowWidth > 582 ? null : "20px" }}>Security</Typography>
                                <TextField label="Current Password" fullWidth margin="normal" type="password" />
                                <TextField label="New Password" fullWidth margin="normal" type="password" />
                                <TextField label="Confirm New Password" fullWidth margin="normal" type="password" />
                            </Item>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Dialog open={profileOpen} onClose={handleProfileClose} maxWidth="sm" fullWidth>
                <DialogTitle>Profile Details</DialogTitle>
                <DialogContent dividers>
                    <Typography variant="h6">Name: Piyush Joshi</Typography>
                    <Typography variant="h6">Email: piyushjoshi81204@gmail.com</Typography>
                    <Typography variant="h6">Phone: +91 94857XXXXX</Typography>
                    <Typography variant="h6">Bio: Full Stack Developer</Typography>
                    <Typography variant="h6">Country: India</Typography>
                    <Typography variant="h6">City/State: Haryana</Typography>
                    <Typography variant="h6">Postal Code: 125XXX</Typography>
                    <Typography variant="h6">TAX ID: ABCD1234567</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleProfileClose} color="primary">Close</Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
};

export default Settings;
