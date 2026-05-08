import './Education.css';

const educationData = [
  {
    degree: 'MSc Data Science',
    institution: 'University of Europe for Applied Sciences, Dubai, UAE',
    year: '2025 – 2027',
    type: 'edu'
  },
  {
    degree: 'PGDM – Data Analytics',
    institution: 'Indian Institute of Technology (IIT) Kanpur',
    year: 'CGPA: 9.0 | 2024 – 2025',
    type: 'edu'
  },
  {
    degree: 'B.Tech – Comp. Science',
    institution: 'Xavier Institute of Engineering, University of Mumbai',
    year: 'CGPA: 8.474 | 2019 – 2023',
    type: 'edu'
  }
];

const certData = [
  { title: 'Data Engineering with Microsoft Azure', issuer: 'FutureLearn', year: '2026' },
  { title: 'Data Analytics with Python', issuer: 'FutureLearn', year: '2026' },
  { title: 'Machine Learning for Image Data', issuer: 'University of Nottingham', year: '2026' },
  { title: 'Getting Started with Generative AI', issuer: 'Pragmatic AI Labs', year: '2026' },
  { title: 'Practical Machine Learning for AI', issuer: 'Cardiff University', year: '2025' },
  { title: 'Advanced Data Analytics', issuer: 'IIT Kanpur', year: '2024' },
  { title: 'Data Analytical Professional', issuer: 'Edvancer', year: '2024' },
  { title: 'Tableau Certified', issuer: 'Edvancer', year: '2024' }
];

const Education = () => {
  return (
    <section id="education" className="education-certs">
      <div className="edu-col">
        <h2 className="section-title">Education</h2>
        <div className="edu-list">
          {educationData.map((edu, idx) => (
            <div key={idx} className="edu-card glass-panel">
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <span className="edu-year">{edu.year}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="cert-col">
        <h2 className="section-title">Certifications</h2>
        <div className="cert-grid">
          {certData.map((cert, idx) => (
            <div key={idx} className="cert-card glass-panel">
              <div className="cert-icon">🏆</div>
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p>{cert.issuer} <span>• {cert.year}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
