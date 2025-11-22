"use client";

import { useState } from "react";

export function Hero() {
  const [showInstructions, setShowInstructions] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleDownload = () => {
    // Show instructions immediately
    setShowInstructions(true);
  };

  const copyExtensionUrl = async () => {
    try {
      await navigator.clipboard.writeText("chrome://extensions/");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = "chrome://extensions/";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-3xl" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(20, 184, 166, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(20, 184, 166, 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Shield icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl rotate-45 flex items-center justify-center teal-glow">
              <svg
                className="-rotate-45 w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            {/* Shopping cart badge */}
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center border-2 border-teal-400">
              <svg
                className="w-5 h-5 text-teal-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Brand name */}
        <h1 className="text-6xl md:text-7xl font-bold mb-4">
          <span className="gradient-text">Body Cart</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-slate-300 mb-6">
          Your Digital Bodyguard for Online Shopping
        </p>

        {/* Description */}
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
          AI-powered Chrome extension that protects you from Facebook Marketplace
          scams, phishing attempts, and suspicious websites in real-time.
        </p>

        {/* Download button */}
        <button
          onClick={handleDownload}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold text-lg rounded-xl teal-glow transition-all duration-300 hover:from-teal-400 hover:to-teal-500 hover:scale-105"
        >
          <svg
            className="w-6 h-6 transition-transform group-hover:-translate-y-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download Extension
          <span className="text-teal-200 text-sm font-normal">(Free)</span>
        </button>

        {/* Trust indicators */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            100% Free
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            No Data Collection
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            AI-Powered Protection
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-teal-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Installation Instructions Modal */}
      {showInstructions && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-slate-800 border border-teal-500/30 rounded-2xl p-8 max-w-lg w-full shadow-2xl relative">
            {/* Close button */}
            <button
              onClick={() => setShowInstructions(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Install Body Cart</h3>
                <p className="text-slate-400 text-sm">Follow these steps to get protected</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {/* Step 1: Download */}
              <div className="flex gap-4 p-3 bg-teal-500/10 border border-teal-500/30 rounded-xl">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium mb-2">Download the Extension</p>
                  <a
                    href="/extension.zip"
                    download="body-cart-extension.zip"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500 hover:bg-teal-400 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download ZIP
                  </a>
                </div>
              </div>

              {/* Step 2: Extract */}
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0">
                  2
                </div>
                <div>
                  <p className="text-white font-medium">Extract the ZIP file</p>
                  <p className="text-slate-400 text-sm">Unzip the downloaded file to a folder on your computer</p>
                </div>
              </div>

              {/* Step 3: Open Chrome Extensions */}
              <div className="flex gap-4 p-3 bg-slate-700/50 rounded-xl">
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium mb-2">Open Chrome Extensions</p>
                  <p className="text-slate-400 text-sm mb-2">Copy and paste this URL in your browser:</p>
                  <div className="flex items-center gap-2">
                    <code className="flex-1 text-teal-300 bg-slate-900 px-3 py-2 rounded-lg text-sm font-mono">
                      chrome://extensions/
                    </code>
                    <button
                      onClick={copyExtensionUrl}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        copied
                          ? "bg-green-500 text-white"
                          : "bg-teal-500 hover:bg-teal-400 text-white"
                      }`}
                    >
                      {copied ? (
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Copied!
                        </span>
                      ) : (
                        "Copy"
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 4: Enable Developer Mode */}
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0">
                  4
                </div>
                <div>
                  <p className="text-white font-medium">Enable Developer Mode</p>
                  <p className="text-slate-400 text-sm">Toggle the switch in the top-right corner of the extensions page</p>
                </div>
              </div>

              {/* Step 5: Load Extension */}
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0">
                  5
                </div>
                <div>
                  <p className="text-white font-medium">Load Unpacked Extension</p>
                  <p className="text-slate-400 text-sm">
                    Click &quot;Load unpacked&quot; and select the extracted folder
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700">
              <p className="text-center text-slate-400 text-sm">
                That&apos;s it! Body Cart is now protecting you while you browse.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
