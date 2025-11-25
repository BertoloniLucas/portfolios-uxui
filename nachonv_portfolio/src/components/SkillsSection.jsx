import React from 'react';

const SkillsSection = () => {
    const skills = [
        "Liderazgo", "Creatividad", "Innovación",
        "Proactivo", "Trabajo en equipo", "Adaptativo"
    ];

    return (
        <div className="skills-section card">
            <h2 className="section-title">HABILIDADES PERSONALES</h2>
            <div className="skills-container">
                {skills.map(skill => (
                    <span key={skill} className="skill-pill">{skill}</span>
                ))}
            </div>
        </div>
    );
};

export default SkillsSection;
