import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="aboutus" style={{ backgroundColor: 'var(--dark2)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Grid Accent */}
      <div className="position-absolute" style={{ top: '10%', right: '-5%', width: '30%', height: '40%', backgroundImage: 'radial-gradient(circle, rgba(44, 93, 252, 0.08) 0%, transparent 70%)', zIndex: 0 }}></div>

      <div className="container position-relative" style={{ zIndex: 5 }}>
        <div className="row align-items-center g-5">
          {/* Visual Column */}
          <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1200">
            <div className="about-visual position-relative" style={{ height: '550px' }}>
              {/* Image Frame with Industrial Style */}
              <div className="about-frame position-absolute w-100 h-100" style={{
                background: 'var(--dark3)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <div className="position-absolute w-100 h-100" style={{ 
                  background: 'linear-gradient(45deg, rgba(44, 93, 252, 0.1) 0%, transparent 60%)',
                  zIndex: 2
                }}></div>
                <img src="/images/about_bg.png" alt="Precision Detail" className="w-100 h-100 object-fit-cover opacity-50" style={{ mixBlendMode: 'luminosity' }} />
                {/* Large Number Overlay */}
                <div className="position-absolute fs-1 fw-black text-light opacity-5" style={{ top: '40px', right: '40px', fontFamily: '"Barlow Condensed", sans-serif', fontSize: '8rem', pointerEvents: 'none' }}>2016</div>
              </div>

              {/* Floating Cards */}
              <div className="floating-card top-0 start-0 p-4 bg-dark border translate-middle-x-lg translate-middle-y shadow-lg" style={{ minWidth: '220px', zIndex: 10, position: 'absolute', top: '10%', left: '-10%', backgroundColor: 'var(--dark)', border: '1px solid var(--accent2)', clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}>
                 <div className="fs-1 fw-bold text-accent" style={{ fontFamily: '"Barlow Condensed", sans-serif' }}>01<span className="fs-5">ST</span></div>
                 <div className="text-light text-uppercase fw-bold" style={{ fontSize: '0.7rem', letterSpacing: '0.2em' }}>Choice for Quality</div>
                 <div className="text-light small mt-1" style={{ opacity: 0.85 }}>Certified structural welding & fabrication standards.</div>
              </div>

              <div className="floating-card bottom-0 end-0 p-4 bg-dark border translate-middle-x-lg translate-middle-y shadow-lg" style={{ minWidth: '220px', zIndex: 10, position: 'absolute', bottom: '10%', right: '-10%', backgroundColor: 'var(--dark)', border: '1px solid var(--accent2)', clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}>
                 <div className="fs-1 fw-bold text-accent" style={{ fontFamily: '"Barlow Condensed", sans-serif' }}>9+</div>
                 <div className="text-light text-uppercase fw-bold" style={{ fontSize: '0.7rem', letterSpacing: '0.2em' }}>Years in Operation</div>
                 <div className="text-light small mt-1" style={{ opacity: 0.85 }}>Providing certified industrial solutions and full quality reports.</div>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="col-lg-6 ps-lg-5" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">
            <span className="section-tag">WHO WE ARE</span>
            <h2 className="section-title mb-4" style={{ color: 'var(--light)' }}>THE ENGINEERING <span className="text-accent">LEGACY</span> BEHIND LIFT ARC</h2>
            
            <div className="about-content text-light mb-5" style={{ opacity: 0.9, lineHeight: 1.8, fontSize: '1.05rem', fontWeight: 400 }}>
              <p className="mb-4">
                Since 2016, <span className="fw-bold text-light">Lift Arc Industries</span> has been at the forefront of specialized industrial fabrication in Coimbatore. We bridge the gap between complex engineering blueprints and high-performance physical assets.
              </p>
              <p>
                Our facility integrates advanced welding technologies with master craftsmanship to deliver structural frameworks, precision machine bases, and automated conveyor systems that power modern industry.
              </p>
            </div>

            <div className="row g-4 mt-4">
              <div className="col-md-6">
                <div className="d-flex align-items-start gap-3">
                  <div className="accent-marker py-2 px-1 bg-accent"></div>
                  <div>
                    <h5 className="fw-black text-uppercase text-light" style={{ fontFamily: '"Barlow Condensed", sans-serif', letterSpacing: '0.1em' }}>Precision Job-Work</h5>
                    <p className="text-light small" style={{ opacity: 0.85 }}>Specialized honing machine bases and conveyor system fabrication.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-start gap-3">
                  <div className="accent-marker py-2 px-1 bg-accent"></div>
                  <div>
                    <h5 className="fw-black text-uppercase text-light" style={{ fontFamily: '"Barlow Condensed", sans-serif', letterSpacing: '0.1em' }}>Quality Assurance</h5>
                    <p className="text-light small" style={{ opacity: 0.85 }}>Comprehensive quality reports with rigorous testing for durability.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <a href="#contact" className="btn-primary-custom">
                Learn Full History
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default About;
