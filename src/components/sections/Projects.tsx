import { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projects';
import './Projects.css';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80 }
  }
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Machine Learning', 'Data Engineering', 'BI & Analytics'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Key <span className="gradient-text">Projects</span></h2>
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full border transition-all duration-300 ${
              filter === cat 
                ? 'bg-[#00f0ff]/20 border-[#00f0ff] text-[#00f0ff]' 
                : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/30'
            }`}
            style={{ 
              padding: '8px 24px', 
              borderRadius: '50px', 
              cursor: 'pointer', 
              background: filter === cat ? 'rgba(0, 240, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${filter === cat ? '#00f0ff' : 'rgba(255, 255, 255, 0.1)'}`,
              color: filter === cat ? '#00f0ff' : '#cbd5e1',
              margin: '0 8px',
              marginBottom: '10px'
            }}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <AnimatePresence mode="popLayout">
        {filteredProjects.map((project) => (
          <motion.div 
            key={project.id} 
            className="project-card glass-panel" 
            variants={cardVariants} 
            whileHover={{ y: -8, boxShadow: '0 10px 30px rgba(0, 240, 255, 0.15)' }}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Link to={`/project/${project.id}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
              <div className="project-image">
                <img src={project.image} alt={project.title} onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/600x400/0a0a0a/00f0ff?text=Project+Image' }} />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 hover:opacity-100 transition-opacity duration-300" style={{ position: 'absolute', top: '15px', right: '15px', display: 'flex', gap: '10px' }}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="p-2 bg-black/50 rounded-full backdrop-blur hover:text-[#00f0ff] transition-colors" style={{ padding: '8px', background: 'rgba(0,0,0,0.5)', borderRadius: '50%', color: 'white' }} onClick={(e) => e.stopPropagation()}>
                      <FaGithub size={20} />
                    </a>
                  )}
                  <a href={project.github || "#"} target="_blank" rel="noreferrer" className="p-2 bg-black/50 rounded-full backdrop-blur hover:text-[#00f0ff] transition-colors" style={{ padding: '8px', background: 'rgba(0,0,0,0.5)', borderRadius: '50%', color: 'white' }} onClick={(e) => e.stopPropagation()}>
                    <ExternalLink size={20} />
                  </a>
                </div>
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
            </Link>
          </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
