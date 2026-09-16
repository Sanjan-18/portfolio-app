import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Inventory Management System',
      tech: 'HTML, CSS, Javascript',
      description: 'Developed an inventory management system for quick identification and efficient tracking of products and stock. Implemented real-time stock tracking and low-stock alerts. Generated reports and provided a user-friendly dashboard for managing products and transactions.',
      link: 'https://github.com/Sanjan-18'
    },
    {
      title: 'Blockchain Based Voting System',
      tech: 'React js, Node js, MongoDB',
      description: 'Developed a blockchain-based voting system to securely record and verify votes in real-time. Implemented a transparent and tamper-proof approach for maintaining voting records and results. Designed a user-friendly interface for casting votes and tracking voting information.',
      link: 'https://github.com/Sanjan-18'
    }
  ];

  return (
    <section id="projects" style={{ marginBottom: '4rem' }}>
      <h2 className="section-title">PROJECTS</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {projects.map((project, index) => (
          <div key={index} className="brutal-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: index % 2 === 0 ? 'var(--secondary-color)' : '#fff' }}>
            <h3 style={{ fontSize: '1.8rem', borderBottom: '4px solid #000', paddingBottom: '1rem', marginBottom: '0.5rem' }}>
              {project.title}
            </h3>
            <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Tech: {project.tech}</p>
            <p style={{ flex: 1, marginBottom: '2rem' }}>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer" className="brutal-btn" style={{ textAlign: 'center' }}>VIEW ON GITHUB</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
