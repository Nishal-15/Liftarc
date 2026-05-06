import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="hero min-vh-100 d-flex position-relative overflow-hidden py-5" 
      style={{ 
        backgroundImage: 'url("/images/hero_bg.png")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat'
      }}>
      {/* Background Gradients Overlay for Depth */}
      <div className="position-absolute w-100 h-100" style={{ 
        background: 'linear-gradient(160deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.7) 50%, rgba(15,23,42,0.95) 100%)',
        zIndex: 1
      }}></div>
      
      <div className="hero-grid position-absolute w-100 h-100" style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
        backgroundSize: '100px 100px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
        zIndex: 1
      }}></div>

      <div className="container position-relative py-5 pt-lg-5 hero-container-main" style={{ zIndex: 5, paddingTop: '180px' }}>
        <div className="row align-items-center">
          <div className="col-lg-8" data-aos="fade-up" data-aos-duration="1200">
            {/* Tag removed as requested (Precision Engineering Since 2016) */}
            
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 1.2, ease: "easeOut" }}
              className="display-1 fw-black text-light mb-4" 
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.02em' }}
            >
              LIFT ARC<br/>
              <span className="text-accent">INDUSTRIES.</span> <br/>
              <span className="fs-1 fw-bold opacity-75 d-block mt-3" style={{ fontSize: '2.5rem', letterSpacing: '0.15em', color: 'var(--logo-green)' }}>PRECISION FABRICATION.</span>
            </motion.h1>
            <p className="text-accent small fw-bold text-uppercase mt-n3 mb-4 letter-spacing-widest" style={{ letterSpacing: '0.2em', opacity: 0.9 }}>"Crafted with precision, built with passion"</p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1.5, duration: 1.5 }}
              className="fs-5 fw-light text-light mb-5 ps-2 border-start border-accent py-2" 
              style={{ maxWidth: '550px', lineHeight: 1.8 }}
            >
              Engineering next-generation structural solutions with high-precision TIG/MIG welding, specialized SPM fabrication, and advanced industrial job-work for global manufacturing standards.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="d-flex flex-wrap gap-4 align-items-center"
            >
              <a href="#contact" className="btn-primary-custom">
                Get a Custom Quote
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s ease' }}><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
              <a href="#services" className="btn-outline-custom">
                Explore Services
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Large Background Text/Number */}
      <div className="hero-number position-absolute" style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '35vw',
        fontWeight: 900,
        color: 'rgba(255, 255, 255, 0.015)',
        right: '-10%',
        bottom: '-10%',
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 0
      }}>
        ARC
      </div>

      {/* Stats Quick Grid */}
      <div className="position-absolute d-none d-lg-flex" style={{ bottom: '80px', right: '5%', gap: '60px', zIndex: 10 }}>
        <div className="text-end" data-aos="fade-in" data-aos-delay="2200">
          <div className="fs-1 fw-black text-light" style={{ fontFamily: 'var(--font-heading)', lineHeight: 1 }}>500<span className="text-accent">+</span></div>
          <div className="text-light text-uppercase fw-bold" style={{ fontSize: '0.65rem', letterSpacing: '0.3em', marginTop: '5px', opacity: 0.8 }}>Projects Delivered</div>
        </div>
        <div className="text-end" data-aos="fade-in" data-aos-delay="2400">
          <div className="fs-1 fw-black text-light" style={{ fontFamily: 'var(--font-heading)', lineHeight: 1 }}>9<span className="text-accent">+</span></div>
          <div className="text-light text-uppercase fw-bold" style={{ fontSize: '0.65rem', letterSpacing: '0.3em', marginTop: '5px', opacity: 0.8 }}>Years Expertise</div>
        </div>
        <div className="text-end" data-aos="fade-in" data-aos-delay="2600">
          <div className="fs-1 fw-black text-light" style={{ fontFamily: 'var(--font-heading)', lineHeight: 1 }}>98<span className="text-accent">%</span></div>
          <div className="text-light text-uppercase fw-bold" style={{ fontSize: '0.65rem', letterSpacing: '0.3em', marginTop: '5px', opacity: 0.8 }}>Client Loyalty</div>
        </div>
      </div>

      <div className="scroll-indicator d-none d-lg-flex position-absolute" style={{ bottom: '50px', left: '50%', transform: 'translateX(-50%)', flexDirection: 'column', alignItems: 'center', opacity: 0.5 }}>
        <span className="text-muted text-uppercase py-2" style={{ fontSize: '0.65rem', letterSpacing: '0.3em' }}>SCROLL</span>
        <div className="scroll-line" style={{ width: '1px', height: '60px', background: 'linear-gradient(var(--logo-red), transparent)', animation: 'scrollPulse 2.5s infinite' }}></div>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        @media (max-width: 991px) {
          .hero-container-main {
            padding-top: 240px !important;
          }
          .display-1 {
            font-size: 3.5rem !important;
            margin-top: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
