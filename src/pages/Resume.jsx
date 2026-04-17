import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { Download } from 'lucide-react';

const Resume = () => {
  return (
    <PageWrapper>
      <div style={styles.container}>
        <motion.div
          className="glass-panel"
          style={styles.card}
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 10 }}
          whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,240,255,0.2)' }}
        >
          <div style={styles.iconWrapper}>
            <Download size={48} color="var(--accent-color)" />
          </div>
          <h2 style={{ marginBottom: '10px' }}>Curriculum Vitae</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
            Download my resume to see my experience, education, and skills in detail.
          </p>
          <a href="/Resume.pdf" download style={styles.downloadBtn} className="neon-btn">
            Download PDF
          </a>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '70vh',
  },
  card: {
    padding: '50px',
    textAlign: 'center',
    maxWidth: '500px',
    transformStyle: 'preserve-3d',
    perspective: '1000px',
  },
  iconWrapper: {
    background: 'rgba(0, 240, 255, 0.1)',
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
  },
  downloadBtn: {
    display: 'inline-block',
    padding: '12px 30px',
    borderRadius: '8px',
    fontWeight: 'bold',
  }
};

export default Resume;
