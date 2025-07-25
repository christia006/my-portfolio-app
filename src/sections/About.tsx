import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { profile, education } from '../data/portfolioData';
import { FaGraduationCap, FaHeart } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import profileImage from '../images/ian.png';

const About: React.FC = () => {
  const currentEducation = education.length > 0 ? education[0] : null;
  const hobbiesText = profile.hobbies?.join(', ').toLowerCase() || 'exploring new things';

  return (
    <section id="about" className="section-padding bg-gray-900 text-light">
      <Container>
        <SectionHeader title="About Me" subtitle="A Glimpse Into My Journey" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gray-800 p-4 p-md-5 rounded-4 shadow-lg"
        >
          <Row className="align-items-center g-4">
            <Col xs={12} md={4} className="text-center">
              <div
                className="rounded-circle overflow-hidden border border-3 border-primary shadow"
                style={{ width: '200px', height: '200px', margin: '0 auto' }}
              >
                <img
                  src={profileImage}
                  alt="Profile"
                  className="img-fluid"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </Col>

            <Col xs={12} md={8}>
              <motion.p
                className="mb-3 text-gray-200 fs-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {profile.bio}
              </motion.p>
              
              <motion.p
                className="mb-3 text-gray-200 fs-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                I am passionate about building robust, scalable, and user-friendly
                applications. Continuously learning and exploring new technologies
                to deliver innovative solutions is what drives me.
              </motion.p>

              {currentEducation && (
                <motion.p
                  className="mb-3 fw-semibold text-primary fs-6 d-flex align-items-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <FaGraduationCap className="me-2 text-secondary" />
                  GPA: {currentEducation.gpa} ({currentEducation.institution})
                </motion.p>
              )}

              <motion.p
                className="text-gray-200 fs-6 d-flex align-items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <FaHeart className="me-2 text-danger" />
                When I'm not coding, you can find me {hobbiesText}.
              </motion.p>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
