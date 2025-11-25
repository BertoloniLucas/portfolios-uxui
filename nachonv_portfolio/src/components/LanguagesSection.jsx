import React from 'react';
import { Star } from 'lucide-react';

const LanguagesSection = () => {
    const languages = [
        { name: 'Español', level: 'Lengua nativa', stars: 5, flag: '🇪🇸' },
        { name: 'Inglés', level: 'Nivel B2', stars: 4, flag: '🇬🇧' },
        { name: 'Italiano', level: 'Nivel intermedio', stars: 3.5, flag: '🇮🇹' },
    ];

    return (
        <div className="languages-section card">
            <h2 className="section-title">IDIOMAS</h2>
            <div className="languages-list">
                {languages.map(lang => (
                    <div key={lang.name} className="language-item">
                        <div className="language-info">
                            <span className="flag">{lang.flag}</span>
                            <span className="language-name">{lang.name}</span>
                        </div>
                        <div className="language-rating">
                            <div className="stars">
                                {[1, 2, 3, 4, 5].map(star => {
                                    const isFilled = star <= lang.stars;
                                    const isHalf = star === Math.ceil(lang.stars) && !Number.isInteger(lang.stars);

                                    return (
                                        <Star
                                            key={star}
                                            size={18}
                                            className={`star ${isFilled ? 'filled' : ''} ${isHalf ? 'half' : ''}`}
                                            fill={isFilled ? "#ff9900" : (isHalf ? "url(#half)" : "transparent")}
                                            stroke="#333"
                                            strokeWidth={1.5}
                                        />
                                    );
                                })}
                            </div>
                            <span className="language-level">{lang.level}</span>
                        </div>
                    </div>
                ))}
            </div>
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                    <linearGradient id="half" x1="0" x2="100%" y1="0" y2="0">
                        <stop offset="50%" stopColor="#ff9900" />
                        <stop offset="50%" stopColor="transparent" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default LanguagesSection;
