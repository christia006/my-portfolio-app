import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { projects } from '../data/portfolioData';
import { Container, Row, Col, Card } from 'react-bootstrap';

interface ProjectCardProps {
  project: {
    title: string;
    year: string;
    // description: string; // dihapus karena sudah tidak dipakai
    technologies: string[];
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
              {project.title}{' '}
              <span className="text-light fs-6 ms-2">({project.year})</span>
            </Card.Title>
            {/* Deskripsi dihapus */}
          </div>
          <div className="mt-auto">
            <h6 className="fw-semibold text-secondary mb-2">Technologies:</h6>
            <div className="d-flex flex-wrap">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="badge bg-dark text-white me-2 mb-2 px-2 py-1 rounded-pill"
                  style={{ fontSize: '0.75rem' }}
                >
                  {tech}
                </span>
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
