import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
    LineChart,
    Line,
    PieChart,
    Pie,
    AreaChart,
    Area,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
} from 'recharts';

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

const areaData = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const radarData = [
    { subject: 'Math', A: 120, B: 110, fullMark: 150 },
    { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
    { subject: 'English', A: 86, B: 130, fullMark: 150 },
    { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
    { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
    { subject: 'History', A: 65, B: 85, fullMark: 150 },
];

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 0 20px rgba(0,0,0,0.2)',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
}));

const Dashboard = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [windowWidth, setWindowWidth] = useState("");

    useEffect(() => {
        function handleResize() {
            setIsSmallScreen(window.innerWidth < 1372);
            setWindowWidth(window.innerWidth)
        }
        handleResize(); 
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [windowWidth]);

    return (
        <Box sx={{ display: 'flex', backgroundColor: "#D6D6D6", minHeight: "100vh", width: "100%", paddingTop : "30px" }}>
            <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, paddingLeft: windowWidth > 1460 ? "17%" : (windowWidth > 1040 ? "24%" : null), width: "auto" }}>
                <Grid container spacing={3} justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={isSmallScreen ? 12 : 3}>
                        <Item>
                            <Typography variant="h6">1,567</Typography>
                            <Typography variant="body2">Review Cases</Typography>
                            <PieChart width={150} height={150}>
                                <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                            </PieChart>
                            <Typography variant="caption" sx={{ mt: 1 }}>Distribution of Review Cases</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={isSmallScreen ? 12 : 3}>
                        <Item>
                            <Typography variant="h6">224</Typography>
                            <Typography variant="body2">Pending Cases</Typography>
                            <AreaChart width={150} height={150} data={areaData}>
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                            </AreaChart>
                            <Typography variant="caption" sx={{ mt: 1 }}>Pending Cases Trend</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={isSmallScreen ? 12 : 3}>
                        <Item>
                            <Typography variant="h6">1,232</Typography>
                            <Typography variant="body2">Approved Cases</Typography>
                            <RadarChart cx={75} cy={75} outerRadius={50} width={150} height={150} data={radarData}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="subject" />
                                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                                <Radar name="Cases" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            </RadarChart>
                            <Typography variant="caption" sx={{ mt: 1 }}>Approval Cases Analysis</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={isSmallScreen ? 12 : 3}>
                        <Item>
                            <Typography variant="h6">3.5m</Typography>
                            <Typography variant="body2">Median Check Time</Typography>
                            <BarChart width={150} height={150} data={[{ name: '', value: 3.5 }]}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="value" fill="#82ca9d" />
                            </BarChart>
                            <Typography variant="caption" sx={{ mt: 1 }}>Median Time for Checks</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Item>
                            <Typography variant="h6">5,748</Typography>
                            <Typography variant="body2">Total Users</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Item>
                            <Typography variant="h6">2,567</Typography>
                            <Typography variant="body2">Successful Checks</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={isSmallScreen ? 12 : 6}>
                        <Item>
                            <Typography variant="h6">Review Cases Over Time</Typography>
                            <BarChart width={windowWidth > 650 ? 500 : 250} height={300} data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="reviews" fill="#8884d8" />
                            </BarChart>
                            <Typography variant="caption" sx={{ mt: 1 }}>Monthly Review Cases</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={isSmallScreen ? 12 : 6}>
                        <Item>
                            <Typography variant="h6">Successful Checks Trend</Typography>
                            <LineChart width={windowWidth > 650 ? 500 : 250} height={300} data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="successfulChecks" stroke="#82ca9d" />
                            </LineChart>
                            <Typography variant="caption" sx={{ mt: 1 }}>Monthly Successful Checks</Typography>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Dashboard;
