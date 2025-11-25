import React from 'react';
import '../App.css';

const LandingPage = () => {
    return (
        <div className="portfolio-container">
            <div className="header-section">
                <div className="decorative-circle"></div>
                <div className="metadata-box">
                    <span>2025</span>
                </div>
            </div>

            <div className="title-section">
                <h1 className="main-title">
                    PORTFOLIO
                </h1>
                <div className="blur-overlay blur-1"></div>
                <div className="blur-overlay blur-2"></div>
            </div>

            <div className="footer-section">
                <div className="decorative-dot"></div>
                <div className="name-box">
                    <span>Ignacio Nuñez Valcarce</span>
                </div>
            </div>
            <style>
                {`
                    @keyframes bounce {
                        0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
                        40% {transform: translateY(-10px);}
                        60% {transform: translateY(-5px);}
                    }
                `}
            </style>
        </div>
    );
};

export default LandingPage;
