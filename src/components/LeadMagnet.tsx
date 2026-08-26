'use client';

import { useState } from 'react';

export default function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="free-guide" className="py-20 bg-white dark:bg-[#0F0F1A] border-b border-[#E8E8F0] dark:border-[#2A2A3E] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="bg-gradient-to-br from-[#1E1E2E] to-[#2D2D44] dark:from-[#141424] dark:to-[#1A1A2E] rounded-3xl p-8 md:p-14 text-white relative overflow-hidden shadow-xl">
          
          {/* Background decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Copy & Form */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-[#F97316]/20 border border-[#F97316]/40 text-[#F97316] text-xs font-bold px-3 py-1 rounded-full mb-4">
                <span>🎁</span>
                <span>FREE E-BOOK & CHEAT SHEET</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black leading-tight text-white mb-4">
                50 British Idioms for Business Meetings & Daily Calls
              </h2>

              <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
                Sound natural instantly. Get Marcus&apos;s curated list of modern British expressions, meeting phrasal verbs, and pronunciation notes—delivered straight to your inbox.
              </p>

              {submitted ? (
                <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-2xl p-5 text-left">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1">
                    <span>✓</span> Instant Access Granted!
                  </div>
                  <p className="text-xs text-gray-200">
                    We&apos;ve sent the PDF to <strong className="text-white">{email}</strong>. You can also download it directly below:
                  </p>
                  <a
                    href="#download"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Downloading "50 British Idioms Guide.pdf"...');
                    }}
                    className="mt-3 inline-block bg-white text-[#1E1E2E] hover:bg-gray-100 text-xs font-bold px-4 py-2 rounded-full shadow-sm transition-all"
                  >
                    📥 Download PDF Now (2.4 MB)
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm px-5 py-3.5 rounded-full focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-all"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-[#F97316] hover:bg-[#EA6C0A] active:scale-95 text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-md shadow-orange-500/20 transition-all duration-200 cursor-pointer flex-shrink-0"
                  >
                    {isLoading ? 'Sending...' : 'Get Free PDF →'}
                  </button>
                </form>
              )}

              <p className="text-[11px] text-gray-400 mt-3 flex items-center gap-4">
                <span>🔒 100% Free · No spam guarantee</span>
                <span>⚡ Instant PDF Download</span>
              </p>
            </div>

            {/* Right: Visual Booklet Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-56 md:w-64 bg-gradient-to-br from-[#FAF8F4] to-[#FFF0E6] text-[#1E1E2E] p-6 rounded-2xl shadow-2xl border-4 border-white/10 rotate-2 hover:rotate-0 transition-transform duration-300 relative">
                <div className="absolute top-3 right-3 bg-[#F97316] text-white text-[10px] font-black px-2 py-0.5 rounded-md">
                  PDF GUIDE
                </div>
                <div className="text-3xl mb-3">🇬🇧</div>
                <div className="text-xs font-black uppercase text-[#F97316] tracking-wider">
                  Exclusive Guide
                </div>
                <div className="text-base font-extrabold text-[#1E1E2E] leading-snug mt-1 mb-4">
                  50 British Idioms & Phrasal Verbs
                </div>
                <div className="text-[10px] text-gray-600 border-t border-orange-200/60 pt-3 space-y-1">
                  <p>✓ 24 Pages with Audio Examples</p>
                  <p>✓ Real workplace conversation scripts</p>
                  <p>✓ By Marcus Holloway (CELTA)</p>
                </div>
                <div className="mt-4 pt-3 border-t border-orange-200/60 flex items-center justify-between text-[10px] font-bold text-[#F97316]">
                  <span>⭐ 4.9/5 Rating</span>
                  <span>FREE</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
