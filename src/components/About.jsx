import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="aboutus" className="light-theme" style={{ backgroundColor: 'var(--light-bg)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Grid Accent */}
      <div className="position-absolute" style={{ top: '10%', right: '-5%', width: '30%', height: '40%', backgroundImage: 'radial-gradient(circle, rgba(44, 93, 252, 0.08) 0%, transparent 70%)', zIndex: 0 }}></div>

      <div className="container position-relative" style={{ zIndex: 5 }}>
        <div className="row align-items-center g-5">
          {/* Visual Column */}
          <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1200">
            <div className="about-visual position-relative" style={{ height: '550px' }}>
              {/* Image Frame with Industrial Style */}
              <div className="about-frame position-absolute w-100 h-100" style={{
                background: 'var(--light-bg2)',
                border: '1px solid var(--light-border)',
                boxShadow: '0 40px 100px rgba(0,0,0,0.1)',
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
                {/* Large Number Overlay - Now Small in Corner */}
                <div className="position-absolute text-dark opacity-10" style={{ top: '15px', right: '15px', fontFamily: 'var(--font-tag)', fontWeight: 600, fontSize: '1rem', letterSpacing: '0.2em', pointerEvents: 'none' }}>EST. 2016</div>
              </div>

              {/* Floating Cards */}
              <div className="floating-card top-0 start-0 p-4 border translate-middle-x-lg translate-middle-y shadow-lg" style={{ minWidth: '220px', zIndex: 10, position: 'absolute', top: '10%', left: '-10%', backgroundColor: 'var(--light-bg)', border: '1px solid var(--light-border)', clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}>
                 <div className="fs-1 fw-bold text-accent" style={{ fontFamily: 'var(--font-heading)' }}>01<span className="fs-5">ST</span></div>
                 <div className="text-dark text-uppercase fw-bold" style={{ fontSize: '0.7rem', letterSpacing: '0.2em', fontFamily: 'var(--font-tag)' }}>Choice for Quality</div>
                 <div className="text-dark small mt-1" style={{ opacity: 0.8, fontSize: '0.75rem', lineHeight: 1.5 }}>Certified structural welding & fabrication standards.</div>
              </div>

              <div className="floating-card bottom-0 end-0 p-4 border translate-middle-x-lg translate-middle-y shadow-lg" style={{ minWidth: '220px', zIndex: 10, position: 'absolute', bottom: '10%', right: '-10%', backgroundColor: 'var(--light-bg)', border: '1px solid var(--light-border)', clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}>
                 <div className="fs-1 fw-bold text-accent" style={{ fontFamily: 'var(--font-heading)' }}>9+</div>
                 <div className="text-dark text-uppercase fw-bold" style={{ fontSize: '0.7rem', letterSpacing: '0.2em', fontFamily: 'var(--font-tag)' }}>Years in Operation</div>
                 <div className="text-dark small mt-1" style={{ opacity: 0.8, fontSize: '0.75rem', lineHeight: 1.5 }}>Providing certified industrial solutions and full quality reports.</div>
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
                    <h5 className="fw-black text-uppercase text-light" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '0.1em' }}>Precision Job-Work</h5>
                    <p className="text-light small" style={{ opacity: 0.85 }}>Specialized honing machine bases and conveyor system fabrication.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-start gap-3">
                  <div className="accent-marker py-2 px-1 bg-accent"></div>
                  <div>
                    <h5 className="fw-black text-uppercase text-light" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '0.1em' }}>Quality Assurance</h5>
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,700;0,6..96,900;1,6..96,400;1,6..96,700&family=Raleway:wght@200;300;400;500;600&family=Josefin+Sans:wght@100;200;300;400;600&display=swap');

        /* ── Root font variables ── */
        #aboutus {
          --font-heading:  'Playfair Display', serif;
          --font-display:  'Bodoni Moda', serif;
          --font-body:     'Raleway', sans-serif;
          --font-tag:      'Josefin Sans', sans-serif;

          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        /* ── WHO WE ARE tag ──
           Josefin Sans 100 weight, very wide tracking.
           Feels like a premium label. */
        #aboutus .section-tag {
          font-family: 'Josefin Sans', sans-serif !important;
          font-size: 0.6rem !important;
          font-weight: 100 !important;
          letter-spacing: 0.55em !important;
          line-height: 1 !important;
          text-transform: uppercase !important;
          word-spacing: 0.3em !important;
        }

        /* ── Main H2 ──
           Playfair Display 700, mild tracking, tight leading.
           Let the serifs breathe — don't over-space. */
        #aboutus .section-title,
        #aboutus h2 {
          font-family: 'Playfair Display', serif !important;
          font-size: clamp(1.6rem, 3vw, 2.4rem) !important;
          font-weight: 700 !important;
          letter-spacing: 0.04em !important;
          line-height: 1.18 !important;
          word-spacing: 0.05em !important;
        }

        /* ── Feature card h5s ──
           Playfair Display 600, small-caps rhythm.
           Tighter tracking suits the smaller size. */
        #aboutus h5 {
          font-family: 'Playfair Display', serif !important;
          font-size: 0.82rem !important;
          font-weight: 600 !important;
          letter-spacing: 0.12em !important;
          line-height: 1.4 !important;
          word-spacing: 0.08em !important;
        }

        /* ── Stat numbers: 01ST / 9+ ──
           Bodoni Moda Italic 900 at display size.
           Negative tracking compacts the huge glyph gracefully. */
        #aboutus .floating-card .fs-1 {
          font-family: 'Bodoni Moda', serif !important;
          font-style: italic !important;
          font-weight: 900 !important;
          font-size: 3rem !important;
          letter-spacing: -0.04em !important;
          line-height: 0.95 !important;
        }

        /* Superscript ST inside stat */
        #aboutus .floating-card .fs-1 .fs-5 {
          font-family: 'Josefin Sans', sans-serif !important;
          font-style: normal !important;
          font-weight: 200 !important;
          font-size: 0.75rem !important;
          letter-spacing: 0.12em !important;
          vertical-align: super !important;
          margin-left: 2px !important;
        }

        /* ── Card UPPERCASE labels ──
           Josefin Sans 200, very open tracking. */
        #aboutus .floating-card .text-uppercase {
          font-family: 'Josefin Sans', sans-serif !important;
          font-size: 0.58rem !important;
          font-weight: 200 !important;
          letter-spacing: 0.35em !important;
          line-height: 1.2 !important;
          word-spacing: 0.2em !important;
        }

        /* ── Card descriptor small text ──
           Raleway 300, comfortable reading rhythm. */
        #aboutus .floating-card .small {
          font-family: 'Raleway', sans-serif !important;
          font-size: 0.78rem !important;
          font-weight: 300 !important;
          letter-spacing: 0.025em !important;
          line-height: 1.65 !important;
        }

        /* ── Body paragraphs ──
           Raleway 300 — generous line-height, minimal tracking. */
        #aboutus .about-content p,
        #aboutus p {
          font-family: 'Raleway', sans-serif !important;
          font-size: 1rem !important;
          font-weight: 300 !important;
          letter-spacing: 0.02em !important;
          line-height: 1.95 !important;
          word-spacing: 0.06em !important;
        }

        /* Inline bold brand name → italic Playfair for contrast */
        #aboutus .about-content .fw-bold {
          font-family: 'Playfair Display', serif !important;
          font-style: italic !important;
          font-weight: 600 !important;
          letter-spacing: 0.01em !important;
        }

        /* ── Ghost year watermark ──
           Bodoni Moda Italic, ultra-light visual weight. */
        #aboutus .position-absolute.fs-1.fw-black {
          font-family: 'Bodoni Moda', serif !important;
          font-style: italic !important;
          font-weight: 400 !important;
          letter-spacing: 0.08em !important;
        }

        /* ── CTA button ──
           Josefin Sans 600, tracked like a luxury label. */
        #aboutus .btn-primary-custom {
          font-family: 'Josefin Sans', sans-serif !important;
          font-size: 0.68rem !important;
          font-weight: 600 !important;
          letter-spacing: 0.28em !important;
          text-transform: uppercase !important;
          word-spacing: 0.15em !important;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default About;