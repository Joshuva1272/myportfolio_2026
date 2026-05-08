import { motion, Variants } from 'framer-motion';
import { Database, PieChart, GitBranch, Lightbulb } from 'lucide-react';
import Skills3D from '../v2/Skills3D';
import './Skills.css';

const skillsData = [
  { category: 'AI & Machine Learning', icon: <Lightbulb size={24} />, items: ['Predictive Modelling', 'Deep Learning & CNNs', 'LLMs (Llama, Gemini)', 'Scikit-Learn'] },
  { category: 'Data Engineering', icon: <GitBranch size={24} />, items: ['Apache Airflow', 'Docker', 'ETL Design', 'AWS Cloud Analytics'] },
  { category: 'Languages & DB', icon: <Database size={24} />, items: ['Python (Pandas, NumPy)', 'SQL & Advanced Querying', 'R & R Studio'] },
  { category: 'BI & Visualization', icon: <PieChart size={24} />, items: ['Power BI & DAX', 'Tableau', 'Streamlit'] },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Core <span className="gradient-text">Competencies</span></h2>
      
      <Skills3D />

      <motion.div 
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillsData.map((skillGroup, idx) => (
          <motion.div key={idx} className="skill-card glass-panel" variants={cardVariants} whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(0, 240, 255, 0.2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
              <span style={{ color: '#00f0ff' }}>{skillGroup.icon}</span>
              <h3 style={{ margin: 0 }}>{skillGroup.category}</h3>
            </div>
            <div className="skill-tags">
              {skillGroup.items.map((item, i) => (
                <motion.span key={i} className="skill-tag" whileHover={{ y: -3 }}>{item}</motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
