import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../data/portfolioData';
import { FaLightbulb } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import profileImage from '../images/ian.png'; // ✅ Import gambar baru

const About: React.FC = () => {
  const currentEducation = profile.education && profile.education.length > 0 ? profile.education[0] : null;

  return (
    <section id="about" className="section-padding bg-gray-900 text-light">
      <Container>
        <SectionHeader title="About Me" subtitle="A Glimpse Into My Journey" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gray-800 p-5 rounded shadow-lg"
        >
          <Row className="d-flex align-items-center">
            <Col md={4} className="d-flex justify-content-center mb-4 mb-md-0">
              <div 
                className="d-flex flex-column align-items-center justify-content-center rounded-circle shadow-lg overflow-hidden" 
                style={{ width: '250px', height: '250px' }}
              >
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="img-fluid"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </Col>
            <Col md={8} className="text-center text-md-start">
              <p className="mb-3 text-gray-200">{profile.bio}</p>
              <p className="mb-3 text-gray-200">
                I am passionate about building robust, scalable, and user-friendly
                applications. My journey involves continuously learning and
                exploring new technologies to deliver innovative solutions.
              </p>
              {currentEducation && (
                <p className="mb-3 fw-semibold text-primary">
                  <span className="text-secondary me-2">
                    <FaLightbulb className="d-inline-block align-middle" />
                  </span>
                  GPA: {currentEducation.gpa} (Institut Teknologi Del)
                </p>
              )}
              <p className="text-gray-200">
                When I'm not coding, you can find me {profile.hobbies.join(', ').toLowerCase()}.
              </p>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
