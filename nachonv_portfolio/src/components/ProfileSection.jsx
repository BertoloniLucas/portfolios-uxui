import React from 'react';

const ProfileSection = () => {
    return (
        <div className="profile-section card">
            <div className="profile-image-container">
                {/* Placeholder for image - user said they will add it later */}
                <div className="profile-image-placeholder">
                    {/* We can put a temporary image or icon here if needed */}
                </div>
            </div>
            <div className="profile-info">
                <div className="profile-header">
                    <h1 className="profile-name">IGNACIO NUÑEZ VALCARCE</h1>
                    <div className="profile-role-badge">Diseñador</div>
                </div>
                <div className="profile-tags">
                    <span className="tag">Diseño UX</span>
                    <span className="tag">UX Research</span>
                    <span className="tag">Diseño UI</span>
                    <span className="tag">Diseño gráfico</span>
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;
