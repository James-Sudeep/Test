import React from 'react';
import './styles/main.css';

const About: React.FC = () => {
    return (
        <section className="about">
            <h2>About Me</h2>
            <p>
                I am a passionate developer with experience in building dynamic and responsive web applications.
                My skills include JavaScript, React, TypeScript, and more. I enjoy solving complex problems and
                continuously learning new technologies.
            </p>
            <h3>Skills</h3>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>Node.js</li>
            </ul>
            <h3>Experience</h3>
            <p>
                I have worked on various projects, ranging from small personal websites to larger applications.
                My goal is to create user-friendly and efficient solutions that meet the needs of clients and users.
            </p>
        </section>
    );
};

export default About;