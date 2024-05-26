
import React from 'react';
import { useState, useEffect } from 'react';

const ContactPage = () => {
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
        event.target.style.transform = 'scale(1.1)';
        event.target.style.transition = 'transform 0.3s ease';
    };

    const handleHoverExit = (event) => {
        event.target.style.transform = 'scale(1)';
        event.target.style.transition = 'transform 0.3s ease';
    };

    return (
        <div style={{backgroundColor: "#D6D6D6", minHeight : "1000px"}}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '80px', textAlign: 'center', paddingLeft: windowWidth > 1040 ? 260 : (windowWidth > 994 ? 40 : 100)}}>
                <header style={styles.header}>
                    <h1 style={{ fontSize: "40px" }}>Contact Me</h1>
                </header>
                <div style={styles.contactDetails}>
                    <div style={styles.contactItem} onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>
                        <h3>Name</h3>
                        <p>Piyush Joshi</p>
                    </div>
                    <div style={styles.contactItem} onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>
                        <h3>Email</h3>
                        <p>piyushjoshi81204@gmail.com</p>
                    </div>
                    <div style={styles.contactItem} onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>
                        <h3>Phone Number</h3>
                        <p>+91 94857XXXXX</p>
                    </div>
                    <div style={styles.contactItem} onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>
                        <h3>LinkedIn</h3>
                        <a href="https://www.linkedin.com/in/piyush-joshi-324778254" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/piyush-joshi-324778254</a>
                    </div>
                </div>
            </div>
            </div>
    );
};

const styles = {
    header: {
        marginBottom: '50px',
    },
    contactDetails: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        justifyContent: 'center',
    },
    contactItem: {
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
        backgroundColor: '#f5f5f5',
    },
};

export default ContactPage;
