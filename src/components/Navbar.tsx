import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolioData';
import { Navbar as RBNavbar, Nav, Container } from 'react-bootstrap'; // Alias Navbar from react-bootstrap

const Navbar: React.FC = () => {
  return (
    <RBNavbar expand="md" variant="dark" fixed="top" className="bg-dark bg-opacity-90 backdrop-filter backdrop-blur-sm shadow-lg py-3"> {/* Bootstrap Navbar */}
      <Container> {/* Bootstrap Container */}
        <RBNavbar.Brand href="#" className="text-primary fs-3 fw-bolder tracking-tight">
          {profile.name.split(' ')[0]}.
        </RBNavbar.Brand>
        <RBNavbar.Toggle aria-controls="basic-navbar-nav" /> {/* Toggle for mobile */}
        <RBNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* ms-auto pushes links to the right */}
            <Nav.Link href="#about" className="text-light fw-medium mx-2 hover-underline">About</Nav.Link> {/* mx-2 for spacing, custom hover-underline */}
            <Nav.Link href="#skills" className="text-light fw-medium mx-2 hover-underline">Skills</Nav.Link>
            <Nav.Link href="#projects" className="text-light fw-medium mx-2 hover-underline">Projects</Nav.Link>
            <Nav.Link href="#contact" className="text-light fw-medium mx-2 hover-underline">Contact</Nav.Link>
          </Nav>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  );
};

export default Navbar;