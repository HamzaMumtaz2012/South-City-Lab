'use client';

import React, { useState } from 'react';
import { Search, FileText, Phone, KeyRound, AlertCircle, Download, CheckCircle2 } from 'lucide-react';

export default function TestResultPage() {
  const [formData, setFormData] = useState({
    bookingId: '',
    phone: '',
    passcode: '',
  });

  const [loading, setLoading] = useState(false);
  const [resultFound, setResultFound] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.bookingId || !formData.phone) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setError('');

    // Simulate API lookup
    setTimeout(() => {
      setLoading(false);
      setResultFound(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-[#555555]">
      {/* Header Banner */}
      <section className="bg-white border-b border-gray-200 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          <span className="text-[#d30815] font-bold text-xs uppercase tracking-widest bg-red-50 px-3 py-1 rounded-md border border-red-100">
            Online Services
          </span>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Download Test Reports
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto text-sm">
            Enter your booking details provided on your receipt/SMS to view and download your lab reports.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Lookup Form */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h2 className="text-lg font-bold text-gray-900 border-l-4 border-[#d30815] pl-3">
                Patient Report Access
              </h2>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-[#d30815] text-xs rounded-lg">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Lab / Booking Reference ID */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Reference / Booking ID <span className="text-[#d30815]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="bookingId"
                    value={formData.bookingId}
                    onChange={handleChange}
                    placeholder="e.g. SCL-2026-8941"
                    className="w-full py-2.5 pl-10 pr-4 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d30815] focus:bg-white"
                  />
                  <FileText className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                </div>
              </div>

              {/* Registered Mobile Phone */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Registered Mobile Phone <span className="text-[#d30815]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 03001234567"
                    className="w-full py-2.5 pl-10 pr-4 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d30815] focus:bg-white"
                  />
                  <Phone className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                </div>
              </div>

              {/* Security Passcode / PIN (Optional) */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Report PIN / Password <span className="text-gray-400 font-normal">(if on receipt)</span>
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="passcode"
                    value={formData.passcode}
                    onChange={handleChange}
                    placeholder="••••"
                    className="w-full py-2.5 pl-10 pr-4 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d30815] focus:bg-white"
                  />
                  <KeyRound className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#d30815] hover:bg-red-700 text-white font-bold text-sm rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2 mt-2"
              >
                {loading ? (
                  <span>Searching Reports...</span>
                ) : (
                  <>
                    <Search className="w-4 h-4" /> Find Test Result
                  </>
                )}
              </button>
            </form>

            {/* Mock Download Section Triggered After Submit */}
            {resultFound && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-green-800 text-sm font-bold">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Report Found!</span>
                </div>
                <div className="text-xs text-gray-600 space-y-1">
                  <p><strong>Patient Name:</strong> John Doe</p>
                  <p><strong>Test:</strong> Complete Blood Count (CBC) & Lipid Profile</p>
                  <p><strong>Date:</strong> Sep 03, 2026</p>
                </div>
                <button
                  onClick={() => alert('Downloading PDF...')}
                  className="w-full py-2 bg-green-700 hover:bg-green-800 text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" /> Download PDF Report
                </button>
              </div>
            )}
          </div>

          {/* Help Sidebar */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-3 shadow-sm">
              <h3 className="font-bold text-gray-900 text-sm border-l-4 border-[#d30815] pl-2">
                Need Help Accessing Results?
              </h3>
              <ul className="text-xs text-gray-600 space-y-2 leading-relaxed list-disc list-inside">
                <li>Check your SMS inbox for the Reference ID sent upon registration.</li>
                <li>Your mobile number must match the number provided during sample collection.</li>
                <li>Reports are usually published online within 12–24 hours of testing.</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-xl p-5 text-xs text-[#555555] space-y-2">
              <p className="font-bold text-[#d30815]">Having trouble?</p>
              <p>Contact South City Lab helpline for instant assistance with your test status.</p>
              <div className="pt-1">
                <a
                  href="tel:+9221111111111"
                  className="inline-flex items-center gap-1.5 font-bold text-[#d30815] hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" /> Call Lab Support
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}