import React from 'react';
import { ShieldCheck, Truck, Clock, Scissors, Award, Users } from 'lucide-react';

const reasons = [
  {
    icon: <ShieldCheck className="text-accent" size={32} />,
    title: "Expertise in Custom Fabrication",
    desc: "Over 9 years of specialized experience in delivering bespoke engineering solutions for complex manufacturing sectors."
  },
  {
    icon: <AccuracyIcon />, 
    title: "Precision & Quality Reports",
    desc: "Every component is manufactured with focus on high dimensional accuracy, backed by comprehensive project quality reports."
  },
  {
    icon: <Users className="text-accent" size={32} />,
    title: "End-to-End Solutions",
    desc: "From blueprint design to final on-site structural assembly, we handle the entire industrial lifecycle."
  },
  {
    icon: <Award className="text-accent" size={32} />,
    title: "Reliable & Cost-Effective",
    desc: "Maintaining superior quality while ensuring our services remain affordable and reliable for small-to-large scale units."
  }
];

function AccuracyIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="m16 10-4 4-4-4" />
    </svg>
  );
}

const WhyChooseUs = () => {
  return (
    <section id="whychooseus" style={{ backgroundColor: 'var(--dark2)' }}>
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5" data-aos="fade-right">
             <span className="section-tag">OUR STRENGTHS</span>
             <h2 className="section-title mb-4">WHY INDUSTRY <span className="text-accent">LEADERS</span> TRUST US</h2>
             <p className="text-light mt-4" style={{ opacity: 0.95, fontSize: '1.05rem', lineHeight: 1.8 }}>
                Driven by precision and quality, we partner with manufacturers across Coimbatore to help them achieve their production goals through reliable structural and mechanical engineering.
             </p>
             <div className="accent-quote p-4" style={{ backgroundColor: 'var(--dark3)', borderLeft: '4px solid var(--accent)', position: 'relative' }}>
                <p className="text-light fst-italic mb-0" style={{ fontSize: '1rem', lineHeight: 1.7, opacity: 0.8 }}>
                   "Our mission is to bridge the gap between complex engineering challenges and durable, cost-effective fabrication solutions."
                </p>
                <div className="fw-black text-accent mt-3 text-uppercase" style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '0.8rem', letterSpacing: '0.15em' }}>— Management Team</div>
             </div>
          </div>

          <div className="col-lg-6 offset-lg-1">
            <div className="row g-4">
               {reasons.map((reason, index) => (
                 <div key={index} className="col-md-12" data-aos="fade-left" data-aos-delay={index * 150}>
                   <div className="reason-item d-flex gap-4 p-4" style={{ 
                     backgroundColor: '#161616', 
                     border: '1px solid rgba(255, 255, 255, 0.03)',
                     transition: 'all 0.3s ease'
                   }}>
                     <div className="flex-shrink-0 mt-1">
                        {reason.icon}
                     </div>
                     <div>
                        <h4 className="fw-black text-light text-uppercase mb-2" style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '1.25rem' }}>{reason.title}</h4>
                        <p className="text-light-muted mb-0" style={{ lineHeight: 1.8, opacity: 0.95, fontSize: '0.92rem' }}>{reason.desc}</p>
                     </div>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
          .reason-item:hover {
            background-color: var(--dark) !important;
            border-color: var(--accent2) !important;
            transform: translateX(-5px);
          }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
