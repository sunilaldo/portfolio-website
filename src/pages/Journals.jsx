import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { ExternalLink } from 'lucide-react';

const journals = [
  { 
    title: "HOMECHEF WEB APPLICATION - INSTANT ACCESS TO HOME COOKED MEALS", 
    link: "https://doi.org/10.36227/techrxiv.175691229.95483356/v1",
    publisher: "TechRxiv"
  },
  { 
    title: "AI-Powered Hyperlocal Food and Grocery Delivery Platform with Integrated Home Chef Services and Food Rescue Hub", 
    link: "https://www.irejournals.com/paper-details/1715699",
    publisher: "IRE Journals"
  }
];

const Journals = () => {
  return (
    <PageWrapper>
      <h1 className="neon-text" style={{ textAlign: 'center', marginBottom: '40px' }}>Published Journals</h1>
      <div style={styles.list}>
        {journals.map((journal, idx) => (
          <motion.a
            key={idx}
            href={journal.link}
            target="_blank"
            rel="noreferrer"
            className="glass-panel"
            style={styles.card}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(0,240,255,0.05)', borderColor: 'var(--accent-color)' }}
          >
            <h2 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>{journal.title}</h2>
            <div style={styles.meta}>
              <span style={{ color: 'var(--accent-color)' }}>{journal.publisher}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>Read Paper <ExternalLink size={14} /></span>
            </div>
          </motion.a>
        ))}
      </div>
    </PageWrapper>
  );
};

const styles = {
  list: {
    maxWidth: '900px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  card: {
    padding: '30px',
    cursor: 'pointer',
    display: 'block',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'all 0.3s',
  },
  meta: {
    marginTop: '15px',
    color: 'var(--text-secondary)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.9rem',
    borderTop: '1px solid var(--glass-border)',
    paddingTop: '15px'
  }
};

export default Journals;
