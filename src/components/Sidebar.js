import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Box, Divider, Typography, TextField, CircularProgress, Button } from '@mui/material';
import { Home, Dashboard, People, BarChart, Receipt, Settings, Support, Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleListItemClick = (route) => {
    navigate(route);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { 
          width: 240, 
          boxSizing: 'border-box', 
          backgroundColor: '#060430', 
          color: 'white',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', // Add shadow
        },
      }}
    >
      <List sx={{ paddingTop: '70px' }}>
        <ListItem
          sx={{
            justifyContent: 'center',
            padding: '16px 0',
            display: 'flex',
            alignItems: 'center',
            '&:hover': {
              backgroundColor: '#1c1c47',
              transform: 'scale(1.05)',
              transition: 'transform 0.3s, background-color 0.3s',
            },
          }}
          onClick={() => handleListItemClick('/settings')}
        >
          <Avatar alt="Piyush Joshi" src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }} />
          <Box ml={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: '10px' }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Piyush Joshi</Typography>
          </Box>
        </ListItem>
        <Divider sx={{ my: 2, borderColor: 'rgba(255, 255, 255, 0.12)' }} />
        {[
          { text: 'Home', icon: <Home />, hoverColor: '#2196f3', route: '/home' },
          { text: 'Dashboard', icon: <Dashboard />, hoverColor: '#2196f3', route: '/dashboard' },
          { text: 'Projects', icon: <BarChart />, hoverColor: '#4caf50', route: '/projects' },
          { text: 'Tasks', icon: <Receipt />, hoverColor: '#ff9800', route: '/tasks' },
          { text: 'Reporting', icon: <BarChart />, hoverColor: '#9c27b0', route: '/reporting' },
          { text: 'Users', icon: <People />, hoverColor: '#f44336', route: '/users' },
          { text: 'Support', icon: <Support />, hoverColor: '#ff5722', route: '/support' },
          { text: 'Settings', icon: <Settings />, hoverColor: '#f44336', route: '/settings' },
        ].map((item, index) => (
          <ListItem
            button
            key={item.text}
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: item.hoverColor,
                transform: 'scale(1.05)',
                transition: 'transform 0.3s, background-color 0.3s',
              },
              '& .MuiListItemIcon-root': {
                color: 'white',
              },
            }}
            onClick={() => handleListItemClick(item.route)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <Box sx={{ paddingTop: '35px', textAlign: 'center', marginTop: 'auto' }}>
          <CircularProgress variant="determinate" value={80} size={50} thickness={5} sx={{ color: '#4caf50', marginBottom: '10px' }} />
          <Typography variant="body2" color="white">Used credits this month</Typography>
          <Typography variant="body1" sx={{ color: 'white', fontWeight: 'bold' }}>80%</Typography>
          <Typography variant="body2" color="white" sx={{ mb: 1 }}>Your team has used 80% of your available credits. Need more?</Typography>
        </Box>
      </List>
    </Drawer>
  );
};

export default Sidebar;
