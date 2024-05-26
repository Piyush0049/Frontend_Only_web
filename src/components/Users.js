import React from 'react';
import { Box, Container, Grid, Paper, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useState, useEffect } from 'react';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    textAlign: 'center',
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

const UsersList = () => {

    const [windowWidth, setWindowWidth] = useState("");

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth)
            console.log(windowWidth)
        }
        handleResize(); // Call on initial render
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [windowWidth]);

    const userData = [
        {
            name: 'Piyush Joshi',
            details: 'Software Engineer, Team Leader',
            hoursWorked: [8, 7, 6, 9, 7, 8, 7],
        },
        {
            name: 'Aditya Singh',
            details: 'Project Manager',
            hoursWorked: [9, 8, 8, 9, 7, 8, 7],
        },
        {
            name: 'Aryan Vashishtha',
            details: 'UI/UX Designer',
            hoursWorked: [7, 7, 8, 8, 7, 8, 7],
        },
    ];

    const lineOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Hours Worked Per Day',
            },
        },
        animation: {
            duration: 2000,
            easing: 'easeInOutBounce',
        },
    };

    const renderUserGraph = (user) => {
        const data = {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [
                {
                    label: `${user.name}'s Hours`,
                    data: user.hoursWorked,
                    borderColor: '#00B2FF',
                    backgroundColor: 'rgba(0, 178, 255, 0.2)',
                    tension: 0.4,
                },
            ],
        };

        return (<Box sx={{ width: '100%', height: windowWidth > 600 ? 500 : 230 }}>
                  <Line data={data} options={lineOptions} />;
                </Box>) 
        
    };

    return (
        <Box sx={{ display: 'flex', backgroundColor: "#D6D6D6" }}>
            <Box component="nav" sx={{ width: windowWidth > 1040 ? 240 : windowWidth > 720 ? 80 : null, flexShrink: 0 }}>
                {/* Sidebar Placeholder */}
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Box component="header" sx={{ height: 64 }}>
                    {/* Header Placeholder */}
                </Box>
                <Container sx={{ pt: 6, pb: 8, pl : windowWidth > 700 ? null : 4 }}>
                    <Grid container spacing={4}>
                        {userData.map((user, index) => (
                            <Grid item xs={windowWidth > 1440 ? 12 : 11.5} key={index}>
                                <Item>
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item>
                                            <Avatar sx={{ width: 56, height: 56, animation: 'fadeIn 2s' }}>{user.name.charAt(0)}</Avatar>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography variant="h6" sx={{ animation: 'fadeIn 2s', fontWeight: 'bold' }}>{user.name}</Typography>
                                            <Typography variant="body1" sx={{ animation: 'slideInLeft 1s' }}>{user.details}</Typography>
                                        </Grid>
                                    </Grid>
                                    <Typography variant="body1" sx={{ mt: 2, animation: 'slideInRight 1s' }}>
                                        The chart below shows the number of hours worked by {user.name} each day. This data helps in understanding the work patterns and productivity levels of the team members.
                                    </Typography>
                                    <Box sx={{ mt: 2 }}>{renderUserGraph(user)}</Box>
                                </Item>
                            </Grid>
                        ))}
                        <Grid item xs={windowWidth > 1440 ? 12 : 11.5}>
                            <Item>
                                <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', animation: 'fadeIn 2s' }}>
                                    Team Insights and Analysis
                                </Typography>
                                <Typography variant="body1" sx={{ animation: 'slideInUp 1s' }}>
                                    Analyzing the hours worked by each team member provides valuable insights into their workload and productivity. This information can be used to identify patterns, redistribute tasks, and ensure that no team member is overburdened. Additionally, it helps in recognizing the efforts of high-performing individuals and addressing any potential issues related to work-life balance.
                                </Typography>
                            </Item>
                        </Grid>
                    </Grid>
                    <style jsx global>{`
            @keyframes fadeIn {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }

            @keyframes slideInLeft {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(0); }
            }

            @keyframes slideInRight {
              0% { transform: translateX(100%); }
              100% { transform: translateX(0); }
            }

            @keyframes slideInUp {
              0% { transform: translateY(100%); }
              100% { transform: translateY(0); }
            }
          `}</style>
                </Container>
            </Box>
        </Box>
    );
};

export default UsersList;
