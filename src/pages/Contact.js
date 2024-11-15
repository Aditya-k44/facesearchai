import React from 'react';
import Wrapper from '../styles/Wrapper';
import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import "../css/Contact.css";

const Contact = () => {
  return (
    <Wrapper>
      <div>
        <h2>Contact Us</h2>
        <p>Email: support@facesearchai.com</p>

        <div className="contact-social-links-container">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-icon"
          >
            <FaTwitter size={40} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-icon"
          >
            <FaInstagram size={40} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-icon"
          >
            <FaYoutube size={40} />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
