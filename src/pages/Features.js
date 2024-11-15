import React, { useEffect } from 'react';
import Wrapper from '../styles/Wrapper';
import '../css/Features.css';

const Features = ({ theme }) => {
  useEffect(() => {
    injectScrollEffect();
  }, []);

  
  const getCardThemeClass = (theme) => {
    if (theme === 'famoon') {
      return 'famoon';
    }
    return 'fasun';
  };

  return (
    <Wrapper>
      <div className="features-container">
        <div className="feature-cards">
          
          <div className="feature-cards-inner">
            <div className={`feature-card ${getCardThemeClass(theme)}`}>
              <h3>High Accuracy</h3>
              <p>
                Our facial recognition algorithm ensures high accuracy even under
                difficult conditions, such as poor lighting or partial occlusions.
              </p>
            </div>
            <div className={`feature-card ${getCardThemeClass(theme)}`}>
              <h3>Real-Time Recognition</h3>
              <p>
                FacesearchAI can perform real-time face detection and recognition,
                ideal for applications requiring instant results like security
                systems and smart access controls.
              </p>
            </div>
            <div className={`feature-card ${getCardThemeClass(theme)}`}>
              <h3>Scalable</h3>
              <p>
                Our platform is built to scale, supporting a growing database of
                faces and handling large volumes of recognition requests
                seamlessly.
              </p>
            </div>
            <div className={`feature-card ${getCardThemeClass(theme)}`}>
              <h3>Multi-Device Support</h3>
              <p>
                FacesearchAI can be integrated across various devices, from
                smartphones to security cameras, ensuring flexibility in
                deployment.
              </p>
            </div>
            <div className={`feature-card ${getCardThemeClass(theme)}`}>
              <h3>Secure Data</h3>
              <p>
                We prioritize privacy and data protection, ensuring that all
                facial recognition data is stored securely and complies with
                privacy regulations.
              </p>
            </div>

            
            <div className={`feature-card ${getCardThemeClass(theme)}`}>
              <h3>High Accuracy</h3>
              <p>
                Our facial recognition algorithm ensures high accuracy even under
                difficult conditions, such as poor lighting or partial occlusions.
              </p>
            </div>
            <div className={`feature-card ${getCardThemeClass(theme)}`}>
              <h3>Real-Time Recognition</h3>
              <p>
                FacesearchAI can perform real-time face detection and recognition,
                ideal for applications requiring instant results like security
                systems and smart access controls.
              </p>
            </div>
            <div className={`feature-card ${getCardThemeClass(theme)}`}>
              <h3>Scalable</h3>
              <p>
                Our platform is built to scale, supporting a growing database of
                faces and handling large volumes of recognition requests
                seamlessly.
              </p>
            </div>
            <div className={`feature-card ${getCardThemeClass(theme)}`}>
              <h3>Multi-Device Support</h3>
              <p>
                FacesearchAI can be integrated across various devices, from
                smartphones to security cameras, ensuring flexibility in
                deployment.
              </p>
            </div>
            <div className={`feature-card ${getCardThemeClass(theme)}`}>
              <h3>Secure Data</h3>
              <p>
                We prioritize privacy and data protection, ensuring that all
                facial recognition data is stored securely and complies with
                privacy regulations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};


const injectScrollEffect = () => {
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(`
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `, styleSheet.cssRules.length);
};

export default Features;
