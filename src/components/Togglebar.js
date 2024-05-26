import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Box, Divider, Typography, IconButton } from '@mui/material';
import { Home, Dashboard, People, BarChart, Receipt, Settings, Support, Menu } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ToggleSidebar = () => {
    const navigate = useNavigate();
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleListItemClick = (route) => {
        setOpenDrawer(false);
        navigate(route);
    };

    return (
        <>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => setOpenDrawer(!openDrawer)}
                sx={{
                    position: 'fixed',
                    top: 68,
                    left: 7,
                    zIndex: 1300, // Ensures the button is on top
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    },
                }}
            >
                <Menu />
            </IconButton>

            <Drawer
                variant="permanent"
                sx={{
                    width: openDrawer ? 250 : 0,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: openDrawer ? 250 : 0,
                        boxSizing: 'border-box',
                        backgroundColor: '#060430',
                        color: 'white',
                        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', // Add shadow
                        overflowX: 'hidden', // Prevents horizontal scroll
                    },
                }}
            >
                <AnimatePresence>
                    {openDrawer && (
                        <motion.div
                            initial={{ x: -250 }}
                            animate={{ x: 0 }}
                            exit={{ x: -250 }}
                            transition={{ duration: 0.5 }}
                            style={{ width: '100%' }}
                        >
                            <List>
                                <ListItem
                                    sx={{
                                        justifyContent: 'center',
                                        padding: '16px 0',
                                        paddingTop : "120px",
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
                            </List>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Drawer>
        </>
    );
};

export default ToggleSidebar;
