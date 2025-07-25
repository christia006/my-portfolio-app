import React from 'react';
import { certifications, achievements } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Achievements: React.FC = () => (
  <section id="achievements" className="section-padding bg-gray-900 text-light">
    <Container>
      <SectionHeader title="Achievements & Certifications" subtitle="Milestones on My Journey" />
      <Row className="gy-4"> {/* gy-4: vertical gutter for mobile spacing */}
        <Col xs={12} md={6}>
          <h4 className="fw-bold text-primary mb-3">Certifications</h4>
          {certifications.map((cert, idx) => (
            <Card
              key={idx}
              className="mb-3 shadow border-0"
              style={{
                background: 'linear-gradient(135deg, #ffffff, #f8f9fa)',
                borderRadius: '1rem'
              }}
            >
              <Card.Body className="text-dark"> {/* text-dark: warna teks hitam */}
                <Card.Title className="fw-semibold">{cert.title}</Card.Title>
                {cert.place && (
                  <Card.Subtitle className="text-muted small">{cert.place}</Card.Subtitle>
                )}
                <small className="text-secondary">{cert.year}</small>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col xs={12} md={6}>
          <h4 className="fw-bold text-primary mb-3">Achievements</h4>
          {achievements.map((ach, idx) => (
            <Card
              key={idx}
              className="mb-3 shadow border-0"
              style={{
                background: 'linear-gradient(135deg, #ffffff, #f8f9fa)',
                borderRadius: '1rem'
              }}
            >
              <Card.Body className="text-dark">
                <Card.Title className="fw-semibold">{ach.title}</Card.Title>
                <Card.Subtitle className="text-muted small">{ach.event}</Card.Subtitle>
                <small className="text-secondary">{ach.year}</small>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  </section>
);

export default Achievements;
