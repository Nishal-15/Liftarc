import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
        title: "Metal Storage Bin",
        category: "Storage Bins",
        image: "https://5.imimg.com/data5/ANDROID/Default/2022/4/WE/XJ/ZA/27161066/product-500x500.jpg",
        description: "Durable industrial storage bin designed for heavy-duty applications and organized warehousing."
    },
    {
        title: "Component Storage Bins",
        category: "Storage Bins",
        image: "https://5.imimg.com/data5/ANDROID/Default/2022/4/UK/VM/WK/27161093/product-500x500.jpg",
        description: "Wire mesh storage bins ideal for organizing and storing small to medium industrial components."
    },
    {
        title: "Industrial Safety Gates",
        category: "Safety Systems",
        image: "https://5.imimg.com/data5/ANDROID/Default/2022/4/RY/ZQ/ZE/27161080/product-500x500.jpg",
        description: "Industrial-grade safety gates providing robust protection for machinery and restricted factory areas."
    },
    {
        title: "Precision MS Clamps",
        category: "Clamps & Fixtures",
        image: "https://4.imimg.com/data4/WA/XY/MY-271610/product-500x500.jpg",
        description: "High-strength Mild Steel clamps used for securing industrial piping and structural frameworks."
    },
    {
        title: "Industrial Work Table",
        category: "Workplace Solutions",
        image: "https://5.imimg.com/data5/ANDROID/Default/2022/4/WE/XJ/ZA/27161066/product-500x500.jpg", 
        description: "Heavy-duty workbench engineered for durability in high-intensity industrial and engineering environments."
    },
    {
        title: "Electrical Control Panel",
        category: "Control Systems",
        image: "https://5.imimg.com/data5/ANDROID/Default/2022/4/UK/VM/WK/27161093/product-500x500.jpg",
        description: "Custom-built electrical control panels designed for managing complex industrial power systems."
    },
    {
        title: "Precision Impellers",
        category: "Mechanical Parts",
        image: "https://5.imimg.com/data5/ANDROID/Default/2022/4/RY/ZQ/ZE/27161080/product-500x500.jpg",
        description: "Precision-engineered impellers for industrial pumps and fans, ensuring optimal fluid dynamics."
    },
    {
        title: "VCB Spare Parts",
        category: "Electrical",
        image: "https://4.imimg.com/data4/WA/XY/MY-271610/product-500x500.jpg",
        description: "Essential components for Vacuum Circuit Breakers, ensuring reliability in high-voltage electrical panels."
    }
];

const Projects = () => {
    const [filter, setFilter] = React.useState('All');
    const categories = ['All', ...new Set(projects.map(p => p.category))];
    
    const filteredProjects = filter === 'All' 
        ? projects 
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="light-theme" style={{ backgroundColor: 'var(--light-bg2)' }}>
            <div className="container">
                <div className="row mb-5 align-items-end">
                    <div className="col-lg-6" data-aos="fade-right">
                        <span className="section-tag">OUR PORTFOLIO</span>
                        <h2 className="section-title">INDUSTRIAL <span className="text-accent" style={{ fontStyle: 'italic', fontFamily: 'var(--font-heading)' }}>PROJECTS</span></h2>
                    </div>
                    <div className="col-lg-6 text-lg-end" data-aos="fade-left">
                        <div className="d-flex flex-wrap justify-content-lg-end gap-3 mt-4 mt-lg-0">
                            {categories.map((cat) => (
                                <button 
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`filter-btn ${filter === cat ? 'active' : ''}`}
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        color: filter === cat ? 'var(--accent)' : 'var(--light-text)',
                                        fontFamily: 'var(--font-tag)',
                                        fontSize: '0.65rem',
                                        letterSpacing: '0.2em',
                                        textTransform: 'uppercase',
                                        padding: '5px 10px',
                                        position: 'relative',
                                        transition: 'all 0.3s ease',
                                        fontWeight: filter === cat ? '700' : '400',
                                        opacity: filter === cat ? 1 : 0.6
                                    }}
                                >
                                    {cat}
                                    {filter === cat && (
                                        <motion.div 
                                            layoutId="activeFilter"
                                            className="position-absolute bottom-0 start-0 w-100" 
                                            style={{ height: '2px', backgroundColor: 'var(--accent)' }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="row g-2">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div 
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                key={project.title} 
                                className="col-md-6 col-lg-3"
                            >
                            <div className="project-item position-relative overflow-hidden" style={{ height: '400px', cursor: 'pointer' }}>
                                <img src={project.image} alt={project.title} className="w-100 h-100 object-fit-cover transition-all duration-700" style={{ filter: 'grayscale(100%) brightness(0.5)' }} />
                                <div className="project-overlay position-absolute top-0 start-0 w-100 h-100 p-4 d-flex flex-column justify-content-end" style={{ 
                                    background: 'linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.4) 50%, transparent 100%)',
                                    transition: 'background 0.4s ease'
                                }}>
                                    <span className="text-uppercase mb-1" style={{ fontSize: '0.62rem', letterSpacing: '0.35em', fontFamily: 'var(--font-tag)', fontWeight: 800, color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,1)', opacity: 1 }}>{project.category}</span>
                                    <h4 className="text-uppercase m-0" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.92rem', fontWeight: 700, letterSpacing: '0.15em', textShadow: '0 2px 12px rgba(0,0,0,1)', color: '#fff', opacity: 1 }}>{project.title}</h4>
                                    <div className="project-desc mt-3 text-light" style={{ maxHeight: '0', overflow: 'hidden', transition: 'max-height 0.4s ease, opacity 0.4s ease', opacity: 0, fontSize: '0.75rem', fontWeight: 300, fontFamily: 'var(--font-body)', lineHeight: 1.6 }}>
                                        {project.description}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
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
