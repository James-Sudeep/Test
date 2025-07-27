import React from 'react';

const projects = [
    {
        title: 'Project One',
        description: 'A brief description of Project One.',
        link: 'https://github.com/username/project-one',
    },
    {
        title: 'Project Two',
        description: 'A brief description of Project Two.',
        link: 'https://github.com/username/project-two',
    },
    {
        title: 'Project Three',
        description: 'A brief description of Project Three.',
        link: 'https://github.com/username/project-three',
    },
];

const Projects: React.FC = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;