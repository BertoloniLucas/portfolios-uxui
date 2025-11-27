import React from 'react';
import NiholLogo1 from '../img/nihol_logo1.png';
import NiholLogo2 from '../img/nihol_2.png';

const NiholProject = () => {
    return (
        <section className="nihol-project-section">
            <div className="nihol-container">
                <div className="nihol-header">
                    <div className="yellow-dot"></div>
                    <h2 className="nihol-title">NIHOL</h2>
                </div>

                <div className="nihol-rebranding">
                    <h3 className="rebranding-label">REBRANDING</h3>

                    <div className="nihol-content">
                        <div className="content-column">
                            <p>
                                En Fundación Nihol trabajé creando la identidad de marca
                                para una organización dedicada a preservar testimonios y
                                acompañar a sobrevivientes del Holocausto. Realicé
                                entrevistas con miembros clave, aplicando dinámicas y
                                pequeños juegos para descubrir los conceptos esenciales
                                de la institución y su sensibilidad histórica y humana.
                            </p>
                        </div>
                        <div className="content-column">
                            <p>
                                Nihol fue un proyecto profundamente humano, donde
                                aprendí que diseñar también es un acto de escucha,
                                respeto y sensibilidad cultural. Descubrí cómo conducir
                                entrevistas que no solo buscan información, sino
                                emociones y valores ocultos. Aprendí a traducir conceptos
                                abstractos—memoria, dignidad, legado— en elementos
                                visuales concretos. También fortalecí mi capacidad de
                                trabajar con stakeholders sensibles, entendiendo que
                                esa interacción en decisiones de diseño. Este proyecto me
                                enseñó que, cuando se diseña para causas sociales, el
                                diseño debe ser empático, ético y honesto.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="nihol-logos">
                    <div className="logo-item">
                        <p className="logo-label">Logo anterior</p>
                        <div className="logo-display old-logo">
                            <img src={NiholLogo1} alt="Logo anterior de NIHOL" className="nihol-logo-image" />
                        </div>
                    </div>
                    <div className="logo-item">
                        <p className="logo-label">Nuevo logo</p>
                        <div className="logo-display new-logo">
                            <img src={NiholLogo2} alt="Nuevo logo de NIHOL" className="nihol-logo-image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NiholProject;
