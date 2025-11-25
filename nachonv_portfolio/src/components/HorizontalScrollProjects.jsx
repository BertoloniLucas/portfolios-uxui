import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
    {
        id: 1,
        title: "STUDY BUDDY",
        year: "2023",
        description: "El proyecto consiste en una aplicación mobile que permita analizar la pisada del usuario a partir de imágenes y videos de sus pies. Utilizando algoritmos de Machine Learning, la app generará automáticamente una plantilla ortopédica personalizada en 3D, diseñada para corregir y optimizar la pisada según las necesidades del usuario.",
        learning: "Con este proyecto mejoré ampliamente mis habilidades en diseño UX/UI",
        color: "#0a192f", // Dark blue from image
        image: null // Placeholder
    },
    {
        id: 2,
        title: "SIMA",
        subtitle: "SCLEROSIS INTELLIGENT MEDICAL ASSISTANT",
        year: "2024",
        description: "SIMA es un detector de esclerosis múltiple con algoritmos de Machine Learning. SIMA es un detector de esclerosis múltiple con algoritmos de Machine Learning. SIMA es un detector de esclerosis múltiple con algoritmos de Machine Learning.",
        learning: "Con este proyecto mejoré ampliamente mis habilidades en diseño UX/UI",
        color: "#ffffff", // White bg from image
        image: null // Placeholder
    },
    {
        id: 3,
        title: "Trevian",
        subtitle: "SCLEROSIS INTELLIGENT MEDICAL ASSISTANT", // Copying subtitle structure, adjust if needed
        year: "2025",
        description: "El proyecto consiste en una aplicación mobile que permita analizar la pisada del usuario a partir de imágenes y videos de sus pies. Utilizando algoritmos de Machine Learning, la app generará automáticamente una plantilla ortopédica personalizada en 3D.",
        learning: "Con este proyecto mejoré ampliamente mis habilidades en diseño UX/UI",
        color: "#050511", // Very dark blue/black
        image: null // Placeholder
    }
];

const HorizontalScrollProjects = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

    return (
        <section ref={targetRef} className="horizontal-scroll-section">
            <div className="sticky-container">
                <motion.div style={{ x }} className="projects-track">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HorizontalScrollProjects;
