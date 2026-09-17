import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={{ marginTop: '4rem', padding: '4rem 0', borderTop: '8px solid #000', textAlign: 'center' }}>
      <h2 className="contact-title" style={{ fontSize: '3rem', marginBottom: '2rem' }}>LET'S BUILD SOMETHING BOLD.</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
      </p>
      <a href="mailto:sanjanmanjunath@gmail.com" className="brutal-btn contact-email" style={{ fontSize: '1.5rem', padding: '1rem 2rem' }}>
        sanjanmanjunath@gmail.com
      </a>
      
      <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        <a href="https://linkedin.com/in/sanjanmanjunath" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', fontWeight: 'bold', fontSize: '1.2rem' }}>LINKEDIN</a>
        <a href="https://github.com/Sanjan-18" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', fontWeight: 'bold', fontSize: '1.2rem' }}>GITHUB</a>
        <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>+91 9611813739</span>
      </div>
    </section>
  );
};

export default Contact;
