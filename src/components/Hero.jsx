import React from 'react';

const Hero = () => {
  return (
    <section style={{ margin: '4rem 0' }}>
      <h1 style={{ fontSize: '4rem', lineHeight: '1.1', maxWidth: '900px' }}>
        HI, I'M SANJAN MANJUNATH. <br/> A <span style={{ backgroundColor: 'var(--secondary-color)', padding: '0 10px', border: '4px solid #000', display: 'inline-block', marginTop: '10px' }}>SOFTWARE DEVELOPER</span> & AI ENTHUSIAST.
      </h1>
      <p style={{ fontSize: '1.5rem', marginTop: '2rem', maxWidth: '700px' }}>
        A B.E graduate passionate about software development and AI, with hands-on experience in full-stack web development. I love applying technical skills to build dynamic, high-performance applications.
      </p>
      <a href="#contact" className="brutal-btn">LET'S TALK</a>
    </section>
  );
};

export default Hero;
