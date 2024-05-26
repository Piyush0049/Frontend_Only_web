import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button, Link, InputAdornment, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import { AccountCircle, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

const BackgroundImage = styled(Box)({
  backgroundImage: 'url(https://www.unfluke.in/static/media/auth_bg.a72dab35.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

const GradientButton = styled(Button)({
  background: 'linear-gradient(to right, #00C9FF, #92FE9D)',
  color: 'white',
  '&:hover': {
    background: 'linear-gradient(to right, #00B2FF, #82E88D)',
  },
});

const SocialButton = styled(IconButton)({
  color: 'white',
  backgroundColor: '#4267B2',
  '&:hover': {
    backgroundColor: '#365899',
  },
});

const LoginBox = styled(motion.div)(({ windowWidth }) => ({
  backgroundColor: 'white',
  borderRadius: '10px',
  padding: '40px',
  width: '100%',
  maxWidth: windowWidth > 680 ? '400px' : '330px',
  marginLeft : windowWidth > 680 ? null : '10%',
  zIndex: 1,
  boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
}));

const HomePage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <BackgroundImage>
      <LoginBox
        windowWidth={windowWidth}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Typography variant="h5" mb={2} align="center">
          Login to your account
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Username"
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          variant="outlined"
          placeholder="Password"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          <Link href="#" underline="hover">
            Forgot password?
          </Link>
        </Box>
        <GradientButton
          variant="contained"
          fullWidth
          size="large"
          sx={{ marginTop: '20px' }}
        >
          LOGIN
        </GradientButton>
        <Typography variant="body2" color="textSecondary" align="center" mt={2}>
          Or Sign Up Using
        </Typography>
        <Box display="flex" justifyContent="center" mt={2}>
          <SocialButton aria-label="facebook">
            <FacebookIcon />
          </SocialButton>
          <SocialButton aria-label="twitter" sx={{ ml: 1, backgroundColor: '#1DA1F2', '&:hover': { backgroundColor: '#0d8bec' } }}>
            <TwitterIcon />
          </SocialButton>
          <SocialButton aria-label="google" sx={{ ml: 1, backgroundColor: '#DB4437', '&:hover': { backgroundColor: '#c23321' } }}>
            <GoogleIcon />
          </SocialButton>
        </Box>
        <Typography variant="body2" color="textSecondary" align="center" mt={2}>
          Or Sign Up Using
        </Typography>
        <Link href="#" underline="hover" align="center" display="block" mt={1}>
          SIGN UP
        </Link>
      </LoginBox>
    </BackgroundImage>
  );
};

export default HomePage;
