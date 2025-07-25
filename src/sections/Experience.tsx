import React from 'react';
import { workExperience } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import { Container, Card } from 'react-bootstrap';

const Experience: React.FC = () => (
  <section id="experience" className="section-padding bg-dark text-light">
    <Container>
      <SectionHeader title="Experience" subtitle="Where I've Worked" />
      {workExperience.map((work, idx) => (
        <Card key={idx} className="mb-3 bg-gray-800 text-light shadow-sm">
          <Card.Body>
            <Card.Title className="fw-bold text-primary">{work.title} @ {work.company}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{work.duration}</Card.Subtitle>
            <ul className="mb-0">
              {work.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      ))}
    </Container>
  </section>
);

export default Experience;
