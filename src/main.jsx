// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { CssBaseline } from '@mui/material';
// import { BrowserRouter as Router } from 'react-router-dom';

// // Optionally, you can import a global CSS file here if you have one
// import './index.css'; // Assuming you have a global CSS file

// // Render the application
// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <CssBaseline /> {/* This resets CSS and provides Material-UI's global styles */}
//       <App />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import App from './App';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';

// Optionally, you can import a global CSS file here if you have one
import './index.css'; // Assuming you have a global CSS file

// Get the root element
const rootElement = document.getElementById('root');

// Create a root using React 18's createRoot
const root = ReactDOM.createRoot(rootElement);

// Render the application
root.render(
  <React.StrictMode>
    <Router>
      <CssBaseline /> {/* This resets CSS and provides Material-UI's global styles */}
      <App />
    </Router>
  </React.StrictMode>
);
