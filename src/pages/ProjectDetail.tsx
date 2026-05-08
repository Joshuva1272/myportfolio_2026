import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { ArrowLeft, ExternalLink, Code } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { projectsData } from '../data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white pt-24">
        <h2>Project not found</h2>
        <Link to="/" className="text-[#00f0ff] mt-4 hover:underline">Return Home</Link>
      </div>
    );
  }

  const featureVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  const staggerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="project-detail-container"
    >
      <Link to="/" className="back-link">
        <ArrowLeft size={20} /> Back to Portfolio
      </Link>

      <div className="project-detail-content glass-panel">
        <h1 className="project-detail-title">
          {project.title}
        </h1>
        
        {project.role && (
          <p className="project-role">
            Role: {project.role}
          </p>
        )}

        <div className="project-stack-tags">
          {project.stack.map((tech, i) => (
            <motion.span 
              key={i} 
              className="project-stack-tag"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <div className="project-layout">
          <div>
            <h3 className="project-section-title">
              <Code size={24} style={{ color: '#00f0ff' }}/> Project Overview
            </h3>
            <motion.p 
              className="project-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {project.detailedDesc || project.desc}
            </motion.p>
            
            {project.features && (
              <motion.div 
                className="project-features"
                variants={staggerVariants}
                initial="hidden"
                animate="visible"
              >
                <h4>Key Technical Implementations</h4>
                <ul>
                  {project.features.map((feature, idx) => (
                    <motion.li key={idx} variants={featureVariants}>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            <motion.div 
              className="project-links"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="project-link-btn project-link-source">
                  <FaGithub size={20} /> View Source Code
                </a>
              )}
              <a href={project.github || "#"} target="_blank" rel="noreferrer" className="project-link-btn project-link-demo">
                <ExternalLink size={20} /> Live Architecture / Demo
              </a>
            </motion.div>
          </div>

          <div>
            <motion.div 
              className="project-image-container"
              whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(0, 240, 255, 0.2)' }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
            >
              <img src={project.image} alt={project.title} onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/800x600/0a0a0a/00f0ff?text=Project+Preview' }} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
