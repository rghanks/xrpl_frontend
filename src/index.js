import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Dashboard from './components/dashboard';
import App from './components/sections/web3WalletModalConfig'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Dashboard />     
  </React.StrictMode>
);


