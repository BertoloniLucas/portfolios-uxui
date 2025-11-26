import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="card-header">
                <div className="project-title-row">
                    <span className="bullet">•</span>
                    <h3 className="project-title">{project.title}</h3>
                    {project.subtitle && <span className="project-subtitle"> - {project.subtitle}</span>}
                </div>
                <div className="header-line"></div>
            </div>

            <div className="card-content">
                <div className="project-image-container">
                    {/* Placeholder for actual project images/logos */}
                    {project.image ? (
                        <img src={project.image} alt={project.title} className="project-image" />
                    ) : (
                        <div className="project-logo-placeholder">
                            {/* Simple text placeholder if no image */}
                            <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>{project.title}</span>
                        </div>
                    )}
                </div>

                <div className="project-details">
                    <p className="project-description">
                        {project.description}
                    </p>

                    <div className="project-learning">
                        <h4>APRENDIZAJE</h4>
                        <p>{project.learning}</p>
                    </div>
                </div>
            </div>

            <div className="project-year">
                {project.year}
            </div>
        </div>
    );
};

export default ProjectCard;
