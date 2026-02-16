import React from 'react';
import { Link } from 'react-router-dom';

const Reports = () => (
  <div className="min-h-screen text-white">
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

        <Link
          to="/reports/kushreport2"
          className="block rounded-xl border border-purple-500/40 bg-purple-500/10 p-6 transition hover:border-purple-400 hover:bg-purple-500/20"
        >
          <h2 className="text-2xl font-semibold">Kush – 90 Days Personal Branding Report</h2>
          <p className="text-gray-300 mt-2">
            A performance breakdown after posting 90 videos across a strategic 3-month campaign (Q4).
          </p>
        </Link>

        <Link
          to="/reports/kushreport3"
          className="block rounded-xl border border-blue-500/40 bg-blue-500/10 p-6 transition hover:border-blue-400 hover:bg-blue-500/20"
        >
          <h2 className="text-2xl font-semibold">Kush – 15-Day Comparative Report</h2>
          <p className="text-gray-300 mt-2">
            Jan vs Feb content growth sprint — what happens when you triple your output from 1 to 3 videos/day.
          </p>
        </Link>
      </div>
    </div>
  </div>
);

export default Reports;
