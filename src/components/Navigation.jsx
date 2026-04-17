import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Zap, FileText, Briefcase, Code, Mail, FileQuestion, User } from 'lucide-react';

const links = [
  { path: '/', label: 'Home', icon: <Home size={20} /> },
  { path: '/resume', label: 'Resume', icon: <FileText size={20} /> },
  { path: '/projects', label: 'Projects', icon: <Briefcase size={20} /> },
  { path: '/skills', label: 'Skills', icon: <Code size={20} /> },
  { path: '/experience', label: 'Experience', icon: <FileQuestion size={20} /> },
  { path: '/profiles', label: 'Profiles', icon: <User size={20} /> },
  { path: '/cta', label: 'Hire Me', icon: <Zap size={20} /> },
  { path: '/contact', label: 'Contact', icon: <Mail size={20} /> },
];

const Navigation = () => {
  return (
    <nav style={styles.nav} className="glass-panel">
      <ul style={styles.ul}>
        {links.map((link) => (
          <li key={link.path} style={styles.li}>
            <NavLink to={link.path} className="nav-item" style={({isActive}) => ({ ...styles.link, color: isActive ? 'var(--accent-color)' : 'var(--text-primary)'})}>
              {({ isActive }) => (
                <>
                  {link.icon}
                  <span style={styles.label}>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      style={styles.activeIndicator}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 100,
    padding: '10px 20px',
    borderRadius: '30px',
    maxWidth: '95vw',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    scrollbarWidth: 'none',
  },
  ul: {
    display: 'flex',
    gap: '12px',
    margin: 0,
    padding: 0,
  },
  li: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
    transition: 'color 0.3s',
    position: 'relative',
    zIndex: 1,
  },
  label: {
    fontSize: 'clamp(11px, 1.2vw, 14px)',
    fontWeight: 600,
  },
  activeIndicator: {
    position: 'absolute',
    bottom: '-5px',
    left: 0,
    right: 0,
    height: '2px',
    background: 'var(--accent-color)',
    borderRadius: '2px',
    boxShadow: '0 0 10px var(--accent-color)',
    zIndex: -1,
  }
};

export default Navigation;
