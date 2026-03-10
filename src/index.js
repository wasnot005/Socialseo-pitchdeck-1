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
import KushReport3 from './reports/KushReport3';
import KushYouTubePitch from './KushYouTubePitch';
import SocialSeoPlans from './SocialSeoPlans';
import MainHub from './MainHub';
import FoundersDreamProposal from './FoundersDreamProposal';
import AshmitSocialSEO from './AshmitSocialSEO';
import TFDQuotation from './TFDQuotation';
import KushContentPlan from './KushContentPlan';
import Layout from './Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
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
          <Route path="/reports/kushreport3" element={<KushReport3 />} />
          <Route path="/kush-youtube-pitch" element={<KushYouTubePitch />} />
          <Route path="/reports/khushreport1" element={<Navigate to="/reports/kushreport1" replace />} />
          <Route path="/socialseoplans" element={<SocialSeoPlans />} />
          <Route path="/founder-ai-clone" element={<SocialSeoPlans />} />
          <Route path="/main-hub" element={<MainHub />} />
          <Route path="/ashmit-socialseo" element={<AshmitSocialSEO />} />
          <Route path="/founders-dream" element={<FoundersDreamProposal />} />
          <Route path="/tfd-quotation" element={<TFDQuotation />} />
          <Route path="/kush-content-plan" element={<KushContentPlan />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
);
