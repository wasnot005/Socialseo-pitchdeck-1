import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from "./Home";
import Proposal from "./Proposal";
import UpdatedProposal from './UpdatedProposal';
import JandCLanguages from './JandCLanguages';
import PodcastProposal from './PodcastProposal';
import FounderService from './FounderService';
import ProposalPage from './FounderBrandProgram';
import AIRapGuide from './AIRapGuide';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proposal" element={<Proposal />} />
        <Route path="/updated-proposal" element={<UpdatedProposal />} />
        <Route path="/jandc-languages" element={<JandCLanguages />} />
        <Route path="/podcast-proposal" element={<PodcastProposal />} />
        <Route path="/founder-service" element={<FounderService />} />
        <Route path="/founder-brand-program" element={<ProposalPage />} />
        <Route path="/airapguide" element={<AIRapGuide />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
