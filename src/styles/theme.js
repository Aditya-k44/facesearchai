import { createGlobalStyle } from 'styled-components';


export const lightTheme = {
  bgColor: '#f5f5f5',
  textColor: '#333',
  linkHoverColor: '#1e90ff',
};

export const darkTheme = {
  bgColor: '#333',
  textColor: '#f5f5f5',
  linkHoverColor: '#ff6347',
};


export const GlobalStyle = createGlobalStyle`
  /* CSS Variables */
  :root {
    --bg-color: #f5f5f5;  /* Default to light mode */
    --text-color: #333;
    --link-hover-color: #1e90ff; /* Default link hover color */
  }

  /* Dark Mode */
  [data-theme="dark"] {
    --bg-color: #333;
    --text-color: #f5f5f5;
    --link-hover-color: #ff6347;
  }

  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition */
  }

  a {
    color: var(--text-color);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }
`;
