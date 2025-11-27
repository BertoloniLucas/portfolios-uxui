import React, { useState } from 'react';
import VoleyImg from '../img/voley.png';
import FotografiaImg from '../img/fotografia.png';
import GuitarraImg from '../img/guitarra.jpeg';

const cardsData = [
    {
        id: 1,
        title: "FOTOGRAFÍA",
        image: FotografiaImg,
        description: "Soy un apasionado de la fotografía desde chiquito. Mi abuelo me regaló una cámara profesional y desde siempre intento capturar momentos de todo tipo: en la calle, de personas, paisajes y mucho más!",
        tags: ["Autodidacta", "Trabajo en equipo", "Disciplina", "Constancia"],
        rotation: -3
    },
    {
        id: 2,
        title: "VOLEY",
        image: VoleyImg,
        description: "Juego al voley hace ya 10 años. Me federé en 2018 y empecé a jugar en el club GEBA (Gimnasia y Esgrima de Buenos Aires). Al año siguiente me cambié al Club Ciudad de Buenos Aires donde poco a poco comencé una carrera profesional. Logré 3 campeonatos nacionales con mi club y me convocaron muchas veces a la Selección Argentina y Selección Metropolitana donde me destaqué como capitán.",
        tags: ["Liderazgo", "Trabajo en equipo", "Disciplina", "Constancia"],
        rotation: 2
    },
    {
        id: 3,
        title: "MÚSICA",
        image: GuitarraImg,
        description: "La música ha sido parte fundamental de mi vida. Toco la guitarra desde los 12 años y me encanta explorar diferentes géneros musicales. Creo que la música y el diseño comparten muchos principios creativos.",
        tags: ["Creatividad", "Disciplina", "Pasión", "Expresión"],
        rotation: -1.5
    }
];

const AboutMeSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('');

    const nextCard = () => {
        setDirection('next');
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
            setDirection('');
        }, 300);
    };

    const prevCard = () => {
        setDirection('prev');
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1
            );
            setDirection('');
        }, 300);
    };

    const getCardStyle = (index) => {
        const diff = index - currentIndex;
        const totalCards = cardsData.length;
        const card = cardsData[index];

        let normalizedDiff = diff;
        if (diff > totalCards / 2) normalizedDiff = diff - totalCards;
        if (diff < -totalCards / 2) normalizedDiff = diff + totalCards;

        if (normalizedDiff === 0) {
            return {
                zIndex: 3,
                transform: `translateX(0) scale(1) rotateY(0deg) rotateZ(${card.rotation}deg)`,
                opacity: 1,
                filter: 'brightness(1)'
            };
        } else if (normalizedDiff === 1) {
            return {
                zIndex: 2,
                transform: `translateX(30px) scale(0.95) rotateY(-5deg) rotateZ(${card.rotation * 0.5}deg)`,
                opacity: 0.7,
                filter: 'brightness(0.7)'
            };
        } else if (normalizedDiff === -1) {
            return {
                zIndex: 2,
                transform: `translateX(-30px) scale(0.95) rotateY(5deg) rotateZ(${card.rotation * 0.5}deg)`,
                opacity: 0.7,
                filter: 'brightness(0.7)'
            };
        } else {
            return {
                zIndex: 1,
                transform: `translateX(0) scale(0.9) rotateZ(${card.rotation * 0.3}deg)`,
                opacity: 0,
                filter: 'brightness(0.5)'
            };
        }
    };

    return (
        <section className="about-me-section">
            <div className="about-me-container">
                <div className="about-decoration left">
                    <div className="decoration-circle outline"></div>
                    <div className="decoration-line"></div>
                    <div className="decoration-circle filled"></div>
                </div>

                <div className="about-me-content">
                    <h2 className="about-me-title">ACERCA DE MÍ</h2>
                    <div className="about-me-subtitle">
                        <span>HOBBIES, INTERESES Y MÁS</span>
                    </div>

                    <div className="cards-carousel">
                        <button className="carousel-arrow left-arrow" onClick={prevCard}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <div className="cards-stack">
                            {cardsData.map((card, index) => (
                                <div
                                    key={card.id}
                                    className={`hobby-card ${direction === 'next' && index === currentIndex ? 'slide-out-left' : ''} ${direction === 'prev' && index === currentIndex ? 'slide-out-right' : ''}`}
                                    style={getCardStyle(index)}
                                >
                                    <div className="card-header-nav">
                                        <div className="nav-dots left-dots">
                                            <div className="nav-dot filled"></div>
                                            <div className="nav-dot outline"></div>
                                        </div>
                                        <h3 className="card-title">{card.title}</h3>
                                        <div className="nav-dots right-dots">
                                            <div className="nav-dot outline"></div>
                                            <div className="nav-dot filled"></div>
                                        </div>
                                    </div>

                                    <div className="card-image-container">
                                        {card.image ? (
                                            <img
                                                src={card.image}
                                                alt={card.title}
                                                className="card-image"
                                            />
                                        ) : (
                                            <div className="card-image-placeholder"></div>
                                        )}
                                    </div>

                                    <p className="card-description">{card.description}</p>

                                    <div className="card-tags">
                                        {card.tags.map((tag, idx) => (
                                            <span key={idx} className="card-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="carousel-arrow right-arrow" onClick={nextCard}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="about-decoration right">
                    <div className="decoration-circle filled"></div>
                    <div className="decoration-line"></div>
                    <div className="decoration-circle outline"></div>
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;
