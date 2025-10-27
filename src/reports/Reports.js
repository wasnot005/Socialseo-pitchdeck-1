import React from 'react';
import { Link } from 'react-router-dom';

const Reports = () => (
  <div className="min-h-screen bg-gray-950 text-white">
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Reports</h1>
      <p className="text-lg text-gray-300 mb-6">
        Browse performance reports and deep dives prepared for clients.
      </p>
      <div className="space-y-4">
        <Link
          to="/reports/kushreport1"
          className="block rounded-xl border border-indigo-500/40 bg-indigo-500/10 p-6 transition hover:border-indigo-400 hover:bg-indigo-500/20"
        >
          <h2 className="text-2xl font-semibold">Kush 30-Day Performance Report</h2>
          <p className="text-gray-300 mt-2">
            PPT-style landing page summarizing performance metrics, highlights, and next steps.
          </p>
        </Link>
      </div>
    </div>
  </div>
);

export default Reports;
