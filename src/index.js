import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StepContext from './contexts/StepContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StepContext>
    <React.StrictMode>
    <App />
    {/* <Test /> */}
  </React.StrictMode>
  </StepContext>
  
);
