import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../assets/home2.png';
import Wrapper from '../styles/Wrapper';
import '../css/Home.css';

const Home = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const fileInputRef = useRef(null);

  
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Wrapper>
      <div className="home-container">
        <div className="image-container">
          <img src={uploadedImage || homeImage} alt="FacesearchAI" />
        </div>
        <div className="text-container">
          <h1>Welcome to FacesearchAI</h1>
          <p>Your AI-powered facial recognition solution.</p>

          <Link to="/download" className="button">
            Try FacesearchAI
          </Link>

          <div className="upload-button-container">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="file-input"
              ref={fileInputRef}
            />
            <button className="upload-button" onClick={handleButtonClick}>
              Upload Image
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
