import React from 'react';
import { profile } from '../data/portfolioData';
import { Navbar as RBNavbar, Nav, Container } from 'react-bootstrap';

const Navbar: React.FC = () => (
  <RBNavbar expand="md" variant="dark" fixed="top" className="bg-dark bg-opacity-90 shadow-lg py-3">
    <Container>
      <RBNavbar.Brand href="#" className="text-primary fs-3 fw-bolder">
        {profile.name.split(' ')[0]}
      </RBNavbar.Brand>
      <RBNavbar.Toggle aria-controls="basic-navbar-nav" />
      <RBNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#about" className="text-light fw-medium mx-2">About</Nav.Link>
          <Nav.Link href="#skills" className="text-light fw-medium mx-2">Skills</Nav.Link>
          <Nav.Link href="#projects" className="text-light fw-medium mx-2">Projects</Nav.Link>
          <Nav.Link href="#experience" className="text-light fw-medium mx-2">Experience</Nav.Link>
          <Nav.Link href="#achievements" className="text-light fw-medium mx-2">Achievements</Nav.Link>
          <Nav.Link href="#contact" className="text-light fw-medium mx-2">Contact</Nav.Link>
        </Nav>
      </RBNavbar.Collapse>
    </Container>
  </RBNavbar>
);

export default Navbar;
