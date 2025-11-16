import { useState, useEffect, useRef } from 'react'
import './App.css'
import profileImage from './img/lucas-profile.png'
import escoltaImage from './img/escolta_image.jpeg'
import SIMA_img from './img/SIMA_img.png'
import SALUD_DIGITAL_img from './img/SALUD_DIGITAL.jpg'
import TREVIAN_img from './img/TREVIAN.png'
import uca_image from './img/uca_image.JPG'
import london_image from './img/london_image.jpg'

function App() {
  const [expandedProject, setExpandedProject] = useState(0)
  const projectRefs = useRef([])
  const currentExpandedRef = useRef(0)
  const observersRef = useRef([])

  useEffect(() => {
    let ticking = false

    const checkVisibleCard = () => {
      if (ticking) return
      ticking = true

      window.requestAnimationFrame(() => {
        const viewportCenter = window.innerHeight / 2
        let closestCard = { index: currentExpandedRef.current, distance: Infinity }
        let hasVisibleCard = false

        projectRefs.current.forEach((ref, index) => {
          if (!ref) return

          const rect = ref.getBoundingClientRect()
          const cardTop = rect.top
          const cardBottom = rect.bottom
          
          const isVisible = cardTop < window.innerHeight * 0.8 && cardBottom > window.innerHeight * 0.2

          if (isVisible) {
            hasVisibleCard = true
            const cardCenter = (cardTop + cardBottom) / 2
            const distance = Math.abs(cardCenter - viewportCenter)

            if (distance < closestCard.distance) {
              closestCard = { index, distance }
            }
          }
        })

        if (hasVisibleCard && closestCard.index !== currentExpandedRef.current) {
          currentExpandedRef.current = closestCard.index
          setExpandedProject(closestCard.index)
        }

        ticking = false
      })
    }

    const handleScroll = () => {
      checkVisibleCard()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    const setupObservers = () => {
      const validRefs = projectRefs.current.filter(ref => ref !== null && ref !== undefined)
      
      if (validRefs.length === 0) {
        setTimeout(setupObservers, 100)
        return
      }

      observersRef.current.forEach(obs => {
        if (obs) obs.disconnect()
      })

      observersRef.current = projectRefs.current.map((ref) => {
        if (!ref) return null

        const observer = new IntersectionObserver(
          () => {
            checkVisibleCard()
          },
          {
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            rootMargin: '-20% 0px -20% 0px',
          }
        )

        observer.observe(ref)
        return observer
      }).filter(obs => obs !== null)

      setTimeout(() => {
        checkVisibleCard()
      }, 100)
    }

    setupObservers()

    return () => {
      observersRef.current.forEach((observer) => {
        if (observer) observer.disconnect()
      })
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const projects = [
    {
      title: 'SALUD DIGITAL',
      year: '2023',
      description: 'Explorador de archivos médicos con base de datos, la cual contiene los pacientes de los médicos y asociados a ellos, se encuntran los archivos PDF de sus los pacientes con todas las visitas que han tenido. Por otra parte, se pueden modificar estos archivos PDF y actualizar la base de datos con los cambios realizados.',
      image: SALUD_DIGITAL_img,
    },
    {
      title: 'SIMA (Sclerosis Intelligent Medical Assistant)',
      year: '2024',
      description: 'Plataforma de asistencia médica para el diagnóstico de esclerósis múltiple, utilizando técnicas de Machine Learning, en el marco de Inteligencia Artificial.',
      image: SIMA_img,
    },
    {
      title: 'Trevian',
      year: '2025',
      description: 'El proyecto consiste en una aplicación mobile que permita analizar la pisada del usuario a partir de imágenes y videos de sus pies. Utilizando algoritmos de Machine Learning, la app generará automáticamente una plantilla ortopédica personalizada en 3D, diseñada para corregir y optimizar la pisada según las necesidades del usuario.',
      image: TREVIAN_img,
    },
  ]

  return (
    <div className="app">
      <header className="navbar">
        <div className="navbar-content">
          <div className="navbar-logo">Lucas Bertoloni</div>
          <nav className="navbar-links">
            <a href="#home">Home</a>
            <a href="#acerca-de-mi">Acerca de mí</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <div className="navbar-social">
            <a href="https://www.linkedin.com/in/lucas-bertoloni-65774b339/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://github.com/BertoloniLucas" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor"/>
              </svg>
        </a>
      </div>
        </div>
      </header>

      <main className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hola, soy</p>
            <h1 className="hero-name">Lucas Bertoloni</h1>
            <p className="hero-title">Back-End Developer</p>
          </div>
          <div className="hero-image">
            <img src={profileImage} alt="Lucas Bertoloni" />
          </div>
        </div>
      </main>

      <section id="acerca-de-mi" className="about-section">
        <div className="about-container">
          <h2 className="section-title">ACERCA DE MÍ</h2>
          <p className="about-text">Soy desarrollador de software orientado al backend, apasionado por crear sistemas robustos y bien estructurados. Trabajo con Node.js, Express, Prisma, JWT, y despliegues serverless. Disfruto resolver problemas, optimizar lógica de negocio y aprender nuevas tecnologías constantemente. Soy apasionado por el deporte y disfruto de las salidas con amigos y familia.</p>

          <h3 className="subsection-title">IDIOMAS</h3>
          <ul className="languages-list">
            <li>Español: Nativo</li>
            <li>Inglés: Avanzado (C1) - Cambridge Assessment English</li>
            <li>Hebreo: Básico</li>
          </ul>

          <h3 className="subsection-title">FORMACIÓN ACADÉMICA</h3>
          <div className="education-item">
            <h4 className="education-title">Bachiller en Informática</h4>
            <p className="education-years">2020 • 2025</p>
            <p className="education-institution">Escuela Técnica ORT Belgrano</p>
          </div>
        </div>
      </section>

      <section id="proyectos" className="projects-section">
        <div className="projects-container">
          <h2 className="section-title">PROYECTOS</h2>
          <div className="projects-list">
            {projects.map((project, index) => (
              <div
                key={index}
                ref={(el) => (projectRefs.current[index] = el)}
                className={`project-card ${expandedProject === index ? 'expanded' : ''}`}
              >
                <div className="project-card-header">
                  <div className="project-card-title-group">
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-year">Desarrollado en {project.year}</p>
                  </div>
                  <div className="project-card-chevron">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d={expandedProject === index ? 'M7 14L12 9L17 14' : 'M7 10L12 15L17 10'}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="project-card-content">
                  <div className="project-card-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <p className="project-card-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="logros" className="achievements-section">
        <div className="achievements-container">
          <h2 className="section-title">LOGROS</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-image">
                <img src={escoltaImage} alt="Escolta" />
              </div>
              <h3 className="achievement-title">Escolta</h3>
              <p className="achievement-description">Fui seleccionado como escolta a la bandera nacional en mi escuela por tener uno de los mejores promedios generales de mi camada (9,8). Me posicioné en el lugar 7 de mi camada, entre 514 alumnos.</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-image">
                <img src={london_image} alt="CLAYSS at UCA" />
              </div>
              <h3 className="achievement-title">Viaje de estudios a Londres</h3>
              <p className="achievement-description">Fui seleccionado a un viaje de estudios a Londres, en el cual tuve la oportunidad de conocer la cultura y la vida de la ciudad europea. Este logro también se vio posibilitado gracias a mi desempeño escolar.</p>
            </div>
            <div className="achievement-card achievement-card-centered">
            <div className="achievement-image">
                <img src={uca_image} alt="CLAYSS at UCA" />
              </div>
              <h3 className="achievement-title">Orador</h3>
              <p className="achievement-description">Gracias al gran desarrollo del proyecto SIMA en el año 2024 y durante la cursada de 4to año en la escuela secundaria, fuimos seleccionados para tener la oportunidad de participar del panel llamado "Los proyectos de aprendizaje-servicio solidario en tiempos de IA" en el congreso de CLAYSS en 2025, realizado en el auditorio principal de la UCA (Universidad Católica Argentina)</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="contact-section">
        <div className="contact-container">
          <h2 className="section-title">CONTACTO</h2>
          <ul className="languages-list">
            <li>✉️ Email: lucasbertoloni5@gmail.com</li>
            <li>📞 Phone Number (AR Code): +54 911 7008 8958</li>
          </ul>
        </div>
      </section>
      </div>
  )
}

export default App
