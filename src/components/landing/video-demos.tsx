const videos = [
  {
    id: "placeholder-1",
    title: "Getting Started with Body Cart",
    description: "Learn how to install and set up Body Cart in less than a minute.",
    thumbnail: null, // Will use placeholder
  },
  {
    id: "placeholder-2",
    title: "Detecting Marketplace Scams",
    description: "See how Body Cart identifies suspicious listings on Facebook Marketplace.",
    thumbnail: null,
  },
  {
    id: "placeholder-3",
    title: "Protection in Action",
    description: "Watch Body Cart protect you from phishing attempts in real-time.",
    thumbnail: null,
  },
];

export function VideoDemos() {
  return (
    <section id="demos" className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">See It In Action</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Watch how Body Cart protects you while shopping online
          </p>
        </div>

        {/* Video grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-teal-500/50 transition-all duration-300"
            >
              {/* Video placeholder / embed area */}
              <div className="relative aspect-video bg-slate-900 flex items-center justify-center">
                {/* Replace this div with actual YouTube embed when ready */}
                {/*
                  To add a YouTube video, replace the placeholder with:
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/VIDEO_ID"
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                */}

                {/* Placeholder content */}
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-500/30 transition-colors">
                    <svg
                      className="w-8 h-8 text-teal-400 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-slate-500 text-sm">Video coming soon</p>
                </div>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Video info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-teal-300 transition-colors">
                  {video.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">
            Subscribe to our channel for more tutorials and updates
          </p>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white hover:border-teal-500/50 hover:bg-slate-700 transition-colors"
          >
            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            YouTube Channel
          </a>
        </div>
      </div>
    </section>
  );
}
