import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className="text-center mb-5" // Bootstrap: text-center, mb-5 (margin-bottom)
    >
      <h2 className="display-4 fw-bold text-primary mb-2">{title}</h2> {/* Bootstrap: display-4 (larger text), fw-bold (font-weight bold), text-primary */}
      <p className="lead text-light">{subtitle}</p> {/* Bootstrap: lead (larger, lighter text), text-light */}
    </motion.div>
  );
};

export default SectionHeader;