import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../data/portfolioData';
import {
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaGithub, FaLinkedin
} from 'react-icons/fa';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-5 bg-dark text-light"> {/* ganti section-padding → py-5 */}
      <Container>
        <SectionHeader title="Contact Me" subtitle="Let's Connect!" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-secondary bg-opacity-10 p-5 rounded shadow-lg" 
        >
          <Row className="g-5">
            <Col md={6}>
              <div className="d-flex align-items-center mb-4">
                <FaPhone className="text-primary fs-3 me-3" />
                <div>
                  <h4 className="fs-6 fw-semibold text-secondary mb-0">Phone</h4>
                  <p className="mb-0">{profile.contact.phone}</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4">
                <FaEnvelope className="text-primary fs-3 me-3" />
                <div>
                  <h4 className="fs-6 fw-semibold text-secondary mb-0">Email</h4>
                  <p className="mb-0">{profile.contact.email}</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4">
                <FaMapMarkerAlt className="text-primary fs-3 me-3" />
                <div>
                  <h4 className="fs-6 fw-semibold text-secondary mb-0">Address</h4>
                  <p className="mb-0">{profile.contact.address}</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4">
                <FaGlobe className="text-primary fs-3 me-3" />
                <div>
                  <h4 className="fs-6 fw-semibold text-secondary mb-0">Website</h4>
                  <a
                    href={`https://${profile.contact.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-info"
                  >
                    {profile.contact.website}
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4">
                <FaGithub className="text-primary fs-3 me-3" />
                <div>
                  <h4 className="fs-6 fw-semibold text-secondary mb-0">GitHub</h4>
                  <a
                    href={`https://${profile.contact.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-info"
                  >
                    {profile.contact.github}
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FaLinkedin className="text-primary fs-3 me-3" />
                <div>
                  <h4 className="fs-6 fw-semibold text-secondary mb-0">LinkedIn</h4>
                  <a
                    href="https://linkedin.com/in/christian-johannes-hutahaean"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-info"
                  >
                    christian-johannes-hutahaean
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <h3 className="h4 fw-bold text-primary mb-4">
                Let's build something amazing together!
              </h3>
              <p className="mb-4">
                Feel free to reach out for collaborations, project inquiries, or just to say hello.
              </p>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    className="bg-dark text-light border-secondary"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    className="bg-dark text-light border-secondary"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Your Message"
                    className="bg-dark text-light border-secondary"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 py-3 fw-bold">
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
