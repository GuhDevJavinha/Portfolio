import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css';

export default function Header() {
    const location = useLocation();

    const navLinks = [
        {
            to: '/',
            label: 'Inicio'
        },
        {
            to: '/about',
            label: 'Sobre'
        },
        {
            to: '/curriculum',
            label: 'Curriculo'
        },
        {
            to: '/projects',
            label: 'Projetos'
        }
    ];

    return (
        <div className='header-shell'>
            <motion.header 
                className="header"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <motion.nav 
                    className="navbar"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                >
                    <ul className="lista-links">
                        {navLinks.map((link, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    delay: 0.3 + (index * 0.1),
                                    duration: 0.4,
                                    ease: "easeOut",
                                }}
                            >
                                <motion.div
                                    whileHover={{ 
                                        scale: 1.1,
                                        y: -2,
                                        transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link 
                                        className={`link ${location.pathname === link.to ? 'active' : ''}`}
                                        to={link.to}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            </motion.li>
                        ))}
                    </ul>
                </motion.nav>
            </motion.header>
        </div>
    );
}