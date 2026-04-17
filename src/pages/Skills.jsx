import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';

const skills = [
  { name: 'Java Spring Boot', level: 90 },
  { name: 'Microservices', level: 85 },
  { name: 'Hypernet / Hibernate', level: 80 },
  { name: 'HTML, CSS, JavaScript', level: 95 },
  { name: 'MySQL', level: 85 },
  { name: 'Microsoft Office', level: 90 },
];

const Skills = () => {
  return (
    <PageWrapper>
      <div style={styles.container}>
        <h1 className="neon-text" style={{ marginBottom: '50px' }}>My Skills</h1>
        <div style={styles.list}>
          {skills.map((skill, idx) => (
            <div key={idx} style={styles.skillRow}>
              <div style={styles.labelWrapper}>
                <span>{skill.name}</span>
              </div>
              <div style={styles.barBg}>
                <motion.div
                  style={styles.barFill}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: idx * 0.2, ease: 'easeOut' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    width: '100%',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  skillRow: {
    width: '100%',
  },
  labelWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
  barBg: {
    width: '100%',
    height: '10px',
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    background: 'var(--accent-color)',
    boxShadow: '0 0 10px var(--accent-color)',
    borderRadius: '5px',
  }
};

export default Skills;
