import React from 'react';
import { motion } from 'framer-motion';

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: Math.random() * 0.1 }}
      viewport={{ once: true }}
      // Bootstrap: badge (base style), bg-secondary (background color), text-white (text color)
      // Custom shadow/hover via inline style or custom CSS if needed.
      className="badge bg-secondary text-white px-3 py-2 me-2 mb-2 fs-6 rounded-pill" // me-2 (margin-end), mb-2 (margin-bottom), fs-6 (font-size), rounded-pill (pill shape)
      style={{
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Custom shadow for elegance
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        cursor: 'default'
      }}
      whileHover={{ scale: 1.05, y: -2, boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)' }} // Framer motion for hover
    >
      {skill}
    </motion.span>
  );
};

export default SkillBadge;