import React from 'react';

const projects = [
    {
        title: "TIG Precision Welding",
        category: "Industrial Job Work",
        image: "/images/mig_bg.png",
        description: "Specialized clean-arc TIG welding for critical stainless steel engineering components."
    },
    {
        title: "MIG Heavy Assembly",
        category: "Structural Fabrication",
        image: "/images/structural_bg.png",
        description: "High-power MIG welding for heavy structural seams and core machine frames."
    },
    {
        title: "Structural Frameworks",
        category: "Industrial Fabrication",
        image: "/images/3.jpeg",
        description: "Large-scale industrial steel frameworks and customized factory structures."
    },
    {
        title: "Precision Sheet Metal",
        category: "Custom Engineering",
        image: "/images/4.jpeg",
        description: "Intricate sheet metal fabrication and engineering job work."
    },
    {
        title: "Conveyor Systems",
        category: "Automation",
        image: "/images/5.jpeg",
        description: "Design and fabrication of durable automated conveyor systems."
    },
    {
        title: "Machine Foundations",
        category: "SPM Specialist",
        image: "/images/6.jpeg",
        description: "Specialized manufacturing for machine foundations and special purpose machines."
    },
    {
        title: "Arc Welding Projects",
        category: "Strength & Durability",
        image: "/images/7.jpeg",
        description: "High-strength Manual Metal Arc welding for durable industrial repairs."
    },
    {
        title: "Industrial Enclosures",
        category: "Sheet Metal",
        image: "/images/8.jpeg",
        description: "Customized industrial enclosures and cabinet fabrication."
    }
];

const Projects = () => {
    return (
        <section id="projects" className="light-theme" style={{ backgroundColor: 'var(--light-bg2)' }}>
            <div className="container">
                <div className="row mb-5 align-items-end">
                    <div className="col-lg-6" data-aos="fade-right">
                        <span className="section-tag">OUR PORTFOLIO</span>
                        <h2 className="section-title">INDUSTRIAL <span className="text-accent" style={{ fontStyle: 'italic', fontFamily: 'var(--font-heading)' }}>PROJECTS</span></h2>
                    </div>
                    <div className="col-lg-6 text-lg-end" data-aos="fade-left">
                        <p className="text-light text-uppercase" style={{ fontSize: '0.58rem', letterSpacing: '0.35em', opacity: 0.7, fontFamily: 'var(--font-tag)', fontWeight: 200 }}>Quality Excellence in Every Build</p>
                    </div>
                </div>

                <div className="row g-2">
                    {projects.map((project, index) => (
                        <div key={index} className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay={index * 100}>
                            <div className="project-item position-relative overflow-hidden" style={{ height: '400px', cursor: 'pointer' }}>
                                <img src={project.image} alt={project.title} className="w-100 h-100 object-fit-cover transition-all duration-700" style={{ filter: 'grayscale(100%) brightness(0.5)' }} />
                                <div className="project-overlay position-absolute top-0 start-0 w-100 h-100 p-4 d-flex flex-column justify-content-end" style={{ 
                                    background: 'linear-gradient(to top, rgba(15,23,42,0.85) 0%, transparent 60%)',
                                    transition: 'background 0.4s ease'
                                }}>
                                    <span className="text-accent text-uppercase mb-1" style={{ fontSize: '0.55rem', letterSpacing: '0.3em', fontFamily: 'var(--font-tag)', fontWeight: 200 }}>{project.category}</span>
                                    <h4 className="text-light text-uppercase m-0" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em' }}>{project.title}</h4>
                                    <div className="project-desc mt-3 text-light" style={{ maxHeight: '0', overflow: 'hidden', transition: 'max-height 0.4s ease, opacity 0.4s ease', opacity: 0, fontSize: '0.75rem', fontWeight: 300, fontFamily: 'var(--font-body)', lineHeight: 1.6 }}>
                                        {project.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .project-item:hover img {
                    transform: scale(1.1);
                    filter: grayscale(20%) brightness(0.7) !important;
                }
                .project-item:hover .project-overlay {
                    background: linear-gradient(to top, var(--accent2) 0%, transparent 100%) !important;
                }
                .project-item:hover .project-desc {
                    max-height: 100px !important;
                    opacity: 1 !important;
                }
            `}</style>
        </section>
    );
};

export default Projects;
