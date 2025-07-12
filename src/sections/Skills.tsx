import React from 'react';
import SectionHeader from '../components/SectionHeader';
import SkillBadge from '../components/SkillBadge';
import { skills } from '../data/portfolioData';
import { Container, Row, Col } from 'react-bootstrap';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-dark text-light">
      <Container>
        <SectionHeader title="My Skills" subtitle="Technologies I Master" />
        <Row className="g-4 justify-content-center"> {/* Bootstrap Row, g-4 for gutter, justify-content-center */}
          <Col md={6} lg={4}> {/* Bootstrap Col for responsive width */}
            <div className="bg-gray-800 p-4 rounded shadow-sm h-100"> {/* Bootstrap: p-4, rounded, shadow-sm, h-100 */}
              <h3 className="h4 fw-bold text-primary mb-4">Languages</h3> {/* Bootstrap: h4, fw-bold, text-primary, mb-4 */}
              <div className="d-flex flex-wrap"> {/* Bootstrap: d-flex, flex-wrap */}
                {skills.languages.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <div className="bg-gray-800 p-4 rounded shadow-sm h-100">
              <h3 className="h4 fw-bold text-primary mb-4">Frameworks & Libraries</h3>
              <div className="d-flex flex-wrap">
                {skills.frameworks.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <div className="bg-gray-800 p-4 rounded shadow-sm h-100">
              <h3 className="h4 fw-bold text-primary mb-4">Databases & Tools</h3>
              <div className="d-flex flex-wrap">
                {skills.databases.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
                {skills.tools.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <div className="bg-gray-800 p-4 rounded shadow-sm h-100">
              <h3 className="h4 fw-bold text-primary mb-4">Architecture & Concepts</h3>
              <div className="d-flex flex-wrap">
                {skills.architecture.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <div className="bg-gray-800 p-4 rounded shadow-sm h-100">
              <h3 className="h4 fw-bold text-primary mb-4">Others</h3>
              <div className="d-flex flex-wrap">
                {skills.others.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;