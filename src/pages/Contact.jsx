import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <PageWrapper>
      <div style={styles.container}>
        <h1 className="neon-text" style={{ marginBottom: '40px' }}>Contact</h1>
        
        <motion.div
          className="glass-panel"
          style={styles.card}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: 'spring' }}
          whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 240, 255, 0.1)' }}
        >
          <h2 style={styles.name}>Sunil Aldo S A</h2>
          
          <div style={styles.emailContainer}>
            <Mail size={24} color="var(--accent-color)" />
            <a href="mailto:sunilaldo2004@gmail.com" style={styles.email}>
              sunilaldo2004@gmail.com
            </a>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: '10px 0' }}>Feel free to contact</p>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '0 auto',
    width: '100%',
    textAlign: 'center'
  },
  card: {
    padding: '50px 30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  name: {
    fontSize: '2rem',
    margin: 0,
    color: 'var(--text-primary)',
  },
  emailContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    background: 'rgba(0,0,0,0.3)',
    padding: '15px 25px',
    borderRadius: '30px',
    border: '1px solid var(--glass-border)',
  },
  email: {
    fontSize: '1.2rem',
    color: 'var(--text-secondary)',
    transition: 'color 0.3s ease',
  }
};

export default Contact;
