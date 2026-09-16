import React from 'react';

const SkillsAndEducation = () => {
  return (
    <section id="skills-edu" style={{ marginBottom: '4rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        {/* Education Section */}
        <div>
          <h2 className="section-title" style={{ marginTop: 0 }}>EDUCATION</h2>
          <div className="flex-col gap-4">
            <div className="brutal-card" style={{ padding: '1rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>B.E in Computer Engineering (9.56 CGPA)</h3>
              <p style={{ fontWeight: 'bold' }}>New Horizon College of Engineering</p>
              <p>2026 | Bengaluru, Karnataka</p>
            </div>
            <div className="brutal-card" style={{ padding: '1rem', backgroundColor: 'var(--secondary-color)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>12th — CBSE (88.6%)</h3>
              <p style={{ fontWeight: 'bold' }}>Narayana PU College</p>
              <p>Bellandur, Bengaluru</p>
            </div>
            <div className="brutal-card" style={{ padding: '1rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>10th — ICSE (92.8%)</h3>
              <p style={{ fontWeight: 'bold' }}>The Regency Public School</p>
              <p>2022 | Bengaluru</p>
            </div>
          </div>
        </div>

        {/* Skills & Certifications Section */}
        <div>
          <h2 className="section-title" style={{ marginTop: 0 }}>SKILLS & CERTS</h2>
          <div className="brutal-card" style={{ backgroundColor: 'var(--primary-color)' }}>
            <h3 style={{ borderBottom: '2px solid #000', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Technical Skills</h3>
            <ul style={{ listStyleType: 'square', paddingLeft: '1.5rem', marginBottom: '2rem', fontWeight: 'bold' }}>
              <li>Front End: HTML, CSS, JavaScript</li>
              <li>Back End: Python, Java, C</li>
              <li>Database & Core: SQL, MongoDB, DSA</li>
              <li>Operating Systems: Windows, Linux</li>
            </ul>

            <h3 style={{ borderBottom: '2px solid #000', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Certifications</h3>
            <ul style={{ listStyleType: 'square', paddingLeft: '1.5rem', fontWeight: 'bold' }}>
              <li>NPTEL - Cloud Computing</li>
              <li>NPTEL - Data Science for Engineers</li>
              <li>IBM - Cybersecurity Fundamentals</li>
              <li>IBM - Journey to Cloud: Envisioning Your Solution</li>
              <li>UiPath - RPA Developer Foundation</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsAndEducation;
