import React, { useState } from 'react';
import { profile } from '../data/portfolioData';
import { Navbar as RBNavbar, Nav, Container } from 'react-bootstrap';

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState('#about'); // default aktif pertama

  return (
    <RBNavbar expand="md" variant="dark" fixed="top" className="bg-dark bg-opacity-90 shadow-lg py-3">
      <Container>
        <RBNavbar.Brand href="#" className="text-primary fs-3 fw-bolder">
          {profile.name.split(' ')[0]}
        </RBNavbar.Brand>
        <RBNavbar.Toggle aria-controls="basic-navbar-nav" />
        <RBNavbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto"
            activeKey={activeLink}
            onSelect={(selectedKey) => setActiveLink(selectedKey || '')}
          >
            <Nav.Link
              href="#about"
              eventKey="#about"
              className={`fw-medium mx-2 ${activeLink === '#about' ? 'text-primary' : 'text-light'}`}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#skills"
              eventKey="#skills"
              className={`fw-medium mx-2 ${activeLink === '#skills' ? 'text-primary' : 'text-light'}`}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              eventKey="#projects"
              className={`fw-medium mx-2 ${activeLink === '#projects' ? 'text-primary' : 'text-light'}`}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#experience"
              eventKey="#experience"
              className={`fw-medium mx-2 ${activeLink === '#experience' ? 'text-primary' : 'text-light'}`}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              href="#achievements"
              eventKey="#achievements"
              className={`fw-medium mx-2 ${activeLink === '#achievements' ? 'text-primary' : 'text-light'}`}
            >
              Achievements
            </Nav.Link>
            <Nav.Link
              href="#contact"
              eventKey="#contact"
              className={`fw-medium mx-2 ${activeLink === '#contact' ? 'text-primary' : 'text-light'}`}
            >
              Contact
            </Nav.Link>
          </Nav>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  );
};

export default Navbar;
