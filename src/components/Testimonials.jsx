import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  "SAMSUNG", "BOSCH", "TECUMSEH", "PARKER", "KALYANI", 
  "TATA", "CUMMINS", "DELPHI-TVS", "ROOP", "TVS", 
  "RANE", "ZF INDIA", "DYNA TECH", "VICTURA", "RTE"
];

const Testimonials = () => {
  // Duplicate for seamless loop
  const brandsLoop = [...brands, ...brands];

  return (
    <section id="trusted-by" className="light-theme py-5" style={{ backgroundColor: 'var(--light-bg)', overflow: 'hidden' }}>
      <div className="container">
        <div className="row mb-5" data-aos="fade-up">
          <div className="col-12 text-center">
            <h2 className="section-title" style={{ fontSize: '1.5rem', fontWeight: 300, letterSpacing: '0.05em' }}>
              TRUSTED BY SMALL & LARGE <span className="text-accent" style={{ fontStyle: 'italic', fontFamily: 'var(--font-heading)' }}>BRANDS</span> AROUND THE WORLD
            </h2>
          </div>
        </div>
      </div>

      <div className="position-relative">
        {/* Gradient Overlays for Fade Effect */}
        <div className="position-absolute top-0 start-0 h-100" style={{ width: '150px', background: 'linear-gradient(to right, var(--light-bg), transparent)', zIndex: 2 }}></div>
        <div className="position-absolute top-0 end-0 h-100" style={{ width: '150px', background: 'linear-gradient(to left, var(--light-bg), transparent)', zIndex: 2 }}></div>

        <motion.div 
          className="d-flex gap-5 align-items-center"
          animate={{ x: [0, -2000] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{ width: 'max-content', padding: '20px 0' }}
        >
          {brandsLoop.map((brand, index) => (
            <div key={index} className="px-4">
              <span style={{ 
                fontSize: '1.8rem', 
                fontWeight: 900, 
                color: 'var(--light-text)', 
                opacity: 0.15,
                letterSpacing: '0.15em',
                fontFamily: 'var(--font-display)',
                whiteSpace: 'nowrap',
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => { e.target.style.opacity = '0.8'; e.target.style.color = 'var(--accent)'; }}
              onMouseLeave={(e) => { e.target.style.opacity = '0.15'; e.target.style.color = 'var(--light-text)'; }}
              >
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        #trusted-by {
          border-top: 1px solid var(--light-border);
          border-bottom: 1px solid var(--light-border);
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
