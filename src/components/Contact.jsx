import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Download } from 'lucide-react';
import { jsPDF } from 'jspdf';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const generatePDF = (data) => {
        const doc = new jsPDF();
        
        // Branded Header
        doc.setFillColor(15, 23, 42); // Navy Dark
        doc.rect(0, 0, 210, 40, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(24);
        doc.text('LIFTARC INDUSTRIES', 20, 25);
        
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text('Precision Fabrication & Engineering Job Work', 20, 32);
        
        // Enquiry Details Header
        doc.setTextColor(15, 23, 42);
        doc.setFontSize(18);
        doc.setFont('helvetica', 'bold');
        doc.text('PROJECT ENQUIRY SUMMARY', 20, 55);
        
        doc.setDrawColor(0, 174, 239); // Accent Cyan
        doc.setLineWidth(1);
        doc.line(20, 60, 80, 60);
        
        // Content
        doc.setFontSize(12);
        doc.setTextColor(50, 50, 50);
        
        const details = [
            ['Customer Name', data.name],
            ['Email Address', data.email],
            ['Phone', data.phone || 'N/A'],
            ['Service Required', data.service || 'Industrial Fabrication'],
            ['Date Submitted', new Date().toLocaleDateString()]
        ];
        
        let yPos = 75;
        details.forEach(([label, value]) => {
            doc.setFont('helvetica', 'bold');
            doc.text(`${label}:`, 20, yPos);
            doc.setFont('helvetica', 'normal');
            doc.text(`${value}`, 60, yPos);
            yPos += 12;
        });
        
        // Message Section
        doc.setFont('helvetica', 'bold');
        doc.text('Project Requirements:', 20, yPos + 5);
        doc.setFont('helvetica', 'normal');
        const splitMessage = doc.splitTextToSize(data.message, 170);
        doc.text(splitMessage, 20, yPos + 15);
        
        // Footer
        const pageHeight = doc.internal.pageSize.height;
        doc.setFillColor(240, 249, 255); // Light Blue
        doc.rect(0, pageHeight - 30, 210, 30, 'F');
        doc.setTextColor(12, 74, 110); // Deep Blue
        doc.setFontSize(9);
        doc.text('Thank you for choosing LiftArc Industries. Our technical team will review your specs shortly.', 20, pageHeight - 15);
        doc.text('Contact: +91 96291 58102 | Email: liftarcindustries@gmail.com', 20, pageHeight - 10);
        
        doc.save(`LiftArc_Enquiry_${data.name.replace(/\s+/g, '_')}.pdf`);
    };

    const handleEmailEnquiry = (e) => {
        e.preventDefault();
        
        // Trigger PDF Generation
        generatePDF(formData);

        const subject = encodeURIComponent('LiftArc Project Enquiry');
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone}\n` +
            `Service: ${formData.service}\n\n` +
            `Project Details:\n${formData.message}`
        );
        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=liftarc@gmail.com&su=${subject}&body=${body}`;
        const mailtoURL = `mailto:liftarc@gmail.com?subject=${subject}&body=${body}`;
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
            window.location.href = mailtoURL;
        } else {
            window.open(gmailURL, '_blank');
        }
    };

    return (
        <section id="contact" className="light-theme" style={{ backgroundColor: 'var(--light-bg2)' }}>
            <div className="container position-relative">
                <div className="row justify-content-center mb-5 pb-lg-4 text-center">
                    <div className="col-lg-7" data-aos="fade-up">
                        <span className="section-tag">GET IN TOUCH</span>
                        <h2 className="section-title">START YOUR <span className="text-accent" style={{ fontStyle: 'italic', fontFamily: 'var(--font-heading)' }}>PROJECT</span></h2>
                        <p className="text-light mt-4" style={{ opacity: 0.85, fontSize: '1rem', lineHeight: 1.95, fontWeight: 300, fontFamily: 'var(--font-body)' }}>We're ready to discuss your next industrial engineering and fabrication project. Reach out to our team in Coimbatore today.</p>
                    </div>
                </div>

                <div className="row g-5">
                    {/* Contact Info Column */}
                    <div className="col-lg-5" data-aos="fade-right">
                        <div className="contact-info-card p-5 h-100 shadow-sm" style={{ backgroundColor: 'var(--light-bg)', border: '1px solid var(--light-border)' }}>
                            <div className="mb-5 d-flex gap-4">
                                <div className="contact-icon p-3 border" style={{ background: 'rgba(44, 93, 252, 0.08)', border: '1px solid rgba(44, 93, 252, 0.2)', height: 'fit-content' }}>
                                    <MapPin className="text-accent" />
                                </div>
                                <div>
                                    <h6 className="text-light text-uppercase mb-3" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.12em' }}>Office Address</h6>
                                    <p className="text-light small mb-0" style={{ lineHeight: 1.8, opacity: 0.7 }}>
                                        33C, Kunnathur Kavunder Complex,<br />
                                        Thottipalayam Road, Aerodrome area,<br />
                                        Coimbatore - 14, Tamil Nadu,<br />
                                        India – 641 014
                                    </p>
                                </div>
                            </div>

                            <div className="mb-5 d-flex gap-4">
                                <div className="contact-icon p-3 border" style={{ background: 'rgba(44, 93, 252, 0.08)', border: '1px solid rgba(44, 93, 252, 0.2)', height: 'fit-content' }}>
                                    <Phone className="text-accent" />
                                </div>
                                <div>
                                    <h6 className="text-light text-uppercase mb-3" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.12em' }}>Phone Enquiry</h6>
                                    <p className="text-light small mb-0"><a href="tel:+917708084027" className="text-light text-decoration-none" style={{ opacity: 0.7 }}>+91 77080 84027</a></p>
                                </div>
                            </div>

                            <div className="mb-5 d-flex gap-4">
                                <div className="contact-icon p-3 border" style={{ background: 'rgba(44, 93, 252, 0.08)', border: '1px solid rgba(44, 93, 252, 0.2)', height: 'fit-content' }}>
                                    <Mail className="text-accent" />
                                </div>
                                <div>
                                    <h6 className="text-light text-uppercase mb-3" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.12em' }}>Email Support</h6>
                                    <p className="text-light small mb-0"><a href="mailto:liftarc@gmail.com" className="text-light text-decoration-none" style={{ opacity: 0.7 }}>liftarc@gmail.com</a></p>
                                </div>
                            </div>

                            <div className="d-flex gap-4">
                                <div className="contact-icon p-3 h-fit border" style={{ background: 'rgba(44, 93, 252, 0.08)', border: '1px solid rgba(44, 93, 252, 0.2)', height: 'fit-content' }}>
                                    <Clock className="text-accent" />
                                </div>
                                <div>
                                    <h6 className="text-light text-uppercase mb-3" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.12em' }}>Working Hours</h6>
                                    <p className="text-light small mb-0" style={{ opacity: 0.7 }}>Monday – Saturday<br />9:00 AM – 6:00 PM IST</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="col-lg-7" data-aos="fade-left">
                        <div className="form-wrapper p-5 h-100 shadow-sm" style={{ backgroundColor: 'var(--light-bg)', border: '1px solid var(--light-border)' }}>
                            <form onSubmit={handleEmailEnquiry}>
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <div className="form-group mb-4">
                                            <label className="text-dark small text-uppercase fw-bold mb-2" style={{ opacity: 1, letterSpacing: '0.05em', fontFamily: 'var(--font-tag)', fontWeight: 600 }}>FullName *</label>
                                            <input id="name" type="text" className="form-control" value={formData.name} onChange={handleChange} placeholder="YOUR NAME" required style={{ backgroundColor: 'var(--light-bg2)', border: '1px solid var(--light-border)', color: 'var(--light-text)', padding: '12px', borderRadius: '0' }} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-4">
                                            <label className="text-dark small text-uppercase fw-bold mb-2" style={{ opacity: 1, letterSpacing: '0.05em', fontFamily: 'var(--font-tag)', fontWeight: 600 }}>Email Address *</label>
                                            <input id="email" type="email" className="form-control" value={formData.email} onChange={handleChange} placeholder="YOUR EMAIL ADDRESS" required style={{ backgroundColor: 'var(--light-bg2)', border: '1px solid var(--light-border)', color: 'var(--light-text)', padding: '12px', borderRadius: '0' }} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-4">
                                            <label className="text-dark small text-uppercase fw-bold mb-2" style={{ opacity: 1, letterSpacing: '0.05em', fontFamily: 'var(--font-tag)', fontWeight: 600 }}>Phone Number</label>
                                            <input id="phone" type="text" className="form-control" value={formData.phone} onChange={handleChange} placeholder="+91 00000 00000" style={{ backgroundColor: 'var(--light-bg2)', border: '1px solid var(--light-border)', color: 'var(--light-text)', padding: '12px', borderRadius: '0' }} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-4">
                                            <label className="text-dark small text-uppercase fw-bold mb-2" style={{ opacity: 1, letterSpacing: '0.05em', fontFamily: 'var(--font-tag)', fontWeight: 600 }}>Service Required</label>
                                            <select id="service" className="form-select" value={formData.service} onChange={handleChange} style={{ backgroundColor: 'var(--light-bg2)', border: '1px solid var(--light-border)', color: 'var(--light-text)', padding: '12px', borderRadius: '0' }}>
                                                <option value="" className="bg-dark">Select a service...</option>
                                                <option value="Steel Fabrication" className="bg-dark">Steel Fabrication</option>
                                                <option value="Arc Welding" className="bg-dark">Arc Welding</option>
                                                <option value="Sheet Metal Fabrication" className="bg-dark">Sheet Metal Fabrication</option>
                                                <option value="Industrial Job Work" className="bg-dark">Industrial Job Work</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group mb-4">
                                            <label className="text-dark small text-uppercase fw-bold mb-2" style={{ opacity: 1, letterSpacing: '0.05em', fontFamily: 'var(--font-tag)', fontWeight: 600 }}>Message *</label>
                                            <textarea id="message" rows="4" className="form-control" value={formData.message} onChange={handleChange} placeholder="TELL US ABOUT YOUR PROJECT REQUIREMENTS..." required style={{ backgroundColor: 'var(--light-bg2)', border: '1px solid var(--light-border)', color: 'var(--light-text)', padding: '12px', borderRadius: '0' }}></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center mt-3">
                                        <button type="submit" className="btn-primary-custom w-100 py-3 justify-content-center" style={{ fontSize: '0.68rem', letterSpacing: '0.28em' }}>
                                            SUBMIT ENQUIRY <Send size={14} className="ms-2" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Interactive Map Row */}
                <div className="row mt-5 pt-lg-5" data-aos="fade-up">
                    <div className="col-12">
                        <div className="map-container shadow-sm border" style={{ height: '400px', backgroundColor: 'var(--light-bg)', border: '1px solid var(--light-border)', overflow: 'hidden' }}>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3915.8443905054176!2d77.0466472750426!3d11.050250000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDAzJzAwLjkiTiA3N8KwMDInNTcuMiJF!5e0!3m2!1sen!2sin!4v1715174872658!5m2!1sen!2sin" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0, filter: 'grayscale(10%) contrast(1.1) brightness(0.95)' }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                .form-control::placeholder {
                    color: rgba(12, 74, 110, 0.6) !important;
                    opacity: 1;
                }
                .form-select {
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%230c4a6e' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
                }
            `}</style>
        </section>
    );
};

export default Contact;
