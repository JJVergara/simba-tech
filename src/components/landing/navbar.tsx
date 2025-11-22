"use client";

export function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-9 h-9 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg rotate-45 flex items-center justify-center">
              <svg
                className="-rotate-45 w-4 h-4 text-white"
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
            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-slate-900 rounded-full flex items-center justify-center border border-teal-500">
              <svg
                className="w-2 h-2 text-teal-400"
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
          <span className="text-lg font-bold gradient-text">Body Cart</span>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a
            href="#features"
            className="text-slate-400 hover:text-teal-400 transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-slate-400 hover:text-teal-400 transition-colors"
          >
            How It Works
          </a>
          <a
            href="#demos"
            className="text-slate-400 hover:text-teal-400 transition-colors"
          >
            Demos
          </a>
          <a
            href="#faq"
            className="text-slate-400 hover:text-teal-400 transition-colors"
          >
            FAQ
          </a>
        </div>

        {/* CTA */}
        <button
          onClick={scrollToTop}
          className="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-white text-sm font-medium rounded-lg transition-colors"
        >
          Download
        </button>
      </div>
    </nav>
  );
}
