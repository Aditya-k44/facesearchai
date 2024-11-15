import React from 'react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';  // Importing icons
import Wrapper from '../styles/Wrapper';
import { Link } from 'react-router-dom';
import '../css/Download.css';

const Download = () => {
  return (
    <Wrapper>
      <div className="download-container">
        <h2>Download FacesearchAI</h2>
        <p>Get the app on your preferred store:</p>

        <a
          href="https://play.google.com/store/apps"
          target="_blank"
          rel="noopener noreferrer"
          className="store-button"
        >
          <FaGooglePlay size={24} className="icon" />
          <div className="button-text">
            <span className="small-text">Get it on</span>
            <br />
            <span className="large-text">Google Play</span>
          </div>
        </a>

        <a
          href="https://play.google.com/store/apps/details?id=com.facesearch.app"
          target="_blank"
          rel="noopener noreferrer"
          className="store-button"
        >
          <FaApple size={24} className="icon" />
          <div className="button-text">
            <span className="small-text">Download on</span>
            <br />
            <span className="large-text">Apple Store</span>
          </div>
        </a>
      </div>
    </Wrapper>
  );
};

export default Download;
