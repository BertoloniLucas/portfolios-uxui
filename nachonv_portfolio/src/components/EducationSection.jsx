import React from 'react';

const EducationSection = () => {
    return (
        <div className="education-section card">
            <h2 className="section-title">EDUCACIÓN</h2>

            <div className="education-item">
                <div className="year-badge">2013 ~ 2019</div>
                <h3 className="school-name">Scuola Italiana Cristoforo Colombo</h3>
                <p className="degree">Primaria</p>
            </div>

            <div className="education-item">
                <div className="year-badge">2020 ~ 2025</div>
                <h3 className="school-name">Escuela Técnica ORT N°2</h3>
                <p className="degree">Secundaria</p>
            </div>

            <div className="education-item">
                <div className="year-badge">Próximamente</div>
                <h3 className="school-name">Universidad de San Andrés</h3>
                <p className="degree">Universitario</p>
            </div>
        </div>
    );
};

export default EducationSection;
