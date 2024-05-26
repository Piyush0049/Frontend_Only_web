import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const StyledTypography = styled(Typography)(({ theme }) => ({
  '&:hover': {
    color: 'white',
    transform: 'scale(1.1)',
    transition: 'color 0.3s, transform 0.3s',
  },
  cursor: 'pointer',
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    transform: 'scale(1.2)',
    transition: 'background-color 0.3s, transform 0.3s',
  },
}));

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(false);

    useEffect(() => {
        function handleResize() {
          setWindowWidth(window.innerWidth);
        }
        handleResize(); 
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (route) => {
    navigate(route);
  };

  const path = location.pathname.slice(1); 
  const title = path ? path.charAt(0).toUpperCase() + path.slice(1) : 'Home';

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1, 
        background: 'linear-gradient(to right, #00B2FF, #82E88D)', 
        transition: 'background 0.3s'
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingX: 2 }}>
        {windowWidth > 750 && (
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          <Box
            component="span"
            sx={{ 
              cursor: 'pointer',
              fontWeight: 'bold',
              '&:hover': { 
                color: 'white', 
                transform: 'scale(1.1)', 
                transition: 'color 0.3s, transform 0.3s' 
              } 
            }}
            onClick={() => handleNavigation('/home')}
          >
            {title}
          </Box>
        </Typography>
        )}
        
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {['Home', 'About', 'Services', 'Contact'].map((text, index) => (
            <StyledTypography
              key={index}
              variant="body1"
              sx={{ marginX: 2, fontSize : windowWidth > 750 ? null : "15px"}}
              onClick={() => handleNavigation(`/${text.replace(' ', '').toLowerCase()}`)}
            >
              {text}
            </StyledTypography>
          ))}
          <StyledIconButton color="inherit" onClick={() => handleNavigation('/settings')}>
            <AccountCircle />
          </StyledIconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
