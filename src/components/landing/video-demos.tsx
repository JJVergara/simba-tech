const videos = [
  {
    id: "placeholder-1",
    title: "Getting Started with Body Cart",
    description: "Learn how to install and set up Body Cart in less than a minute.",
    thumbnail: null,
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
    <section id="demos" className="py-24 px-4 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-heading">
            See It In Action
          </h2>
          <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
            Watch how Body Cart protects you while shopping online
          </p>
        </div>

        {/* Video grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:border-neutral-300 transition-all duration-300 hover:shadow-sm"
            >
              {/* Video placeholder / embed area */}
              <div className="relative aspect-video bg-neutral-100 flex items-center justify-center">
                {/* Placeholder content */}
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-neutral-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-neutral-300 transition-colors">
                    <svg
                      className="w-8 h-8 text-neutral-500 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-neutral-400 text-sm">Video coming soon</p>
                </div>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Video info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-neutral-600 transition-colors font-heading">
                  {video.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe CTA */}
        <div className="mt-12 text-center">
          <p className="text-neutral-500 mb-4">
            Subscribe to our channel for more tutorials and updates
          </p>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-neutral-200 rounded-xl text-black hover:border-neutral-300 hover:bg-neutral-50 transition-colors"
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
