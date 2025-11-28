import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import ProjectCard from './ProjectCard';
import StuddyBuddyImg from '../img/studdybuddy.png';
import SimaImg from '../img/sima.png';
import TrevianImg from '../img/trevian.png';

const projects = [
    {
        id: 1,
        title: "STUDY BUDDY",
        year: "2023",
        description: "El proyecto consiste en una aplicación mobile que permita analizar la pisada del usuario a partir de imágenes y videos de sus pies. Utilizando algoritmos de Machine Learning, la app generará automáticamente una plantilla ortopédica personalizada en 3D, diseñada para corregir y optimizar la pisada según las necesidades del usuario.",
        learning: "Con Study Buddy aprendí a empatizar con un usuario real, especialmente adolescentes con necesidades muy concretas pero variadas. Fue mi primera experiencia aplicando técnicas de investigación como encuestas y entrevistas simples, y entendí la importancia de transformar insights en decisiones de diseño. También fue un proyecto donde empecé a dominar la arquitectura de información, simplificando funciones para que fueran accesibles y no abrumaran al usuario. Sobre todo, aprendí que un buen diseño educativo debe ser motivador y humano, no solo funcional.",
        color: "#0a192f",
        image: StuddyBuddyImg
    },
    {
        id: 2,
        title: "SIMA",
        subtitle: "SCLEROSIS INTELLIGENT MEDICAL ASSISTANT",
        year: "2024",
        description: "SIMA es un detector de esclerosis múltiple con algoritmos de Machine Learning. SIMA es un detector de esclerosis múltiple con algoritmos de Machine Learning. SIMA es un detector de esclerosis múltiple con algoritmos de Machine Learning.",
        learning: "En SIMA aprendí a diseñar para un contexto altamente sensible, donde cada decisión tiene impacto real en la salud del usuario final. Tuve que trabajar con conceptos clínicos, entender cómo piensan los profesionales médicos y diseñar flujos que minimizaran errores. También desarrollé habilidades en comunicación visual para datos complejos, simplificando información clínica sin perder rigor. Más allá del diseño, SIMA me enseñó la importancia de crear experiencias que transmitan confianza, precisión y ética.",
        color: "#ffffff",
        image: SimaImg
    },
    {
        id: 3,
        title: "Trevian",
        year: "2025",
        description: "El proyecto consiste en una aplicación mobile que permita analizar la pisada del usuario a partir de imágenes y videos de sus pies. Utilizando algoritmos de Machine Learning, la app generará automáticamente una plantilla ortopédica personalizada en 3D.",
        learning: "Trevian consolidó mi capacidad para diseñar productos digitales complejos, donde intervienen múltiples etapas del usuario: carga de medios, análisis biomecánico, personalización de producto y compra. Fue un proyecto donde tuve que pensar en la experiencia completa, desde la interfaz hasta la marca, el flujo de compra y la interacción con tecnología avanzada. Aprendí sobre service design, product thinking y la importancia de conectar lo técnico con lo humano. También reforcé mi habilidad para crear identidades visuales sólidas y coherentes con la propuesta del producto.",
        color: "#050511",
        image: TrevianImg
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
