import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useState, useEffect } from 'react';

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, LineElement, Title, Tooltip, Legend);

const Item = styled(Paper)(({ theme }) => ({
  padding: "17px",
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

const Projects = () => {
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

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Projects Completed',
        data: [5, 9, 8, 15, 12, 10, 20],
        borderColor: '#00B2FF',
        backgroundColor: 'rgba(0, 178, 255, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Projects Ongoing',
        data: [10, 15, 12, 18, 22, 30, 25],
        borderColor: '#82E88D',
        backgroundColor: 'rgba(130, 232, 141, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const barData = {
    labels: ['Project A', 'Project B', 'Project C', 'Project D', 'Project E'],
    datasets: [
      {
        label: 'Hours Spent',
        data: [150, 200, 180, 220, 170],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Project Statistics',
      },
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutBounce',
    },
  };

  return (
    <Box sx={{ display: 'flex', backgroundColor : "#D6D6D6", height : "100%" }}>
      <Box component="nav" sx={{ width: windowWidth > 1040 ? 240 : 25, flexShrink: 0 }}>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Box component="header" sx={{ height: 64 }}>
        </Box>
        <Container sx={{ pt: 6, pb: 8 }}>
          <Grid container spacing={4}>
            <Grid item xs={ windowWidth > 1440 ? 12 : 11.4}>
              <Item>
                <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold', animation: 'fadeIn 2s' }} style={{fontSize : windowWidth > 780 ? null : "20px"}}>
                  Projects Overview
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, animation: 'slideInLeft 1s' }} style={{fontSize : windowWidth > 780 ? null : "12px"}}>
                  This section provides an in-depth analysis of the various projects undertaken over the past months. The following graphs highlight the number of projects completed, ongoing, and the hours spent on each project.
                </Typography>
                <Box sx={{ width: '100%', height: windowWidth > 600 ? 500 : 230 }}>
                  <Line data={lineData} options={options} />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={ windowWidth > 1440 ? 12 : 11.4}>
              <Item>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', animation: 'fadeIn 2s' }} style={{fontSize : windowWidth > 780 ? null : "20px"}}>
                  Hours Spent on Projects
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, animation: 'slideInRight 1s' }} style={{fontSize : windowWidth > 780 ? null : "12px"}}>
                  The bar chart below represents the total hours spent on different projects. It helps in identifying the projects that are more time-intensive and can aid in better time management for future projects.
                </Typography>
                <Box sx={{ width: '100%', height: windowWidth > 600 ? 500 : 230 }}>
                <Bar data={barData} options={options} />
                </Box>
                
              </Item>
            </Grid>
            <Grid item xs={ windowWidth > 1440 ? 12 : 11.4}>
              <Item>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', animation: 'fadeIn 2s' }} style={{fontSize : windowWidth > 780 ? null : "20px"}}>
                  Key Insights and Analysis
                </Typography>
                <Typography variant="body1" sx={{ animation: 'slideInUp 1s' }} style={{fontSize : windowWidth > 780 ? null : "12px"}}>
                  The data indicates a steady increase in the number of completed projects over the past few months, showcasing the team's efficiency and dedication. However, there is also a significant number of ongoing projects that require continuous monitoring to ensure timely completion. By analyzing the hours spent on each project, we can identify areas where efficiency can be improved and resources can be better allocated.
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

export default Projects;
