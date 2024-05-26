import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Paper, Link } from '@mui/material';
import { motion } from 'framer-motion';

const ContactPage = () => {
    const [windowWidth, setWindowWidth] = useState("");

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        handleResize(); 
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [windowWidth]);

    return (
        <Box sx={{ backgroundColor: "#D6D6D6", minHeight: "100vh", py: 12 ,paddingLeft : windowWidth > 1040 ? "250px" : null }}>
            <Container sx={{ textAlign: 'center', }}>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', fontSize: windowWidth > 600 ? "40px" : "29px", mb: 4 }}>
                        Contact Me
                    </Typography>
                </motion.div>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: 4,
                        justifyContent: 'center',
                    }}
                >
                    {[
                        { label: 'Name', value: 'Piyush Joshi' },
                        { label: 'Email', value: 'piyushjoshi81204@gmail.com' },
                        { label: 'Phone Number', value: '+91 94857XXXXX' },
                        { label: 'LinkedIn', value: 'www.linkedin.com/in/piyush-joshi-324778254', isLink: true }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Paper
                                elevation={3}
                                sx={{
                                    padding: 3,
                                    borderRadius: '10px',
                                    cursor: 'pointer',
                                    backgroundColor: '#f5f5f5',
                                    '&:hover': {
                                        backgroundColor: '#e0e0e0',
                                    },
                                }}
                            >
                                <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                                    {item.label}
                                </Typography>
                                {item.isLink ? (
                                    <Link href={`https://${item.value}`} target="_blank" rel="noopener noreferrer">
                                        {item.value}
                                    </Link>
                                ) : (
                                    <Typography variant="body1">{item.value}</Typography>
                                )}
                            </Paper>
                        </motion.div>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default ContactPage;
