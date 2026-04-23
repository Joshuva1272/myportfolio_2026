import './Skills.css';

const skillsData = [
  { category: 'Languages & DB', items: ['Python (Pandas, NumPy, Scikit-Learn)', 'SQL & Advanced Querying', 'R & R Studio'] },
  { category: 'BI & Visualization', items: ['Power BI & DAX', 'Tableau', 'Excel (Pivot, Power Query)'] },
  { category: 'Data Engineering', items: ['Data Pipeline Automation', 'ETL Design & Orchestration', 'AWS Cloud Analytics', 'Google Sheets API'] },
  { category: 'Analytics Core', items: ['Predictive Modelling & Forecasting', 'Market Intelligence', 'EDA & Statistical Analysis', 'Jupyter / Google Colab'] },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Core <span className="gradient-text">Competencies</span></h2>
      <div className="skills-container">
        {skillsData.map((skillGroup, idx) => (
          <div key={idx} className="skill-card glass-panel">
            <h3>{skillGroup.category}</h3>
            <div className="skill-tags">
              {skillGroup.items.map((item, i) => (
                <span key={i} className="skill-tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
