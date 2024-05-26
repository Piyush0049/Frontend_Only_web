import React from 'react';
import { Rocket, Settings, MonetizationOn, DesktopWindows, Lock, HelpOutline, PeopleAlt, Build } from '@mui/icons-material';
import { useState, useEffect } from 'react';

const supportCategories = [
    { title: 'Getting Started', description: 'Start off on the right foot! Not the left one!', icon: <Rocket fontSize="large" /> },
    { title: 'Account Settings', description: 'You\'re a special snowflake and so is your account', icon: <Settings fontSize="large" /> },
    { title: 'Billing', description: 'That feel when you look at your bank account', icon: <MonetizationOn fontSize="large" /> },
    { title: 'Interface', description: 'What does this button do...#???', icon: <DesktopWindows fontSize="large" /> },
    { title: 'Trust & Safety', description: 'Keep things safe & sound for you and your buddies', icon: <Lock fontSize="large" /> },
    { title: 'F.A.Q', description: 'All you can eat self-serve problem solving', icon: <HelpOutline fontSize="large" /> },
    { title: 'Community', description: 'Bringing people together from all over the world', icon: <PeopleAlt fontSize="large" /> },
    { title: 'Server Setup', description: 'Almost as exciting as interior decorating', icon: <Build fontSize="large" /> },
];

const SupportPage = () => {

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
    const handleHover = (event) => {
        event.target.style.transform = 'scale(1.13)';
    };

    const handleHoverExit = (event) => {
        event.target.style.transform = 'scale(1)';
    };

    return (
        <div style={{
            maxWidth: '100%',
            margin: '0 auto',
            paddingLeft: windowWidth > 1153 ? '19%' : windowWidth > 1040 ? "23%" : null,
            backgroundColor: "#D6D6D6",
            minHeight: "1000px",
            paddingTop : windowWidth > 700 ? "30px" : "25px",
        }}>
            <header style={styles.header}>
                <h1 style={{ fontSize: windowWidth > 700 ? "50px" : "36px", color: "#007bff" }}>Welcome to Support</h1>
                <p style={{ fontSize: "20px", color: "#555" }}>How can we assist you today?</p>
            </header>
            <div style={styles.categories}>
                {supportCategories.map((category, index) => (
                    <div key={index} style={styles.category} onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>
                        {category.icon}
                        <h3>{category.title}</h3>
                        <p>{category.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    header: {
        paddingTop: "60px",
        textAlign: 'center',
        marginBottom: '50px',
    },
    categories: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    category: {
        width: '200px',
        textAlign: 'center',
        padding: '20px',
        margin: '10px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
        backgroundColor: '#f5f5f5', // Light gray background color
    },
};

export default SupportPage;
