import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, TorusKnot } from '@react-three/drei';
import PageWrapper from '../components/PageWrapper';

const AnimatedShape = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <TorusKnot ref={meshRef} args={[1, 0.3, 128, 64]}>
      <meshStandardMaterial color="#00f0ff" wireframe />
    </TorusKnot>
  );
};

const HeroAbout = () => {
  return (
    <PageWrapper>
      <div style={styles.container}>

        {/* LEFT SIDE TEXT */}
        <div style={styles.textSection}>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={styles.heading}
            className="neon-text"
          >
            Hi,
            <br />
            I'm Sunil Aldo S A
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={styles.paragraph}
          >
            An enthusiastic MCA student with working knowledge of Java, web development,
            and databases. Interested in learning new technologies and improving programming
            skills through real-world projects. A quick learner with a strong desire to
            build efficient and user-friendly software solutions.
          </motion.p>
        </div>

        {/* RIGHT SIDE 3D + PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={styles.rightSideContainer}
        >
          {/* Background 3D Element */}
          <div style={styles.canvasWrapper}>
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <AnimatedShape />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
            </Canvas>
          </div>

          {/* Foreground Photo */}
          <div style={styles.photoWrapper}>
            <img
              src="/profile.png"
              alt="Sunil Aldo S A"
              style={styles.profilePhoto}
              onError={(e) => { e.target.src = "https://via.placeholder.com/300x300/111/00f0ff?text=Add+profile.jpg+to+public+folder" }}
            />
          </div>
        </motion.div>

      </div>
    </PageWrapper>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '80vh',
    gap: '20px',
    padding: '20px',
  },
  textSection: {
    flex: '1 1 500px', // ✅ increased width so text fits
  },
  heading: {
    fontSize: 'clamp(2.5rem, 6vw, 5rem)',
    marginBottom: '20px',
    lineHeight: 1.1,
    whiteSpace: 'nowrap',   // ✅ forces single line
  },
  paragraph: {
    fontSize: '1.2rem',
    color: 'var(--text-secondary)',
    maxWidth: '500px',
    textAlign: 'justify',
  },
  rightSideContainer: {
    flex: '1 1 400px',
    height: '500px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  canvasWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    opacity: 0.6
  },
  photoWrapper: {
    position: 'relative',
    zIndex: 1,
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    padding: '5px',
    background: 'linear-gradient(135deg, var(--accent-color), #bc00dd)',
    boxShadow: '0 0 30px rgba(0, 240, 255, 0.4)',
  },
  profilePhoto: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
    backgroundColor: '#111'
  }
};

export default HeroAbout;