import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';

const projects = [
  { 
    title: "AI-Powered Hyperlocal Food And Grocery Delivery Platform", 
    desc: "A web-based application connecting customers with skilled home chefs nearby. Similar to a food service platform but specifically for local home chefs.", 
    color: "#00f0ff" 
  },
  { 
    title: "Mess Management System", 
    desc: "Efficient daily mess operations manager. Implemented CRUD operations with PHP, MySQL. Optimized queries and built a responsive HTML/CSS/JS frontend.", 
    color: "#ffa116" 
  }
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    className="glass-panel"
    style={{ ...styles.card, borderTop: `4px solid ${project.color}` }}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -10, scale: 1.05 }}
  >
    <div style={styles.thumbnail}>
      <h3 style={{ color: project.color, margin: 0, fontSize: '3rem' }}>{project.title.charAt(0)}</h3>
    </div>
    <h3 style={{ marginTop: '20px', fontSize: '1.5rem' }}>{project.title}</h3>
    <p style={{ color: 'var(--text-secondary)', marginTop: '10px', textAlign: 'justify' }}>{project.desc}</p>
  </motion.div>
);

const Projects = () => {
  return (
    <PageWrapper>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }} className="neon-text">Featured Projects</h1>
      <div style={styles.grid}>
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} project={proj} index={idx} />
        ))}
      </div>
    </PageWrapper>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px',
  },
  card: {
    padding: '30px',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: '150px',
    background: 'rgba(0,0,0,0.5)',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

export default Projects;
