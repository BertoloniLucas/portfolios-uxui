import React from 'react';
import ProfileSection from './ProfileSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';
import LanguagesSection from './LanguagesSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';

const Portfolio = () => {
    return (
        <div className="bento-wrapper">
            <div className="bento-grid">
                <ProfileSection />
                <EducationSection />
                <SkillsSection />
                <LanguagesSection />
                <AboutSection />
                <ContactSection />
            </div>
        </div>
    );
};

export default Portfolio;
