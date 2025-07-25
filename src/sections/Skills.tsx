import React from 'react';
import SectionHeader from '../components/SectionHeader';
import SkillBadge from '../components/SkillBadge';
import { skills } from '../data/portfolioData';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-dark text-light">
      <Container>
        <SectionHeader title="My Skills" subtitle="Technologies I Master" />
        <Row className="g-4 justify-content-center">
          
          {[
            { title: 'Languages', data: skills.languages },
            { title: 'AI / ML Libraries', data: skills.ai_ml },
            { title: 'Frontend', data: skills.frontend },
            { title: 'Backend', data: skills.backend },
            { title: 'Databases & Cloud', data: [...skills.databases, ...skills.cloud_devops] },
            { title: 'Architecture & Tools', data: [...skills.architecture, ...skills.tools] },
          ].map((section, idx) => (
            <Col xs={12} sm={6} lg={4} key={idx}>
              <motion.div
                className="bg-gray-800 p-4 rounded-4 shadow-sm h-100 d-flex flex-column"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <h3 className="h5 fw-bold text-primary mb-3">{section.title}</h3>
                <div className="d-flex flex-wrap gap-2">
                  {(section.data || []).map((skill, i) => (
                    <SkillBadge key={i} skill={skill} />
                  ))}
                </div>
              </motion.div>
            </Col>
          ))}

        </Row>
      </Container>
    </section>
  );
};

export default Skills;
