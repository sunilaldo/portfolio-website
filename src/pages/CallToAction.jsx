import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';

const CallToAction = () => {
  return (
    <PageWrapper>
      <div style={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={styles.title}
        >
          Ready to build your next project together?
        </motion.h2>

        <motion.a
          className="neon-btn"
          style={styles.button}
          href="mailto:sunilaldo2004@gmail.com"
          whileHover={{ scale: 1.1, filter: 'blur(0px)' }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, filter: 'blur(5px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Hire Me
        </motion.a>
      </div>
    </PageWrapper>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '70vh',
    textAlign: 'center'
  },
  title: {
    fontSize: '3rem',
    marginBottom: '40px',
    background: 'linear-gradient(90deg, #fff, var(--accent-color))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  button: {
    fontSize: '1.5rem',
    padding: '20px 50px',
    borderRadius: '50px',
    cursor: 'pointer',
    fontWeight: 'bold',
  }
};

export default CallToAction;
