import './Projects.css';

const projectsData = [
  {
    title: 'LLM Council — Multi-Agent AI Debate System',
    desc: 'Built a multi-agent framework (Gemini + Llama) where models debate queries to synthesise verified consensus, reducing hallucination rates.',
    stack: ['Python', 'FastAPI', 'React', 'LLMs'],
    image: '/images/1.jpeg'
  },
  {
    title: 'EV Market Forecasting Model',
    desc: 'Designed a Python-based forecasting model projecting 15% market share for an EV product launch; presented findings via Power BI to executive stakeholders.',
    stack: ['Python', 'Power BI', 'Predictive Modelling'],
    image: '/images/2.jpeg'
  },
  {
    title: 'UNICEF Outreach BI Dashboard',
    desc: 'Built a Tableau dashboard tracking KPIs across 7 field sites; improved decision-making speed by 30% by replacing manual reporting with automated data pipelines.',
    stack: ['Tableau', 'Google Sheets API', 'Data Pipeline'],
    image: '/images/3.jpeg'
  },
  {
    title: 'CRM Automation Suite',
    desc: 'Automated B2B research and CRM hygiene workflows using Python web scraping and ETL scripts, cutting weekly manual research time by 15 hours.',
    stack: ['Python', 'Web Scraping', 'ETL'],
    image: '/images/4.jpeg'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Key <span className="gradient-text">Projects</span></h2>
      <div className="projects-grid">
        {projectsData.map((project, idx) => (
          <div key={idx} className="project-card glass-panel">
            <div className="project-image">
              <img src={project.image} alt={project.title} onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/600x400/0a0a0a/00f0ff?text=Project+Image' }} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-stack">
                {project.stack.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
