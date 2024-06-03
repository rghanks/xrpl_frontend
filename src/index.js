import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Dashboard from './components/dashboard';
import App from './components/sections/web3WalletModalConfig'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ToastContainer />
    <App />
    <Dashboard />     
  </>
);


