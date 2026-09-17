import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav-container" style={{ padding: '1rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '4px solid #000', marginBottom: '2rem' }}>
      <h2 style={{ margin: 0, fontSize: '2rem', letterSpacing: '-1px' }}>MY.PORTFOLIO</h2>
      <div className="nav-links" style={{ display: 'flex', gap: '2rem' }}>
        <a href="#experience" className="brutal-link">EXPERIENCE</a>
        <a href="#projects" className="brutal-link">PROJECTS</a>
        <a href="#contact" className="brutal-link">CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;
