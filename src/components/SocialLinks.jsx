import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code } from 'lucide-react';

const socials = [
  { icon: <Github />, url: 'https://github.com/sunilaldo' },
  { icon: <Linkedin />, url: 'https://www.linkedin.com/in/sunil-aldo-s-a-b29804252' },
  { icon: <Code />, url: 'https://leetcode.com/u/sunil_aldo/' }
];

const SocialLinks = () => {
  return (
    <div style={styles.container}>
      {socials.map((item, idx) => (
        <motion.a
          key={idx}
          href={item.url}
          target="_blank"
          rel="noreferrer"
          style={styles.link}
          whileHover={{ scale: 1.2, color: 'var(--accent-color)' }}
          whileTap={{ scale: 0.9 }}
        >
          {item.icon}
        </motion.a>
      ))}
      <div style={styles.line}></div>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    left: '30px',
    bottom: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    zIndex: 100,
  },
  link: {
    color: 'var(--text-secondary)',
    transition: 'color 0.3s ease',
  },
  line: {
    width: '2px',
    height: '80px',
    background: 'var(--text-secondary)',
    opacity: 0.3,
  }
};

export default SocialLinks;
