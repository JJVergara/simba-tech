"use client";

import { useState } from "react";
import { ScrollReveal, StaggerReveal } from "@/components/ui/scroll-reveal";

const faqs = [
  {
    question: "How does Body Cart protect me?",
    answer:
      "Body Cart uses advanced AI models trained on thousands of known scam patterns, phishing attempts, and fraudulent websites. It continuously analyzes the pages you visit in real-time, checking for suspicious elements like fake payment forms, misleading pricing, seller red flags on marketplaces, and known malicious domains. When a threat is detected, you receive an instant notification with details about the risk.",
  },
  {
    question: "Is my data safe with Body Cart?",
    answer:
      "Absolutely. Body Cart is designed with privacy as a top priority. All analysis happens locally in your browser - your browsing data never leaves your device. We don't collect, store, or transmit any personal information, browsing history, or the content of the pages you visit. The extension only needs minimal permissions to function.",
  },
  {
    question: "What types of scams can Body Cart detect?",
    answer:
      "Body Cart can identify a wide range of online threats including: Facebook Marketplace scams (fake sellers, too-good-to-be-true pricing, suspicious accounts), phishing websites trying to steal login credentials, fake e-commerce sites, counterfeit product listings, payment form fraud, and known malicious domains. Our AI models are continuously updated to catch new scam patterns.",
  },
  {
    question: "How do I install the extension?",
    answer:
      "Installing Body Cart is simple: 1) Download the ZIP file from this page, 2) Extract/unzip the file to a folder on your computer, 3) Open Chrome and go to chrome://extensions/, 4) Enable 'Developer mode' in the top-right corner, 5) Click 'Load unpacked' and select the extracted folder. That's it! Body Cart will now protect you while you browse.",
  },
  {
    question: "Is Body Cart really free?",
    answer:
      "Yes, Body Cart is completely free to use with no hidden costs, premium tiers, or in-app purchases. We believe everyone deserves protection from online scams. The extension is developed as an open-source project focused on making the internet safer for everyone.",
  },
  {
    question: "Does Body Cart slow down my browser?",
    answer:
      "No. Body Cart is optimized for performance and runs efficiently in the background. The AI analysis is lightweight and happens asynchronously, so it won't affect your browsing speed or page load times. Most users don't notice any performance impact at all.",
  },
  {
    question: "What browsers does Body Cart support?",
    answer:
      "Currently, Body Cart is available as a Chrome extension, which also works on Chromium-based browsers like Microsoft Edge, Brave, Opera, and Vivaldi. Firefox and Safari versions are being considered for future releases based on user demand.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 bg-neutral-950">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-white/60">
              Everything you need to know about Body Cart
            </p>
          </ScrollReveal>
        </div>

        {/* FAQ accordion */}
        <StaggerReveal className="space-y-4" stagger={0.08}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors"
            >
              {/* Question button */}
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-lg font-medium text-white pr-4">
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 pt-0">
                  <p className="text-white/60 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </StaggerReveal>

        {/* More questions CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-white/60 mb-4">Still have questions?</p>
            <a
              href="mailto:support@bodycart.app"
              className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact us
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
