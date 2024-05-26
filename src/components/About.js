import React from 'react';
import { useState, useEffect } from 'react';

const AboutPage = () => {

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
    <div style={{backgroundColor: "#D6D6D6", minHeight : "1000px"}}>
        <div style={{ margin: '0 auto', paddingTop: '80px',paddingBottom : "80px",paddingRight :  windowWidth > 1040 ? "80px" : "30px" , textAlign: 'center', paddingLeft: windowWidth > 1040 ? "250px" : "30px"}}>
      <header style={styles.header}>
        <h1 style={{fontSize : windowWidth > 700 ? "55px" : "40px"}}><b>About</b></h1>
      </header>
      <section style={styles.aboutSection}>
        <h2>About Website</h2>
        <p style={{fontSize : "19px"}}>This is a sample frontend webpage created as part of the "unfluke" internship. It emulates the color scheme and design elements of the Unfluke website to maintain brand consistency. The webpage is built using React JS and incorporates various libraries such as Recharts and Material-UI to enhance its functionality and visual appeal.</p>
      </section>
      <section style={styles.aboutSection}>
        <h2>About Me</h2>
        <p style={{fontSize : "19px"}}>My name is Piyush Joshi, and I am currently pursuing a Bachelor of Technology in Computer Science and Engineering from Netaji Subhas University of Technology, Delhi. I have a passion for web development and have gained extensive experience in creating full-stack applications using technologies such as Redux, MERN stack (MongoDB, Express.js, React.js, Node.js), Next.js, and utilizing tools like VS Code and GitHub for version control. I am proficient in developing RESTful APIs and have a strong foundation in software development principles and practices.</p>
      </section>
    </div>
    </div>
  );
};

const styles = {
  header: {
    marginBottom: '50px',
  },
  aboutSection: {
    marginBottom: '50px',
  },
};

export default AboutPage;
