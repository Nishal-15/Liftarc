import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#aboutus' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav 
            className={`navbar navbar-expand-lg fixed-top transition-all duration-500 ${scrolled ? 'nav-scrolled' : ''}`} 
            style={{ 
                backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.98)' : 'rgba(15, 23, 42, 0.95)',
                backdropFilter: 'blur(15px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                width: '100%',
                maxWidth: '100%',
                top: '0',
                left: '0',
                right: '0',
                borderRadius: '0',
                padding: scrolled ? '10px 0' : '20px 0',
                boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.3)' : 'none',
                zIndex: 1000
            }}
        >
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="#" style={{ textDecoration: 'none' }}>
                    <img 
                        src="/logo.png" 
                        alt="Lift Arc Logo" 
                        className="navbar-logo" 
                        style={{ 
                            height: scrolled ? '45px' : '55px', 
                            width: 'auto', 
                            objectFit: 'contain',
                            transition: 'all 0.3s ease' 
                        }} 
                    />
                </a>

                {/* Mobile Toggle Button */}
                <button 
                    className="d-lg-none border-0 bg-transparent text-light p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{ outline: 'none' }}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Desktop Menu */}
                <div className="collapse navbar-collapse justify-content-end d-none d-lg-block">
                    <ul className="navbar-nav align-items-center gap-4">
                        {navLinks.map((link) => (
                            <li key={link.name} className="nav-item">
                                <a 
                                    className="nav-link text-uppercase px-0 py-2 position-relative custom-nav-link" 
                                    href={link.href}
                                    style={{ 
                                        color: '#ffffff', 
                                        fontSize: '0.65rem', 
                                        letterSpacing: '0.28em', 
                                        opacity: 0.8,
                                        fontFamily: 'var(--font-tag)',
                                        fontWeight: 600
                                    }}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li className="nav-item ms-4">
                            <a 
                                className="btn-primary-custom" 
                                href="#contact" 
                                style={{ 
                                    fontSize: '0.62rem', 
                                    padding: '12px 24px', 
                                    letterSpacing: '0.2em'
                                }}
                            >
                                Get a Quote
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="position-fixed w-100 start-0 d-lg-none"
                        style={{ 
                            top: scrolled ? '65px' : '95px', 
                            backgroundColor: 'rgba(15, 23, 42, 0.98)',
                            backdropFilter: 'blur(20px)',
                            zIndex: 999,
                            overflow: 'hidden',
                            borderTop: '1px solid rgba(255,255,255,0.1)'
                        }}
                    >
                        <div className="container py-5">
                            <ul className="list-unstyled d-flex flex-column gap-4">
                                {navLinks.map((link, i) => (
                                    <motion.li 
                                        key={link.name}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 * i }}
                                    >
                                        <a 
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-light text-decoration-none d-flex align-items-center justify-content-between text-uppercase"
                                            style={{ 
                                                fontSize: '1.4rem', 
                                                fontFamily: 'var(--font-heading)',
                                                letterSpacing: '0.1em',
                                                fontWeight: 600
                                            }}
                                        >
                                            {link.name}
                                            <ChevronRight className="text-accent" size={20} />
                                        </a>
                                    </motion.li>
                                ))}
                                <motion.li
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-4"
                                >
                                    <a 
                                        href="#contact" 
                                        onClick={() => setIsMenuOpen(false)}
                                        className="btn-primary-custom w-100 justify-content-center py-3"
                                        style={{ fontSize: '0.75rem', letterSpacing: '0.25em' }}
                                    >
                                        REQUEST QUOTE
                                    </a>
                                </motion.li>
                            </ul>

                            <div className="mt-5 pt-5 border-top border-white/5 text-center">
                                <p className="text-muted small text-uppercase letter-spacing-widest">Connect with us</p>
                                <div className="d-flex justify-content-center gap-4 mt-3">
                                    <span className="text-light opacity-50">FB</span>
                                    <span className="text-light opacity-50">LN</span>
                                    <span className="text-light opacity-50">IN</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                .custom-nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: var(--accent);
                    transition: width 0.3s ease;
                }
                .custom-nav-link:hover {
                    color: var(--accent) !important;
                    opacity: 1 !important;
                }
                .custom-nav-link:hover::after {
                    width: 100%;
                }
                .nav-scrolled {
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
                }
                @media (max-width: 991px) {
                    .navbar-brand img {
                        height: 40px !important;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
