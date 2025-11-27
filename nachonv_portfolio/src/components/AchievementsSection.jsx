import React, { useState } from 'react';

const achievementsData = [
    {
        id: 1,
        title: "CONCURSO DE COMUNICACIÓN STEM WORLD ORT",
        image: null,
        description: "En 2024 fui seleccionado por mi escuela para viajar a Panamá a una escuela de verano sobre ecología."
    },
    {
        id: 2,
        title: "VIAJE A PANAMÁ",
        image: null,
        description: "En 2024 fui seleccionado por mi escuela para viajar a Panamá a una escuela de verano sobre ecología."
    },
    {
        id: 3,
        title: "VIAJE A LONDRES",
        image: null,
        description: "En 2024 fui seleccionado por mi escuela para viajar a Panamá a una escuela de verano sobre ecología."
    }
];

const AchievementsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextAchievement = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % achievementsData.length);
    };

    const prevAchievement = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? achievementsData.length - 1 : prevIndex - 1
        );
    };

    const getCardStyle = (index) => {
        const diff = index - currentIndex;
        const totalCards = achievementsData.length;

        let normalizedDiff = diff;
        if (diff > totalCards / 2) normalizedDiff = diff - totalCards;
        if (diff < -totalCards / 2) normalizedDiff = diff + totalCards;

        if (normalizedDiff === 0) {
            return {
                zIndex: 3,
                transform: 'translateX(-15%) scale(1)',
                opacity: 1,
                filter: 'brightness(1)'
            };
        }
        else if (normalizedDiff === 1) {
            return {
                zIndex: 2,
                transform: 'translateX(35%) scale(0.75)',
                opacity: 0.8,
                filter: 'brightness(0.8)'
            };
        }
        else if (normalizedDiff === 2 || normalizedDiff === -1) {
            return {
                zIndex: 1,
                transform: 'translateX(75%) scale(0.55)',
                opacity: 0.6,
                filter: 'brightness(0.6)'
            };
        }
        else {
            return {
                zIndex: 0,
                transform: 'translateX(100%) scale(0.4)',
                opacity: 0,
                filter: 'brightness(0.4)'
            };
        }
    };

    return (
        <section className="achievements-section">
            <div className="achievements-container">
                <div className="achievements-decoration left">
                    <div className="decoration-circle outline"></div>
                    <div className="decoration-line"></div>
                    <div className="decoration-circle filled"></div>
                </div>

                <div className="achievements-content">
                    <h2 className="achievements-title">LOGROS</h2>
                    <div className="achievements-subtitle">
                        <span>CONCURSOS, VIAJES Y OTRAS EXPERIENCIAS</span>
                    </div>

                    <div className="achievements-carousel">
                        <div className="achievements-cards-container">
                            {achievementsData.map((achievement, index) => (
                                <div
                                    key={achievement.id}
                                    className="achievement-card"
                                    style={getCardStyle(index)}
                                >
                                    <div className="achievement-image-container">
                                        {achievement.image ? (
                                            <img src={achievement.image} alt={achievement.title} className="achievement-image" />
                                        ) : (
                                            <div className="achievement-image-placeholder"></div>
                                        )}
                                    </div>

                                    <div className="achievement-content">
                                        <h3 className="achievement-title">{achievement.title}</h3>
                                        <p className="achievement-description">{achievement.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="achievements-navigation">
                            <button className="achievement-arrow" onClick={prevAchievement}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button className="achievement-arrow" onClick={nextAchievement}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="achievements-decoration right">
                    <div className="decoration-circle filled"></div>
                    <div className="decoration-line"></div>
                    <div className="decoration-circle outline"></div>
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;
