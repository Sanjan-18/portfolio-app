import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: 'Full-Stack Web Development Intern',
      company: 'SkillX',
      duration: 'Feb. 2026 – May 2026',
      description: 'Worked with MERN stack to develop and integrate frontend and backend components. Utilized SQL as well for database management and handling application data along with MongoDB. Applied modern web development technologies and practices.',
      color: 'orange'
    }
  ];

  return (
    <section id="experience" style={{ marginBottom: '4rem' }}>
      <h2 className="section-title">EXPERIENCE</h2>
      <div className="flex-col gap-4">
        {experiences.map((exp, index) => (
          <div key={index} className={`brutal-card ${exp.color}`}>
            <div className="flex justify-between items-center" style={{ marginBottom: '1rem', borderBottom: '2px solid #000', paddingBottom: '0.5rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{exp.role}</h3>
              <span style={{ fontWeight: 'bold' }}>{exp.duration}</span>
            </div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>@ {exp.company}</h4>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
