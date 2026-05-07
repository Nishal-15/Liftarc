import React from 'react';

const products = [
  {
    image: "/images/11.jpeg",
    title: "Arc Welding Machines",
    desc: "Single-phase and three-phase arc welding machines, widely used for structural and industrial applications.",
    tag: "High-Efficiency"
  },
  {
    image: "/images/12.jpeg",
    title: "Air-Cooled Welding Systems",
    desc: "Innovative air-cooled welding equipment designed for prolonged industrial usage without overheating.",
    tag: "Advanced Cooling"
  },
  {
    image: "/images/13.jpeg",
    title: "Precision Industrial Components",
    desc: "Custom-built mechanical and structural components according to specific client engineering blueprints.",
    tag: "Certified Accuracy"
  }
];

const Products = () => {
  return (
    <section id="products" className="light-theme" style={{ backgroundColor: 'var(--light-bg)', position: 'relative' }}>
      <div className="container">
        <div className="row align-items-end mb-60">
          <div className="col-lg-6" data-aos="fade-right">
            <span className="section-tag">ENGINEERING HARDWARE</span>
            <h2 className="section-title">INDUSTRIAL <span className="text-accent" style={{ fontStyle: 'italic', fontFamily: 'var(--font-heading)' }}>PRODUCTS</span></h2>
          </div>
          <div className="col-lg-5 offset-lg-1" data-aos="fade-left">
            <p className="text-light mb-0" style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '20px', lineHeight: 1.95, opacity: 0.85, fontSize: '0.95rem', fontWeight: 300, fontFamily: 'var(--font-body)' }}>
              Each product is rigorously tested for quality and efficiency, meeting all industrial safety and reliability standards for the most demanding environments.
            </p>
          </div>
        </div>

        <div className="row g-4 mt-5">
          {products.map((product, index) => (
            <div key={index} className="col-lg-4" data-aos="fade-up" data-aos-delay={index * 150}>
              <div className="product-card h-100" style={{
                background: 'var(--light-bg)',
                border: '1px solid var(--light-border)',
                overflow: 'hidden',
                transition: 'all 0.4s ease',
                boxShadow: '0 5px 15px rgba(0,0,0,0.02)'
              }}>
                <div className="product-img-wrapper position-relative" style={{ height: '280px', overflow: 'hidden', background: '#f8fafc' }}>
                    <img src={product.image} className="w-100 h-100 object-fit-cover transition-all duration-500" style={{ opacity: 0.95 }} alt={product.title} />
                </div>
                <div className="product-content p-4">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="badge bg-accent px-2 py-1 text-uppercase" style={{ fontSize: '0.55rem', letterSpacing: '0.25em', borderRadius: '0', fontFamily: 'var(--font-tag)', fontWeight: 200 }}>{product.tag}</span>
                  </div>
                  <h4 className="text-light text-uppercase" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.12em' }}>{product.title}</h4>
                  <p className="text-light-muted mt-3 mb-4" style={{ fontSize: '0.78rem', lineHeight: 1.65, opacity: 0.85, fontWeight: 300, fontFamily: 'var(--font-body)' }}>{product.desc}</p>
                  <a href="#contact" className="btn-outline-custom w-100 justify-content-center py-2" style={{ fontSize: '0.62rem', letterSpacing: '0.2em' }}>Order Information</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .product-card:hover {
          background-color: var(--light-bg) !important;
          border-color: var(--accent) !important;
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
        }
        .product-card:hover img {
           transform: scale(1.08);
           opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default Products;
