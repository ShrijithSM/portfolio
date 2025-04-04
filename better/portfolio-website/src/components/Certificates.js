import React from 'react';

const Certificates = () => {
    const certificates = [
        {
            title: "IBM AI Developer Professional Certificate",
            description: "A comprehensive program by IBM that covers AI, machine learning, and deployment. It equips learners with practical skills to design, build, and deploy AI-powered solutions, making it ideal for aspiring AI developers.",
            link: "https://coursera.org/share/3dc57c9186755c2d6045ab2ab37ff2f3"
        },
        {
            title: "Python for Data Science, AI & Development",
            description: "An introductory course by IBM that covers Python programming, data analysis, visualization, and essential libraries like Pandas, NumPy, and Matplotlib. It provides hands-on experience in applying Python for AI and data science, making it ideal for beginners aiming to build a strong foundation in these fields.",
            link: "https://coursera.org/share/ec5af17ad66d6860c0fd8b76883b86f3"
        },
        {
            title: "Generative AI-Powered Applications with Python",
            description: "This certificate focuses on building AI-powered applications using Python, covering generative AI concepts, tools, and practical implementations to create innovative solutions.",
            link: "https://coursera.org/share/3df108ee1d8808b10581315924e67384"
        }
    ];

    return (
        <div className="certificates">
            <h2>Certificates</h2>
            <ul>
                {certificates.map((cert, index) => (
                    <li key={index}>
                        <h3>{cert.title}</h3>
                        <p>{cert.description}</p>
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Certificates;