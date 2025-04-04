import React from 'react';

const FeaturedProjects = () => {
    const projects = [
        {
            title: "Speech Emotion Recognition",
            description: "Recognizing emotions from speech using machine learning techniques.",
            githubLink: "https://github.com/ShrijithSM/Speech-Emotion-Recognition"
        },
        {
            title: "Election Data Visualization",
            description: "Visualize past election results and predict outcomes using ML.",
            githubLink: "https://github.com/coeusyk/election-prediction"
        },
        {
            title: "House Price Prediction Model",
            description: "This project predicts the house prices based on various features using a ML model.",
            githubLink: "https://github.com/ShrijithSM/House-Price-Predictions"
        }
    ];

    return (
        <section id="featured-projects">
            <h2>Featured Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProjects;