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
    <section id="contact" className="section-padding bg-gray-900 text-light">
      <Container>
        <SectionHeader title="Contact Me" subtitle="Let's Connect!" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gray-800 p-4 p-md-5 rounded-4 shadow-lg"
        >
          <Row className="g-4">
            <Col md={6}>
              <div className="d-flex align-items-center mb-3">
                <FaPhone className="text-primary fs-4 me-3" />
                <div>
                  <h6 className="fw-semibold text-secondary mb-0">Phone</h6>
                  <p className="mb-0 small">{profile.contact.phone}</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FaEnvelope className="text-primary fs-4 me-3" />
                <div>
                  <h6 className="fw-semibold text-secondary mb-0">Email</h6>
                  <p className="mb-0 small">{profile.email}</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FaMapMarkerAlt className="text-primary fs-4 me-3" />
                <div>
                  <h6 className="fw-semibold text-secondary mb-0">Address</h6>
                  <p className="mb-0 small">{profile.contact.address}</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FaGlobe className="text-primary fs-4 me-3" />
                <div>
                  <h6 className="fw-semibold text-secondary mb-0">Website</h6>
                  <a
                    href={`https://${profile.contact.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-info small"
                  >
                    {profile.contact.website}
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FaGithub className="text-primary fs-4 me-3" />
                <div>
                  <h6 className="fw-semibold text-secondary mb-0">GitHub</h6>
                  <a
                    href="https://github.com/christia006"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-info small"
                  >
                    christia006
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FaLinkedin className="text-primary fs-4 me-3" />
                <div>
                  <h6 className="fw-semibold text-secondary mb-0">LinkedIn</h6>
                  <a
                    href="https://www.linkedin.com/in/christianhutahaean"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-info small"
                  >
                    christianhutahaean
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <h5 className="fw-bold text-primary mb-3">Let's build something amazing together!</h5>
              <p className="small text-gray-300 mb-4">Feel free to reach out for collaborations, project inquiries, or just to say hello.</p>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label className="small text-secondary">Your Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                    className="bg-dark text-light border-secondary"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="small text-secondary">Your Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    className="bg-dark text-light border-secondary"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label className="small text-secondary">Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Write your message here..."
                    className="bg-dark text-light border-secondary"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 py-2 fw-semibold"
                >
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
