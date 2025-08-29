import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import UpdatedProposal from './UpdatedProposal';
import JandCLanguages from './JandCLanguages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/updated-proposal" element={<UpdatedProposal />} />
        <Route path="/jandc-languages" element={<JandCLanguages />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
