import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { profile } from '../data/portfolioData';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-light py-4 text-center border-top border-secondary mt-auto"> {/* bg-gray-900, py-4, text-center, border-top, border-secondary, mt-auto for sticky footer */}
      <Container>
        <div className="d-flex justify-content-center mb-3"> {/* d-flex, justify-content-center, mb-3 */}
          <a
            href={`https://${profile.contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 mx-3 hover-icon" // mx-3 for horizontal spacing, custom hover-icon
          >
            <FaGithub size={28} />
          </a>
          <a
            href={`mailto:${profile.contact.email}`}
            className="text-gray-400 mx-3 hover-icon"
          >
            <FaEnvelope size={28} />
          </a>
          <a
            href="https://linkedin.com/in/christian-johannes-hutahaean"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 mx-3 hover-icon"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
        <p className="text-sm text-gray-500 mb-0"> {/* text-sm (custom, or fs-6/7), text-gray-500, mb-0 */}
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;