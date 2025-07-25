import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import { profile } from '../data/portfolioData';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-light py-4 text-center border-top border-secondary mt-auto">
      <Container>
        <div className="d-flex justify-content-center mb-3">
          <a
            href="https://github.com/christia006"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 mx-3 hover-icon"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="mailto:chutahaean372@gmail.com"
            className="text-gray-400 mx-3 hover-icon"
          >
            <FaEnvelope size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/christianhutahaean"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 mx-3 hover-icon"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
        <p className="text-sm text-gray-500 mb-0">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
