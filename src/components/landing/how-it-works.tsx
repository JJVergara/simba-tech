"use client";

import { ScrollReveal, StaggerReveal } from "@/components/ui/scroll-reveal";

const steps = [
  {
    number: "01",
    title: "Download the Extension",
    description:
      "Click the download button to get the Body Cart extension ZIP file. It's completely free with no hidden costs.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Install in Chrome",
    description:
      "Extract the ZIP, go to chrome://extensions/, enable Developer Mode, and load the unpacked extension folder.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Browse Safely",
    description:
      "That's it! Body Cart now runs in the background, analyzing pages and alerting you to potential threats automatically.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-heading">
              How It Works
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
              Get protected in under a minute with our simple 3-step setup
            </p>
          </ScrollReveal>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-neutral-200 -translate-y-1/2" />

          <StaggerReveal className="grid lg:grid-cols-3 gap-8 lg:gap-12" stagger={0.15}>
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Card */}
                <div className="relative bg-neutral-50 border border-neutral-200 rounded-2xl p-8 text-center hover:border-neutral-300 transition-colors">
                  {/* Step number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-black rounded-full text-white font-bold text-sm">
                    Step {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 bg-neutral-100 rounded-2xl flex items-center justify-center text-black mx-auto mt-4 mb-6">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-black mb-3 font-heading">
                    {step.title}
                  </h3>
                  <p className="text-neutral-500 leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow connector for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <svg
                      className="w-6 h-6 text-neutral-300"
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
                )}
              </div>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
