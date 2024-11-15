import React from 'react';
import Wrapper from '../styles/Wrapper';
import aboutImage from '../assets/about.jpg';
import "../css/About.css";

const About = () => {
  return (
    <Wrapper>
      <div className="about-container">
        <div className="about-image-container">
          <img src={aboutImage} alt="FacesearchAI" className="about-image" />
        </div>
        <div className="about-text-container">
          <h2>What is FacesearchAI?</h2>
          <p>
            It's an AI tool that can find any face across the web using an image
            or video.
          </p>
          <p>
            It provides the corresponding website link, name of the person, creates
            a customized poem, and more.
          </p>
          <p>
            It can even find contact details (email and phone number) just by
            entering the person's name.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
