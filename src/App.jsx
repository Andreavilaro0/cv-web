import { useRef, Suspense, lazy } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

// Lazy load heavy 3D component (Three.js ~500KB)
const Hero3DText = lazy(() => import('./Hero3D'))

// Optimized images (WebP) and video (MP4)
import fotoNueva from './assets/foto-nueva.webp'
import portfolioHero from './assets/projects/portfolio-hero-new.webp'
import portfolioGallery from './assets/projects/portfolio-gallery-new.webp'
import roboticsImg2 from './assets/projects/udit-robotics-2.webp'
import robotRender from './assets/projects/robot-3d-render.webp'
import isoVideo from './assets/projects/iso.mp4'

// Fast, snappy transitions
const fast = { duration: 0.3, ease: [0.2, 0, 0, 1] }
const snappy = { type: 'spring', stiffness: 400, damping: 30 }

// Title reveal animation
const titleReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0, 1] }
  }
}

// 3D Loading fallback
function Hero3DFallback() {
  return (
    <div className="hero-3d-container hero-3d-fallback">
      <div className="hero-title-fallback">
        <span className="title-andrea">ANDREA</span>
        <span className="title-avila">AVILA</span>
      </div>
    </div>
  )
}

function App() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -100])

  return (
    <div className="app" ref={containerRef}>
      
      {/* Fixed Header */}
      <motion.header className="fixed-header" style={{ y: headerY }}>
        <div className="header-left">
          <span className="header-name">Andrea Avila</span>
          <span className="header-role">Full Stack Dev</span>
        </div>
        <nav className="header-nav">
          <a href="#about">Sobre mi</a>
          <a href="#experience">Experiencia</a>
          <a href="#skills">Skills</a>
          <a href="#work">Proyectos</a>
          <a href="#contact" className="nav-contact">Contacto</a>
        </nav>
      </motion.header>

      {/* HERO - Bold Typography */}
      <section className="hero">
        <div className="hero-content">
          <motion.div
            className="hero-intro"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...fast, delay: 0.1 }}
          >
            <span className="hero-year">2025</span>
            <span className="hero-location">Madrid, ES</span>
          </motion.div>

          <div className="hero-main">
            <motion.div
              className="hero-title-3d"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Suspense fallback={<Hero3DFallback />}>
                <Hero3DText />
              </Suspense>
            </motion.div>

            <motion.div
              className="hero-photo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...snappy, delay: 0.3 }}
            >
              <img src={fotoNueva} alt="Andrea Avila" />
              <span className="photo-label">Dev</span>
            </motion.div>
          </div>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...fast, delay: 0.4 }}
          >
            Estudiante de desarrollo que aprende haciendo — hackatones,
            <br />competiciones, y proyectos que van mas alla del aula.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...fast, delay: 0.5 }}
          >
            <a href="#work" className="btn-primary">Ver proyectos</a>
            <a href="#contact" className="btn-secondary">Hablemos</a>
          </motion.div>
        </div>

        <motion.div
          className="hero-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span>Scroll</span>
          <div className="scroll-line" />
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <div className="about-layout">
          <div className="about-header">
            <SectionHeader tag="01" title="Sobre mi" />
          </div>

          <div className="about-content">
            <p className="about-text">
              No espero a que me enseñen — <strong>busco los retos</strong>. Hackatones,
              competiciones de robotica, proyectos personales. Cada oportunidad
              de construir algo es una oportunidad de aprender.
            </p>
            <p className="about-text">
              Vengo de gestionar un negocio familiar en Mexico. Esa experiencia
              me enseño a resolver problemas reales, no solo ejercicios de clase.
            </p>
          </div>

          <div className="about-stats">
            <Stat number="4°" label="Semestre" />
            <Stat number="10+" label="Tecnologias" />
            <Stat number="2028" label="Graduacion" />
          </div>
        </div>
      </section>

      {/* INTERESTS */}
      <section id="interests" className="interests">
        <div className="interests-layout">
          <div className="interests-header">
            <SectionHeader tag="02" title="Fuera del codigo" />
          </div>

          <div className="interests-grid">
            <Interest icon="◐" title="Diseño" desc="UI, grafico, editorial, tipografico — si tiene que ver con diseño, me interesa." />
            <Interest icon="◎" title="Fotografia" desc="Especialmente street photography. Capturar momentos reales en la ciudad." />
            <Interest icon="●" title="Cafe" desc="De especialidad. V60, Chemex, AeroPress — el ritual completo." />
            <Interest icon="♟" title="Ajedrez" desc="Tomando clases. Aprendiendo a pensar varios movimientos adelante." />
            <Interest icon="♪" title="Guitarra" desc="Principiante pero constante. Otro hobby para llenar el tiempo libre." />
            <Interest icon="∞" title="Aprendizaje" desc="Siempre buscando nuevas habilidades. Si no estoy programando, estoy aprendiendo algo." />
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="experience">
        <div className="experience-layout">
          <div className="experience-header">
            <SectionHeader tag="03" title="Experiencia" />
          </div>

          <div className="timeline">
            <TimelineItem
              period="2025"
              role="Indesia Hack"
              company="2da Edicion"
              desc="48 horas, un equipo, un problema real. Segunda participacion consecutiva."
              current
            />
            <TimelineItem
              period="2025"
              role="ASTI Robotics Challenge"
              company="Competicion Nacional"
              desc="De 50+ equipos universitarios, clasificamos entre los finalistas. Mi rol: desarrollo de software."
            />
            <TimelineItem
              period="2024"
              role="Indesia Hack"
              company="1ra Edicion"
              desc="Primera participacion en hackaton universitario."
            />
            <TimelineItem
              period="2024 — Presente"
              role="Estudiante Full Stack"
              company="UDIT Madrid"
              desc="4to semestre del grado en Desarrollo Full Stack. Participacion activa en hackatones y proyectos colaborativos."
            />
            <TimelineItem
              period="2021 — 2023"
              role="Negocios Internacionales"
              company="Universidad Panamericana (Mexico)"
              desc="Estudios no completados. Gestion juridica, economica, publicidad y analisis historico de la economia."
            />
            <TimelineItem
              period="Adolescencia"
              role="Multiples Roles"
              company="Negocio Familiar (Mexico)"
              desc="Antes de escribir codigo, aprendi a resolver problemas de verdad: clientes, inventario, contrataciones. Todo cuenta."
            />
          </div>

          <div className="experience-extra">
            <div className="language-badge native">
              <span className="lang-level">C2</span>
              <span className="lang-name">Español</span>
              <span className="lang-tag">Nativo</span>
            </div>
            <div className="language-badge">
              <span className="lang-level">B2</span>
              <span className="lang-name">Ingles</span>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="skills">
        <div className="skills-header">
          <SectionHeader tag="04" title="Habilidades" />
        </div>

        <div className="skills-layout">
          <div className="skills-column">
            <h3 className="skills-category">Frontend</h3>
            <SkillRow name="HTML/CSS" level={85} />
            <SkillRow name="JavaScript" level={40} />
            <SkillRow name="React" level={30} learning />
          </div>

          <div className="skills-column">
            <h3 className="skills-category">Backend</h3>
            <SkillRow name="PHP/Laravel" level={25} learning />
            <SkillRow name="C++" level={50} />
            <SkillRow name="SQL" level={45} />
          </div>

          <div className="skills-column">
            <h3 className="skills-category">Tools</h3>
            <SkillRow name="Git" level={75} />
            <SkillRow name="Docker" level={20} learning />
            <SkillRow name="Vite" level={60} />
          </div>

          <div className="skills-column">
            <h3 className="skills-category">AI & More</h3>
            <SkillRow name="Claude/GPT" level={80} />
            <SkillRow name="Antigravity" level={70} />
            <SkillRow name="Figma" level={50} />
          </div>
        </div>

        <p className="skills-focus">Aprendiendo: React, PHP/Laravel, Docker</p>
      </section>

      {/* PROJECTS */}
      <section id="work" className="projects">
        <div className="projects-header">
          <SectionHeader tag="05" title="Proyectos" large />
        </div>

        <Project
          num="01"
          title="Capturing Moments"
          description="Portafolio de fotografia con diseno editorial, animaciones GSAP y galeria dinamica."
          tags={['HTML/CSS', 'JavaScript', 'GSAP']}
          images={[portfolioHero, portfolioGallery]}
          link="https://andreavilaro0.github.io/plantilla/"
        />

        <Project
          num="02"
          title="ASTI Robotics"
          description="Clasificada para la final del ASTI Robotics Challenge, la competicion universitaria mas importante de Espana."
          tags={['Robotica', 'Equipo', 'Innovacion']}
          images={[robotRender, roboticsImg2]}
          link="https://www.udit.es/proyectos-de-exito/tres-nuevos-equipos-de-estudiantes-de-udit-se-clasifican-para-la-final-del-asti-robotics-challenge/"
        />

        <Project
          num="03"
          title="Sistemas Operativos"
          description="Proyecto de simulacion de sistemas operativos con gestion de procesos y memoria."
          tags={['C', 'Sistemas', 'Universidad']}
          video={isoVideo}
          link="https://github.com/gabrielcclv/SistemasOperativos"
        />

        <Project
          num="04"
          title="Gestion de Libreria"
          description="Sistema de gestion de libreria con inventario, ventas y clientes implementado en C++."
          tags={['C++', 'POO', 'Universidad']}
          link="https://github.com/Andreavilaro0/Proyecto-libreria"
        />

        <Project
          num="05"
          title="Gestion de Hospital"
          description="Sistema de gestion hospitalaria con pacientes, doctores y citas medicas en C++."
          tags={['C++', 'POO', 'Universidad']}
          link="https://github.com/Andreavilaro0/Proyecto-Hospital"
        />
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="contact-inner">
          <SectionHeader tag="06" title="Hablemos" center />

          <p className="contact-subtitle">
            Busco practicas donde pueda aportar energia y aprender de equipos
            <br />con experiencia. Si tu empresa valora gente que no espera
            <br />instrucciones, hablemos.
          </p>

          <div className="contact-grid">
            <a href="mailto:andrea.avila@alumnos.udit.es" className="contact-card">
              <span className="contact-card-icon">@</span>
              <span className="contact-card-label">Email</span>
              <span className="contact-card-value">andrea.avila@alumnos.udit.es</span>
            </a>
            <a href="https://www.linkedin.com/in/andrea-avila-rodiguez-801025398" target="_blank" rel="noopener noreferrer" className="contact-card">
              <span className="contact-card-icon">in</span>
              <span className="contact-card-label">LinkedIn</span>
              <span className="contact-card-value">Andrea Avila</span>
            </a>
            <a href="https://github.com/Andreavilaro0" target="_blank" rel="noopener noreferrer" className="contact-card">
              <span className="contact-card-icon">&lt;/&gt;</span>
              <span className="contact-card-label">GitHub</span>
              <span className="contact-card-value">Andreavilaro0</span>
            </a>
          </div>

          <div className="contact-available">
            <span className="available-dot" />
            <span>Buscando practicas extracurriculares</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span>Andrea Avila © 2025</span>
        <span>Hecho con codigo y cafe</span>
      </footer>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════════════════════ */

function SectionHeader({ tag, title, large, center }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      className={center ? 'section-header-center' : ''}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={titleReveal}
    >
      <span className="section-tag">{tag}</span>
      <h2 className={large ? 'section-title-xl' : (center ? 'contact-title' : 'section-title')}>{title}</h2>
    </motion.div>
  )
}

function Stat({ number, label }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className="stat"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={fast}
    >
      <span className="stat-number">{number}</span>
      <span className="stat-label">{label}</span>
    </motion.div>
  )
}

function Interest({ icon, title, desc }) {
  return (
    <motion.div
      className="interest-card"
      whileHover={{ y: -4 }}
      transition={fast}
    >
      <span className="interest-icon">{icon}</span>
      <h3 className="interest-title">{title}</h3>
      <p className="interest-desc">{desc}</p>
    </motion.div>
  )
}

function TimelineItem({ period, role, company, desc, current }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className={`timeline-item ${current ? 'current' : ''}`}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={fast}
    >
      <div className="timeline-marker">
        <span className="timeline-dot" />
        <span className="timeline-line" />
      </div>
      <div className="timeline-content">
        <span className="timeline-period">{period}</span>
        <h3 className="timeline-role">{role}</h3>
        <span className="timeline-company">{company}</span>
        <p className="timeline-desc">{desc}</p>
      </div>
    </motion.div>
  )
}

function SkillRow({ name, level, learning }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className={`skill-row ${learning ? 'learning' : ''}`}>
      <span className="skill-name">
        {name}
        {learning && <span className="learning-badge">*</span>}
      </span>
      <div className="skill-bar">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1], delay: 0.1 }}
        />
      </div>
      <span className="skill-percent">{level}%</span>
    </div>
  )
}

function Project({ num, title, description, tags, images, video, link }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.article
      ref={ref}
      className="project"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={fast}
    >
      <div className="project-info">
        <span className="project-num">{num}</span>
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-tags">
          {tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          whileHover={{ x: 8 }}
          transition={snappy}
        >
          Ver proyecto <span>→</span>
        </motion.a>
      </div>

      <div className="project-media">
        {video ? (
          <motion.div
            className="project-video"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...fast, delay: 0.1 }}
          >
            <video autoPlay muted loop playsInline>
              <source src={video} type="video/mp4" />
            </video>
          </motion.div>
        ) : images ? (
          images.map((img, i) => (
            <motion.div
              key={i}
              className="project-img"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...fast, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <img src={img} alt={`${title} ${i + 1}`} />
            </motion.div>
          ))
        ) : (
          <motion.div
            className="project-placeholder"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            <span>{'</>'}</span>
          </motion.div>
        )}
      </div>
    </motion.article>
  )
}

export default App
