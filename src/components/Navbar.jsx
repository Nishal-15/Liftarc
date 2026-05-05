import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                padding: scrolled ? '10px 50px' : '15px 50px',
                boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.3)' : 'none',
                zIndex: 1000
            }}
        >
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="#" style={{ textDecoration: 'none' }}>
                    <img src="/logo.png" alt="Lift Arc Logo" className="navbar-logo" style={{ height: '60px', width: 'auto', transition: 'transform 0.3s ease' }} />
                </a>

                <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                    <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
                    <ul className="navbar-nav align-items-lg-center gap-lg-4">
                        {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                            <li key={item} className="nav-item">
                                <a 
                                    className="nav-link text-uppercase fw-bold px-0 py-2 position-relative custom-nav-link" 
                                    href={`#${item.toLowerCase().replace(' ', '')}`} 
                                    style={{ 
                                        color: '#ffffff', 
                                        fontSize: '0.85rem', 
                                        letterSpacing: '0.15em', 
                                        opacity: 0.8
                                    }}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                        <li className="nav-item ms-lg-4">
                            <a className="btn-primary-custom px-4 py-2" href="#contact" style={{ fontSize: '0.85rem', padding: '12px 28px', clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}>
                                Get a Quote
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
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
                    box-shadow: 0 10px 30px rgba(0, 174, 239, 0.1);
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
