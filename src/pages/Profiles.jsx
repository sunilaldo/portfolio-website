import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { Github, Linkedin, Code } from 'lucide-react';

const profiles = [
  { platform: "GitHub", handle: "sunilaldo", icon: <Github size={32} />, color: "#ffffff", url: "https://github.com/sunilaldo" },
  { platform: "LinkedIn", handle: "sunil-aldo", icon: <Linkedin size={32} />, color: "#0077b5", url: "https://www.linkedin.com/in/sunil-aldo-s-a-b29804252" },
  { platform: "LeetCode", handle: "sunil_aldo", icon: <Code size={32} />, color: "#ffa116", url: "https://leetcode.com/u/sunil_aldo/" }
];

const Profiles = () => {
  return (
    <PageWrapper>
      <h1 className="neon-text" style={{ textAlign: 'center', marginBottom: '50px' }}>Coding & Professional Profiles</h1>
      <div style={styles.container}>
        {profiles.map((prof, idx) => (
          <motion.a
            href={prof.url}
            target="_blank"
            rel="noreferrer"
            key={idx}
            className="glass-panel"
            style={styles.card}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, type: 'spring', stiffness: 100 }}
            whileHover={{ y: -10, boxShadow: `0 10px 30px ${prof.color}44`, borderColor: prof.color }}
          >
            <div style={{ color: prof.color, marginBottom: '20px' }}>
              {prof.icon}
            </div>
            <h2>{prof.platform}</h2>
            <p style={{ color: 'var(--text-secondary)' }}>{prof.handle}</p>
          </motion.a>
        ))}
      </div>
    </PageWrapper>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '30px',
  },
  card: {
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '250px',
    textAlign: 'center',
    transition: 'border-color 0.3s'
  }
};

export default Profiles;
