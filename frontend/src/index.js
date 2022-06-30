import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./configs/authConfigs";
import { SellerIdContextProvider } from './contexts/SellerIdContext';

const msalInstance = new PublicClientApplication(msalConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <SellerIdContextProvider>
      <MsalProvider instance={msalInstance}>
        <App />
      </MsalProvider>
    </SellerIdContextProvider>
  </BrowserRouter>
);

