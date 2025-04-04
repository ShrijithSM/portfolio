import React from 'react';

const TechStack = () => {
    const techStack = [
        "Python", "Java", "HTML5", "Heroku", "Google Cloud", 
        "Flask", "Jenkins", "MongoDB", "MySQL", "SQLite", 
        "Figma", "Canva", "Adobe", "Matplotlib", "NumPy", 
        "Pandas", "Plotly", "scikit-learn", "Scipy", "Git", "GitHub"
    ];

    return (
        <section id="tech-stack">
            <h2>Tech Stack</h2>
            <ul>
                {techStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
        </section>
    );
};

export default TechStack;