import React from 'react';
import { Box, Grid, Typography, Paper, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
    LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, BarChart, Bar, PieChart, Pie, ResponsiveContainer
} from 'recharts';
import { useEffect, useState } from 'react';

const data = [
    { name: 'Jan', reviews: 400, successfulChecks: 240 },
    { name: 'Feb', reviews: 300, successfulChecks: 139 },
    { name: 'Mar', reviews: 200, successfulChecks: 980 },
    { name: 'Apr', reviews: 278, successfulChecks: 390 },
    { name: 'May', reviews: 189, successfulChecks: 480 },
    { name: 'Jun', reviews: 239, successfulChecks: 380 },
    { name: 'Jul', reviews: 349, successfulChecks: 430 },
];

const pieData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.primary,
    background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 0 30px rgba(0,0,0,0.2)',
    },
}));

const Reports = () => {
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
    return (
        <>
            <Box sx={{ display: 'flex', backgroundColor: "#D6D6D6", minHeight: "100vh", pt: 11 }}>
                <Box component="nav" sx={{ width: windowWidth > 1040 ? 240 : null, flexShrink: 0 }}>
                </Box>
                <Container sx={{ pt: 4, pb: 8 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Item>
                                <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', fontSize : windowWidth > 500 ? null : "19px" }}>Monthly Review Cases Analysis</Typography>
                                <Typography variant="body1" sx={{ mb: 4, fontSize : windowWidth > 500 ? null : "15px"  }}>
                                    This section provides a comprehensive analysis of the monthly review cases. The data below
                                    shows the trends in review cases over the past months, giving insights into peak periods
                                    and potential reasons behind the fluctuations.
                                </Typography>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={data}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="reviews" stroke="#8884d8" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item>
                                <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', fontSize : windowWidth > 500 ? null : "18px" }}>Distribution of Review Cases</Typography>
                                <Typography variant="body1" sx={{ mb: 4, fontSize : windowWidth > 500 ? null : "15px"  }}>
                                    The pie chart below illustrates the distribution of review cases across different groups.
                                    This visualization helps in understanding which groups are contributing the most to the
                                    overall review workload.
                                </Typography>
                                <ResponsiveContainer width="100%" height={300}>
                                    <PieChart>
                                        <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label />
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item>
                                <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', fontSize : windowWidth > 500 ? null : "18px" }}>Successful Checks Over Time</Typography>
                                <Typography variant="body1" sx={{ mb: 4, fontSize : windowWidth > 500 ? null : "15px"  }}>
                                    This bar chart provides an overview of successful checks over time, showing the progress
                                    and efficiency improvements in our review process. Analyzing this data helps in
                                    identifying trends and areas for further optimization.
                                </Typography>
                                <ResponsiveContainer width="100%" height={300}>
                                    <BarChart data={data}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="successfulChecks" fill="#82ca9d" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item>
                                <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', fontSize : windowWidth > 500 ? null : "18px" }}>Conclusions & Recommendations</Typography>
                                <Typography variant="body1" fontSize = {windowWidth > 500 ? null : "16px"} >
                                    Based on the data analysis presented above, several conclusions can be drawn:
                                </Typography>
                                <ul style={{fontSize : windowWidth > 500 ? null : "14px"}}>
                                    <li>The peak periods for review cases are during the first quarter of the year.</li>
                                    <li>Group A and Group B are the major contributors to the review cases.</li>
                                    <li>Successful checks have shown a steady increase over the months, indicating process improvements.</li>
                                </ul>
                                <Typography variant="body1"  fontSize = {windowWidth > 500 ? null : "16px"}><b>
                                    Recommendations:</b>
                                </Typography>
                                <ul style={{fontSize : windowWidth > 500 ? null : "14px"}}>
                                    <li>Focus on optimizing review processes during peak periods to handle the increased workload efficiently.</li>
                                    <li>Implement targeted strategies for Group A and Group B to reduce their review case contributions.</li>
                                    <li>Continue monitoring the successful checks trend to ensure sustained improvements.</li>
                                </ul>
                            </Item>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Reports;
