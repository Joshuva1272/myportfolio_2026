import './Experience.css';

const experiences = [
  {
    title: 'IT Faculty & Assessor',
    company: 'Explore Educational Institute (EEI)',
    location: 'Dubai, UAE',
    date: 'Nov 2025 – Present',
    bullets: [
      'Deliver Pearson HND / BTEC Level 3 modules in Cloud Computing and Data Science, integrating AWS Academy and Python.',
      'Architect hands-on lab environments in Google Colab and AWS, increasing student engagement in live data workflows.',
      'Manage end-to-end cohort assessment and mentorship for 30+ students, maintaining a 100% Learning Outcome submission rate.'
    ]
  },
  {
    title: 'Business Analyst',
    company: 'Hurix Digital',
    location: 'Mumbai, India',
    date: 'Jan 2025 – Sep 2025',
    bullets: [
      'Engineered structured B2B intelligence databases using Python and Excel, improving data retrieval efficiency by 7%.',
      'Developed automated ETL workflows that reduced manual reporting time by 2 hours per week.',
      'Conducted cross-functional EDA with IT and Sales teams, surfacing insights that improved CRM data hygiene by 11%.',
      'Designed interactive Power BI dashboards to increase senior stakeholder visibility into KPIs.'
    ]
  },
  {
    title: 'Development Team Lead',
    company: 'UNICEF India',
    location: 'Mumbai, India',
    date: 'Oct 2023 – Sep 2024',
    bullets: [
      'Spearheaded data operations across 7 field sites, managing outreach datasets for 50,000+ beneficiaries using Google Sheets API.',
      'Architected centralised BI dashboards and standardised reporting templates that accelerated decision-making speed by 30%.',
      'Performed trend analysis and forecasting on outreach KPIs, enabling data-driven resource reallocation that improved field efficiency by 20%.',
      'Facilitated technical stakeholder management between field teams and IT, achieving 99% uptime.'
    ]
  },
  {
    title: 'Data Analyst',
    company: 'Ayka Control Systems',
    location: 'Mumbai, India',
    date: 'Aug 2022 – Jul 2023',
    bullets: [
      'Conducted data-driven EV market analysis using Python and Excel, delivering forecasts targeting a 15% market share.',
      'Built interactive Tableau dashboards visualising EV adoption trends, product performance, and competitor benchmarking.',
      'Prototyped end-to-end analysis pipelines using Jupyter Notebooks, Ubuntu, and R Studio, reducing ad hoc analysis turnaround by 40%.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Professional <span className="gradient-text">Experience</span></h2>
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <span className="timeline-date">{exp.date}</span>
              <h3>{exp.title}</h3>
              <h4>{exp.company} <span>| {exp.location}</span></h4>
              <ul>
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
