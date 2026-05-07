import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-5 light-theme" style={{ backgroundColor: 'var(--light-bg3)', borderTop: '1px solid var(--light-border)' }}>
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <a className="d-flex align-items-center gap-2 mb-4 text-decoration-none" href="#">
                            <img src="/logo.png" alt="Lift Arc Logo" style={{ height: '35px', width: 'auto' }} />
                            <span className="navbar-brand-text fw-black text-light" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 900, letterSpacing: '0.1em', lineHeight: 1 }}>
                                
                            </span>
                        </a>
                        <p className="text-light-muted small lh-lg" style={{ opacity: 0.85 }}>
                            Precision fabrication and reliable engineering solutions since 2016. Serving various manufacturing and engineering sectors across India.
                        </p>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 px-lg-5">
                        <h6 className="text-light text-uppercase mb-4" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.12em' }}>Quick Links</h6>
                        <ul className="list-unstyled d-flex flex-column gap-3">
                            {['Home', 'AboutUs', 'Services', 'Products', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase()}`} className="text-light-muted small text-decoration-none transition-all hover-text-accent" style={{ opacity: 0.85 }}>{link === 'AboutUs' ? 'About Us' : link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <h6 className="text-light text-uppercase mb-4" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.12em' }}>Core Expertise</h6>
                        <ul className="list-unstyled d-flex flex-column gap-3">
                            <li className="text-light-muted small opacity-85" style={{ opacity: 0.85 }}>Steel Fabrication</li>
                            <li className="text-light-muted small opacity-85" style={{ opacity: 0.85 }}>Arc Welding Services</li>
                            <li className="text-light-muted small opacity-85" style={{ opacity: 0.85 }}>Industrial Job Work</li>
                            <li className="text-light-muted small opacity-85" style={{ opacity: 0.85 }}>Sheet Metal Work</li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h6 className="text-light text-uppercase mb-4" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.12em' }}>Connect With Us</h6>
                        <div className="d-flex gap-3 mb-4">
                            <a href="#" className="p-2 border border-white/5 bg-white/5 text-muted transition-all hover-bg-accent"><Facebook size={18} /></a>
                            <a href="#" className="p-2 border border-white/5 bg-white/5 text-muted transition-all hover-bg-accent"><Linkedin size={18} /></a>
                            <a href="#" className="p-2 border border-white/5 bg-white/5 text-muted transition-all hover-bg-accent"><Twitter size={18} /></a>
                            <a href="#" className="p-2 border border-white/5 bg-white/5 text-muted transition-all hover-bg-accent"><Instagram size={18} /></a>
                        </div>
                        <p className="text-light-muted small" style={{ opacity: 0.7, fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 300 }}>© 2026 Lift Arc Industries. Coimbatore, Tamil Nadu.</p>
                    </div>
                </div>
            </div>

            <style>{`
                .hover-text-accent:hover {
                    color: var(--accent) !important;
                    padding-left: 5px;
                    opacity: 1 !important;
                }
                .hover-bg-accent:hover {
                    background-color: var(--accent) !important;
                    color: white !important;
                    border-color: var(--accent) !important;
                }
            `}</style>
        </footer>
    );
};

export default Footer;
