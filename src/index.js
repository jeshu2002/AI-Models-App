import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Auth0Provider } from '@auth0/auth0-react';

const domain = "dev-356btyzc1mlzvalh.us.auth0.com";
const clientId = "gezwvjbrDLNdKZFSs6iYpwoE9cagE48k";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{ redirect_uri: window.location.origin }}
      >
        <SpeedInsights />
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// Performance measurement (optional)
reportWebVitals();
