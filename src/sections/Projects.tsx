import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { projects } from '../data/portfolioData';
import { Container, Row, Col, Card } from 'react-bootstrap';

interface ProjectCardProps {
  project: {
    title: string;
    Description: string[];
    imageUrl?: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Card className="h-100 bg-gray-800 text-light shadow-lg border-0 hover-lift">
        {project.imageUrl && (
          <Card.Img
            variant="top"
            src={project.imageUrl}
            alt={project.title}
            className="rounded-top"
            style={{ maxHeight: '160px', objectFit: 'cover' }}
          />
        )}
        <Card.Body className="d-flex flex-column p-3">
          <div>
            <Card.Title className="h6 fw-bold text-primary mb-2">
              {project.title}
            </Card.Title>
            <div className="text-secondary small">
              {project.Description.map((desc, index) => (
                <p key={index} className="mb-1">{desc}</p>
              ))}
            </div>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding bg-gray-900 text-light">
      <Container>
        <SectionHeader title="My Projects" subtitle="Showcasing My Work" />
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col md={6} lg={4} key={index}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
