import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Shield, Layers, Settings, Cog, Cpu } from 'lucide-react';

const services = [
  {
    icon: <Settings className="text-accent" />,
    title: "TIG & MIG Welding",
    desc: "Premium precision welding solutions specializing in stainless steel TIG and heavy industrial MIG welding for critical engineering assemblies.",
    tag: "Primary Expertise"
  },
  {
    icon: <Shield className="text-accent" />,
    title: "Structural Fabrication",
    desc: "Expert heavy-duty structural steel fabrication for industrial frameworks, warehouses, and heavy engineering projects.",
    tag: "Heavy-Duty"
  },
  {
    icon: <Layers className="text-accent" />,
    title: "Precision Sheet Metal",
    desc: "Intricate sheet metal fabrication including precision bending, cutting, and assembly of complex industrial components.",
    tag: "Precision Work"
  },
  {
    icon: <Truck className="text-accent" />,
    title: "Conveyor Systems",
    desc: "Design and fabrication of durable automated conveyor systems tailored to optimize high-performance manufacturing lines.",
    tag: "Automation"
  },
  {
    icon: <Cog className="text-accent" />,
    title: "SPM machine job work",
    desc: "Specialized manufacturing and job work for Special Purpose Machines and heavy-vibration mechanical foundations.",
    tag: "SPM Specialist"
  },
  {
    icon: <Cpu className="text-accent" />,
    title: "Industrial Arc Welding",
    desc: "High-strength Manual Metal Arc (MMA) welding services for durable industrial repairs and structural reinforcement.",
    tag: "Strength & Durability"
  }
];

const Services = () => {
  return (
    <section id="services" className="" style={{ backgroundColor: 'var(--dark)', overflow: 'hidden' }}>
      <div className="container">
        <div className="row justify-content-center mb-5 pb-lg-4">
          <div className="col-lg-7 text-center" data-aos="fade-up">
            <span className="section-tag">OUR EXPERTISE</span>
            <h2 className="section-title" style={{ color: 'var(--light)' }}>CORE <span className="text-accent">SERVICES</span></h2>
            <p className="text-light small text-uppercase fw-bold" style={{ letterSpacing: '0.2rem', opacity: 0.9 }}>Providing world-class fabrication and engineering services from our base in Coimbatore, Tamil Nadu.</p>
          </div>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="service-card p-5 h-100" style={{
                backgroundColor: 'var(--dark2)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer'
              }}>
                {/* Large Background Transparent Number */}
                <div className="position-absolute fs-1 fw-black text-light opacity-5" style={{ bottom: '20px', right: '30px', fontFamily: '"Barlow Condensed", sans-serif', fontSize: '5rem', pointerEvents: 'none' }}>0{index + 1}</div>
                
                {/* Top Border Glow (Pseudo) */}
                <div className="accent-line position-absolute top-0 start-0 w-0 h-2" style={{ transition: 'width 0.5s ease', width: '0%', height: '2px', backgroundColor: 'var(--accent)' }}></div>

                <div className="service-icon mb-4 d-inline-flex align-items-center justify-content-center" style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'rgba(44, 93, 252, 0.08)',
                  border: '1px solid rgba(44, 93, 252, 0.2)'
                }}>
                  {service.icon}
                </div>

                <h4 className="fw-black text-light text-uppercase mb-3" style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '1.5rem', letterSpacing: '0.05em' }}>{service.title}</h4>
                <p className="text-light-muted mb-0" style={{ fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.95, fontWeight: 400 }}>{service.desc}</p>
                
                <div className="mt-4 pt-4 border-top border-white/5 pb-2">
                   <span className="text-accent text-uppercase small tracking-widest fw-bold" style={{ fontSize: '0.65rem', letterSpacing: '0.2em' }}>{service.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .service-card:hover {
          background-color: var(--dark3) !important;
          border-color: rgba(138, 3, 3, 0.3) !important;
          transform: translateY(-8px);
        }
        .service-card:hover .accent-line {
          width: 100% !important;
          background-color: var(--logo-red) !important;
        }
        .service-card:hover .service-icon {
          background-color: rgba(44, 93, 252, 0.15) !important;
          border-color: rgba(44, 93, 252, 0.4) !important;
        }
      `}</style>
    </section>
  );
};

export default Services;
