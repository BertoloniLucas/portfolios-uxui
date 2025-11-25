import React from 'react';

const ProjectsSeparator = () => {
    return (
        <div className="projects-separator">
            {/* Left Decoration */}
            <div className="separator-decoration left">
                <div className="circle outline"></div>
                <div className="line"></div>
                <div className="circle filled"></div>
            </div>

            {/* Center Content */}
            <div className="separator-content">
                <h2 className="separator-title">PROYECTOS</h2>
                <div className="separator-subtitle">
                    <span>PROYECTOS ESCOLARES</span>
                </div>
            </div>

            {/* Right Decoration */}
            <div className="separator-decoration right">
                <div className="circle filled"></div>
                <div className="line"></div>
                <div className="circle outline"></div>
            </div>
        </div>
    );
};

export default ProjectsSeparator;
