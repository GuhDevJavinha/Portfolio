import { motion } from 'framer-motion';
import './Home.css';

export default function Home() {
  const socialLinks = [
    {
      className: "gmail",
      href: "mailto:gustavo.rsilva08@gmail.com",
      icon: "fa-solid fa-envelope",
      target: "_blank",
      glowColor: "#e32b2b"
    },
    {
      className: "instagram", 
      href: "https://www.instagram.com/guh_rsilvaa/",
      icon: "fa-brands fa-instagram",
      target: "_blank",
      glowColor: "#e32be3"
    },
    {
      className: "whatsapp",
      href: "https://wa.me/5511994048809?text=Sua%20mensagem%20aqui",
      icon: "fa-brands fa-whatsapp", 
      target: "_blank",
      glowColor: "#00ff00"
    },
    {
      className: "linkedin",
      href: "https://www.linkedin.com/in/gustavo-r13/",
      icon: "fa-brands fa-linkedin-in",
      target: "_blank",
      glowColor: "#0000ff"
    },
    {
      className: "github",
      href: "https://github.com/GuhDevJavinha",
      icon: "fa-brands fa-github",
      target: "_blank",
      glowColor: "#000000"
    }
  ];

  return (
    <div className="home">
      <div className="home-content">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Olá, eu sou <span className="highlight">Gustavo Ribeiro</span>
        </motion.h1>
        
        <motion.h2 
          className='font-bold'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <em>Engenheiro de Software</em>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          Apaixonado por tecnologia e desenvolvimento de software. Crio soluções
          que transformam ideias em projetos incríveis.
        </motion.p>
        
        <div>
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
          >
            <motion.button
              className={`px-6 py-3 bg-gradient-to-r rounded-lg font-medium`}
              whileTap={{ scale: 0.95 }}
            >
              <div className="containerContato">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    className={link.className}
                    href={link.href}
                    target={link.target}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + (index * 0.1) }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 30,
                      filter: `drop-shadow(0 0 3px ${link.glowColor})`,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.9, rotate: 0 }}
                  >
                    <i className={link.icon}></i>
                  </motion.a>
                ))}
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};