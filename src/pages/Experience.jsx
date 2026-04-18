import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';

const experienceData = [
  {
    category: "Internships",
    items: [
      {
        title: "Full Stack Development Intern",
        subtitle: "Jb Soft System | Chennai",
        date: "01/2026 - 03/2026",
        details: "Built end-to-end web applications with user authentication, API integration, and database connectivity, improving overall system functionality."
      },
      {
        title: "Data Analyst Intern",
        subtitle: "Chudar Education Organization | Chennai",
        date: "12/2023 - 01/2024",
        details: "Performed detailed data cleaning and preprocessing using Excel to ensure high data accuracy and consistency and utilized Tableau to create interactive dashboards and visual reports for performance monitoring."
      }
    ]
  },
  {
    category: "Education",
    items: [
      {
        title: "Master of Computer Applications (MCA)",
        subtitle: "SRM Valliammai Engineering College",
        date: "2024 - 2026",
        details: "CGPA: 8.3"
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        subtitle: "Loyola College",
        date: "2021 - 2024",
        details: "CGPA: 7.3"
      },
      {
        title: "HSLC (12th Grade)",
        subtitle: "Kingston Matric Higher Secondary School",
        date: "2020 - 2021",
        details: "Score: 82.50%"
      },
      {
        title: "SSLC (10th Grade)",
        subtitle: "Kingston Matric Higher Secondary School",
        date: "2018 - 2019",
        details: "Score: 77.60%"
      }
    ]
  },
  {
    category: "Certifications",
    items: [
      { title: "Java Full Stack", subtitle: "Qspiders", date: "", details: "" },
      { title: "Data Analysis using Tableau", subtitle: "Chudar Education Organization", date: "", details: "" },
      { title: "Web Design & Development", subtitle: "Udemy", date: "", details: "" }
    ]
  }
];

const Experience = () => {
  return (
    <PageWrapper>
      <h1 className="neon-text" style={{ textAlign: 'center', marginBottom: '40px' }}>Experience & Education</h1>
      <div style={styles.list}>
        {experienceData.map((section, sectionIdx) => (
          <div key={sectionIdx} style={{ marginBottom: '40px' }}>
            <h2 style={{ color: 'var(--accent-color)', marginBottom: '20px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '10px' }}>
              {section.category}
            </h2>
            <div style={styles.itemsGrid}>
              {section.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="glass-panel"
                  style={styles.card}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                >
                  <div style={styles.cardHeader}>
                    <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{item.title}</h3>
                    {item.date && <span style={styles.date}>{item.date}</span>}
                  </div>
                  <h4 style={{ color: 'var(--text-secondary)', margin: '5px 0 10px 0', fontWeight: 'normal' }}>{item.subtitle}</h4>
                  {item.details && <p style={{ fontSize: '0.9rem', color: '#ccc', textAlign: 'justify' }}>{item.details}</p>}
                </motion.div>
              ))}
            </div>
          </div>
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
  itemsGrid: {
    display: 'grid',
    gap: '20px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
  },
  card: {
    padding: '25px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column'
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '10px',
    flexWrap: 'wrap'
  },
  date: {
    fontSize: '0.85rem',
    color: 'var(--accent-color)',
    background: 'rgba(0, 240, 255, 0.1)',
    padding: '4px 8px',
    borderRadius: '4px',
    whiteSpace: 'nowrap'
  }
};

export default Experience;
