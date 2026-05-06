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
    <section id="products" style={{ backgroundColor: 'var(--dark)', position: 'relative' }}>
      <div className="container">
        <div className="row align-items-end mb-60">
          <div className="col-lg-6" data-aos="fade-right">
            <span className="section-tag">ENGINEERING HARDWARE</span>
            <h2 className="section-title" style={{ color: 'var(--light)' }}>INDUSTRIAL <span className="text-accent">PRODUCTS</span></h2>
          </div>
          <div className="col-lg-5 offset-lg-1" data-aos="fade-left">
            <p className="text-light fs-6 fw-light mb-0" style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '20px', lineHeight: 1.8, opacity: 0.9 }}>
              Each product is rigorously tested for quality and efficiency, meeting all industrial safety and reliability standards for the most demanding environments.
            </p>
          </div>
        </div>

        <div className="row g-4 mt-5">
          {products.map((product, index) => (
            <div key={index} className="col-lg-4" data-aos="fade-up" data-aos-delay={index * 150}>
              <div className="product-card h-100" style={{
                background: 'var(--dark2)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                overflow: 'hidden',
                transition: 'all 0.4s ease'
              }}>
                <div className="product-img-wrapper position-relative" style={{ height: '280px', overflow: 'hidden' }}>
                    <img src={product.image} className="w-100 h-100 object-fit-cover opacity-50 transition-all duration-500" style={{ filter: 'grayscale(60%) brightness(0.6)' }} alt={product.title} />
                </div>
                <div className="product-content p-4">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="badge bg-accent px-2 py-1 text-uppercase" style={{ fontSize: '0.6rem', letterSpacing: '0.1em', borderRadius: '0' }}>{product.tag}</span>
                  </div>
                  <h4 className="fw-black text-light text-uppercase" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem' }}>{product.title}</h4>
                  <p className="text-light-muted mt-3 mb-4" style={{ fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.95, fontWeight: 400 }}>{product.desc}</p>
                  <a href="#contact" className="btn-outline-custom w-100 justify-content-center py-2" style={{ fontSize: '0.8rem' }}>Order Information</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .product-card:hover {
          background-color: var(--dark3) !important;
          border-color: var(--accent2) !important;
          transform: translateY(-5px);
        }
        .product-card:hover img {
           transform: scale(1.08);
           filter: grayscale(10%) brightness(0.8) !important;
           opacity: 0.7 !important;
        }
      `}</style>
    </section>
  );
};

export default Products;
