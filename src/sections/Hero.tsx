import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { Mesh } from 'three';
import { profile } from '../data/portfolioData';

const AnimatedSphere: React.FC = () => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += hovered ? 0.01 : 0.005;
      meshRef.current.rotation.x += hovered ? 0.004 : 0.002;
    }
  });

  return (
    <Sphere
      args={[2, 32, 32]}
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial
        color="#ffffff"
        wireframe
        roughness={0.3}
        metalness={0.7}
      />
    </Sphere>
  );
};

const Hero: React.FC = () => {
  return (
    <section
      className="position-relative d-flex flex-column flex-md-row align-items-center justify-content-center overflow-hidden px-3 py-5"
      style={{
        background: '#ffffff',
        color: '#212529',
        minHeight: '100vh',
      }}
    >
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
        
        {/* Kolom bola */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="d-flex justify-content-center align-items-center order-1 order-md-2 mb-4 mb-md-0"
          style={{
            flex: '1',
            width: '100%',
            maxWidth: '800px',
            height: '800px',
          }}
        >
          <Canvas
            camera={{ position: [0, 0, 4] }}
            style={{ background: 'transparent', width: '100%', height: '100%' }}
          >
            <ambientLight intensity={0.8} />
            <pointLight position={[5, 5, 5]} intensity={1.2} color="#000000" />
            <AnimatedSphere />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.4}
              enableDamping
              dampingFactor={0.05}
            />
          </Canvas>
        </motion.div>

        {/* Kolom teks & tombol */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center text-md-start order-2 order-md-1"
          style={{ maxWidth: '500px', flex: '1' }}
        >
          <h1
            className="display-5 fw-bold mb-3"
            style={{
              color: '#212529',
              textShadow: '0 1px 4px rgba(0,0,0,0.1)',
            }}
          >
            Hi, I'm{' '}
            <span style={{ color: '#0d6efd' }}>{profile.name.split(' ')[0]}</span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="lead fw-semibold mb-4"
            style={{ color: '#6c757d' }}
          >
            {profile.title}
          </motion.p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-dark btn-lg rounded-pill px-4 py-2 fw-bold shadow-sm"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Responsive custom style */}
      <style jsx>{`
  @media (max-width: 767.98px) {
    .container > div:first-child {
      max-width: 100%;
      height: 900px; /* perbesar tinggi di mobile, default tadi 300px */
      margin-bottom: 1.5rem;
    }
  }
`}</style>

    </section>
  );
};

export default Hero;
