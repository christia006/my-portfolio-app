import React from 'react';
import { workExperience } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import { Container, Card } from 'react-bootstrap';

const Experience: React.FC = () => (
  <section id="experience" className="section-padding bg-dark text-light">
    <Container>
      <SectionHeader title="Experience" subtitle="Where I've Worked" />
      {workExperience.map((work, idx) => (
        <Card
          key={idx}
          className="mb-4 shadow border-0"
          style={{
            background: 'linear-gradient(135deg, #ffffff, #f8f9fa)',
            borderRadius: '1rem'
          }}
        >
          <Card.Body className="text-dark"> {/* text-dark: teks jadi hitam untuk kontras */}
            <Card.Title className="fw-bold text-primary mb-2">
              {work.title} @ {work.company}
            </Card.Title>
            <Card.Subtitle className="mb-3 text-muted small">{work.duration}</Card.Subtitle>
            <ul className="ps-3 mb-0"> {/* ps-3: padding left untuk list */}
              {work.description.map((desc, i) => (
                <li key={i} className="mb-1 small"> {/* small: ukuran font sedikit lebih kecil */}
                  {desc}
                </li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      ))}
    </Container>
  </section>
);

export default Experience;
