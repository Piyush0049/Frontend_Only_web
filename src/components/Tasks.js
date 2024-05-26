import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useState, useEffect } from 'react';

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
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Tasks = () => {
  const [windowWidth, setWindowWidth] = useState("");

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      console.log(windowWidth);
    }
    handleResize(); // Call on initial render
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Tasks Completed',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: '#00B2FF',
        backgroundColor: 'rgba(0, 178, 255, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Tasks Pending',
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: '#82E88D',
        backgroundColor: 'rgba(130, 232, 141, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // This allows for custom height
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Task Statistics',
      },
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutBounce',
    },
  };

  return (
    <Box sx={{ display: 'flex', minHeight: "1000px", height: "100%", paddingTop: "90px", backgroundColor: "#D6D6D6" }}>
      <Box component="nav" sx={{ width: windowWidth > 1040 ? 240 : 23, flexShrink: 0 }}>
        {/* Sidebar Placeholder */}
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Container sx={{ pt: 4, pb: 8, height: "100%" }}>
          <Grid container spacing={4}>
            <Grid item xs={windowWidth > 1450 ? 12 : 11.3}>
              <Item>
                <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold', animation: 'fadeIn 2s', fontSize: windowWidth > 661 ? null : "20px" }}>
                  Tasks Overview
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, animation: 'slideInLeft 1s', fontSize: windowWidth > 661 ? null : "16px" }}>
                  Here's a brief overview of the tasks completed and pending over the past few months.
                </Typography>
                <Box sx={{ width: '100%', height: windowWidth > 600 ? 500 : 260 }}>
                  <Line data={data} options={options} />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={windowWidth > 1450 ? 12 : 11.3} >
              <Item>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', animation: 'fadeIn 2s', fontSize: windowWidth > 661 ? null : "20px" }}>
                  Key Insights
                </Typography>
                <Typography variant="body1" sx={{ animation: 'slideInRight 1s', fontSize: windowWidth > 661 ? null : "16px" }}>
                  We have observed a significant increase in the number of tasks completed in the month of March. However, there is also a noticeable rise in pending tasks towards the end of the quarter. It is essential to identify the bottlenecks and address them promptly to ensure smooth project progress.
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
          `}</style>
        </Container>
      </Box>
    </Box>
  );
};

export default Tasks;
