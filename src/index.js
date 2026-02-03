import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Home from "./Home";
import Proposal from "./Proposal";
import UpdatedProposal from './UpdatedProposal';
import JandCLanguages from './JandCLanguages';
import PodcastProposal from './PodcastProposal';
import FounderService from './FounderService';
import ProposalPage from './FounderBrandProgram';
import AIRapGuide from './AIRapGuide';
import RajSocialSEO from './RajSocialSEO';
import Reports from './reports/Reports';
import KushReport1 from './reports/KushReport1';
import KushReport2 from './reports/kushreport2';
import KushYouTubePitch from './KushYouTubePitch';

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
        <Route path="/raj-socialseo" element={<RajSocialSEO />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/reports/kushreport1" element={<KushReport1 />} />
        <Route path="/reports/kushreport2" element={<KushReport2 />} />
        <Route path="/kush-youtube-pitch" element={<KushYouTubePitch />} />
        <Route path="/reports/khushreport1" element={<Navigate to="/reports/kushreport1" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
