import React from 'react';
import { Lucide } from 'lucide-react';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>My Portfolio</h1>
        <nav className="nav">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <section id="about" className="section">
          <h2>About Me</h2>
          <div className="about-content">
            <p>Welcome to my portfolio! I'm a passionate developer with experience in building modern web applications.</p>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>My Projects</h2>
          <div className="projects-grid">
            {/* Projects will be added here */}
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {/* Skills will be added here */}
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact Me</h2>
          <div className="contact-form">
            {/* Contact form will be added here */}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
