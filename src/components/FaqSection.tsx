'use client';

import { useState } from 'react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How do telephone lessons work? Which platform do we use?',
      a: 'Lessons take place directly over WhatsApp Audio, Telegram, or standard phone calls—whichever is easiest for you. There are no Zoom links, no webcam requirements, and no video anxiety. You can take your lesson from your living room, during a walk, or on your commute.'
    },
    {
      q: 'Do I need to download any special apps or software?',
      a: 'Not at all! If you have a phone with WhatsApp, Telegram, or standard calling capability, you are 100% ready. All notes and post-lesson summary sheets are sent as clean PDF attachments to your email and WhatsApp.'
    },
    {
      q: 'What happens if I need to reschedule or miss a lesson?',
      a: 'Life happens! You can reschedule any lesson free of charge by sending Marcus a quick message up to 12 hours before your scheduled time. Your missed session is rolled over to another convenient day in the week.'
    },
    {
      q: 'How do payments work? Is there a long-term contract?',
      a: 'There are zero long-term contracts. You can pay securely via Credit Card, Debit Card, PayPal, or Stripe. You can choose flexible monthly billing or pay per lesson bundle, and you can cancel or pause your subscription anytime with a single click.'
    },
    {
      q: 'How is learning with Marcus different from Preply or Cambly?',
      a: 'On platforms like Cambly or Preply, you often switch between different tutors who don’t know your history, and large platform commissions inflate the prices. With Marcus, you work 1-on-1 with a dedicated native British tutor who tracks your specific growth curve week after week and provides custom post-lesson written reports.'
    },
    {
      q: 'What happens during the free 20-minute trial call?',
      a: 'The trial call is relaxed and friendly. Marcus will introduce himself, learn about your goals (work presentations, social fluency, accent refinement), assess your current conversational level, and share practical recommendations. You won\'t need to enter any payment details.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#F9F9FB] dark:bg-[#14141F] border-b border-[#E8E8F0] dark:border-[#2A2A3E] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F97316] mb-3 block">
            Got Questions?
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E1E2E] dark:text-white leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-[#6B7280] dark:text-[#9B9BAA] text-lg max-w-xl mx-auto">
            Everything you need to know about 1-on-1 telephone English lessons.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white dark:bg-[#1A1A2E] rounded-2xl border border-[#E8E8F0] dark:border-[#2A2A3E] overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:text-[#F97316] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-bold text-[#1E1E2E] dark:text-white">
                    {faq.q}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#F97316] text-white rotate-180'
                        : 'bg-[#F9F9FB] dark:bg-[#14141F] text-[#6B7280] dark:text-[#9B9BAA]'
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[#6B7280] dark:text-[#C8C8D8] leading-relaxed border-t border-[#F9F9FB] dark:border-[#2A2A3E]/50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center bg-white dark:bg-[#1A1A2E] border border-[#E8E8F0] dark:border-[#2A2A3E] rounded-2xl p-6 shadow-sm">
          <p className="text-sm font-semibold text-[#1E1E2E] dark:text-white">
            Have a different question?
          </p>
          <p className="text-xs text-[#6B7280] dark:text-[#9B9BAA] mt-1">
            Send Marcus a direct message on WhatsApp for instant assistance.
          </p>
          <a
            href="https://wa.me/?text=Hi%20Marcus,%20I%20have%20a%20question%20about%20your%20telephone%20English%20lessons"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#F97316] hover:underline"
          >
            💬 Chat with Marcus on WhatsApp →
          </a>
        </div>

      </div>
    </section>
  );
}
