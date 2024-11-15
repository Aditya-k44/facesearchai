import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Token from './pages/Token';
import Contact from './pages/Contact';
import Download from './pages/Download';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, lightTheme, darkTheme } from './styles/theme';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  
  useEffect(() => {
    if (isDarkMode) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  return (
    <div>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router>
          <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/token" element={<Token />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/download" element={<Download />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
