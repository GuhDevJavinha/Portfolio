import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import curriculumPdf from '../../assets/GUSTAVO-RIBEIRO-CV.pdf';
import './Home.css';

export default function Home() {
  const coreSkills = [
    'Java + Spring',
    'TypeScript + React.js/Nest.js',
    'Arquitetura de Microsservicos',
    'Cloud AWS/GCP',
    'SQL e NoSQL',
    'CI/CD e Qualidade'
  ];

  const socialLinks = [
    {
      className: "gmail",
      href: "mailto:gustavo.rsilva08@gmail.com",
      icon: "fa-solid fa-envelope",
      target: "_blank",
      glowColor: "#f36f58",
      label: 'Email'
    },
    {
      className: "instagram", 
      href: "https://www.instagram.com/guh_rsilvaa/",
      icon: "fa-brands fa-instagram",
      target: "_blank",
      glowColor: "#ff4fcc",
      label: 'Instagram'
    },
    {
      className: "whatsapp",
      href: "https://wa.me/5511994048809?text=Sua%20mensagem%20aqui",
      icon: "fa-brands fa-whatsapp", 
      target: "_blank",
      glowColor: "#4cd27c",
      label: 'WhatsApp'
    },
    {
      className: "linkedin",
      href: "https://www.linkedin.com/in/gustavo-r13/",
      icon: "fa-brands fa-linkedin-in",
      target: "_blank",
      glowColor: "#5caef5",
      label: 'LinkedIn'
    },
    {
      className: "github",
      href: "https://github.com/GuhDevJavinha",
      icon: "fa-brands fa-github",
      target: "_blank",
      glowColor: "#c9d5e8",
      label: 'GitHub'
    }
  ];

  return (
    <section className="home">
      <div className="home-noise" />
      <div className="home-content">
        <motion.span
          className="hero-kicker"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Disponivel para desafios em Engenharia de Software
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
        >
          Gustavo Ribeiro
        </motion.h1>

        <motion.h2 
          className='hero-role'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          Engenheiro de Software focado em produtos escalaveis e confiaveis.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          Transformo requisitos de negocio em sistemas com boa arquitetura, performance e manutenibilidade,
          conectando backend robusto, front-end moderno e cultura de entrega continua.
        </motion.p>

        <motion.div
          className="skills-grid"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
        >
          {coreSkills.map((skill, index) => (
            <span key={skill} style={{ animationDelay: `${0.65 + index * 0.08}s` }}>
              {skill}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72, duration: 0.5 }}
        >
          <a className="cta-primary" href={curriculumPdf} download="GUSTAVO-RIBEIRO-CV.pdf">
            Baixar curriculo
          </a>
          <Link className="cta-primary" to="/curriculum">Ver experiencia</Link>
          <Link className="cta-outline" to="/about">Resumo profissional</Link>
        </motion.div>

        <div className="contact-panel">
          <motion.div
            className="social-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
          >
            <p>Contato rapido</p>
            <div className="containerContato">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.className}
                  className={link.className}
                  style={{ '--contact-glow': link.glowColor } as CSSProperties}
                  href={link.href}
                  target={link.target}
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.85 + (index * 0.09) }}
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.94 }}
                >
                  <i className={link.icon}></i>
                  <span>{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};