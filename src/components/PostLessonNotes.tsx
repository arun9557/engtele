'use client';

export default function PostLessonNotes() {
  return (
    <section id="post-lesson" className="py-24 bg-white dark:bg-[#0F0F1A] border-b border-[#E8E8F0] dark:border-[#2A2A3E] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F97316] mb-3 block">
            Maximum Retention
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E1E2E] dark:text-white leading-tight">
            Learning Doesn&apos;t Stop When the Call Ends
          </h2>
          <p className="mt-4 text-[#6B7280] dark:text-[#9B9BAA] text-lg max-w-2xl mx-auto">
            Marcus takes precise notes while you speak. Within 15 minutes after every call, you receive a comprehensive personal review sheet.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: 4 Benefit Cards */}
          <div className="lg:col-span-6 space-y-4">
            {[
              {
                icon: '📝',
                title: 'Personalised Mistake Breakdown',
                desc: 'See exactly what grammar, prepositions, or idioms you tripped on, paired with natural British native alternatives.'
              },
              {
                icon: '🎙️',
                title: 'Pronunciation & Accent Voice Notes',
                desc: 'Marcus records short voice memos demonstrating the exact British vowel sounds and word stress for difficult words.'
              },
              {
                icon: '📚',
                title: 'New Vocabulary & Idiom Bank',
                desc: 'All new expressions discussed during your conversation are catalogued with real-life context examples.'
              },
              {
                icon: '🎯',
                title: 'Weekly 5-Minute Speaking Drill',
                desc: 'A bite-sized prompt to practice before your next session to cement new vocabulary into your long-term memory.'
              }
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#F9F9FB] dark:bg-[#14141F] border border-[#E8E8F0] dark:border-[#2A2A3E] hover:border-[#FDDCBC] dark:hover:border-[#F97316]/30 transition-all duration-300"
              >
                <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <h3 className="text-sm font-bold text-[#1E1E2E] dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] dark:text-[#9B9BAA] mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Mock Review Sheet Visual */}
          <div className="lg:col-span-6">
            <div className="bg-[#FAF8F4] dark:bg-[#1A1A2E] rounded-3xl p-6 md:p-8 border border-[#FDDCBC] dark:border-[#2A2A3E] shadow-lg relative">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E8D5A3]/50 dark:border-[#2A2A3E]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F97316] text-white flex items-center justify-center font-bold text-xs">
                    EN
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#1E1E2E] dark:text-white">
                      POST-LESSON NOTES #14
                    </h4>
                    <p className="text-[10px] text-[#6B7280] dark:text-[#9B9BAA]">
                      Student: Priya S. · Topic: Business Negotiations
                    </p>
                  </div>
                </div>
                <span className="text-[10px] bg-[#FFF0E6] dark:bg-[#2A1A0A] text-[#F97316] font-bold px-2 py-1 rounded-md border border-[#FDDCBC] dark:border-[#4A2A10]">
                  PDF REPORT
                </span>
              </div>

              {/* Sample Corrections Table */}
              <div className="mt-4 space-y-3">
                <p className="text-[11px] font-bold uppercase text-[#F97316] tracking-wider">
                  1. Live Corrections & Native Phrasing
                </p>

                <div className="space-y-2 text-xs">
                  <div className="bg-white dark:bg-[#14141F] p-3 rounded-xl border border-red-100 dark:border-red-900/30">
                    <p className="text-red-600 dark:text-red-400 font-medium">
                      ❌ &ldquo;I explained him about the delay...&rdquo;
                    </p>
                    <p className="text-emerald-600 dark:text-emerald-400 font-bold mt-1">
                      ✓ &ldquo;I explained the delay <span className="underline">to him</span>...&rdquo;
                    </p>
                  </div>

                  <div className="bg-white dark:bg-[#14141F] p-3 rounded-xl border border-red-100 dark:border-red-900/30">
                    <p className="text-red-600 dark:text-red-400 font-medium">
                      ❌ &ldquo;Let&apos;s do a fast decision.&rdquo;
                    </p>
                    <p className="text-emerald-600 dark:text-emerald-400 font-bold mt-1">
                      ✓ &ldquo;Let&apos;s <span className="underline">make a quick call</span> on this.&rdquo; (Natural British idiom)
                    </p>
                  </div>
                </div>

                {/* Vocabulary Box */}
                <p className="text-[11px] font-bold uppercase text-[#F97316] tracking-wider pt-2">
                  2. New Idioms Covered
                </p>
                <div className="bg-white dark:bg-[#14141F] p-3 rounded-xl border border-[#E8E8F0] dark:border-[#2A2A3E] text-xs space-y-1 text-[#3D3D4E] dark:text-[#C8C8D8]">
                  <p>🔹 <strong className="text-[#1E1E2E] dark:text-white">Touch base</strong> — To briefly make contact with someone.</p>
                  <p>🔹 <strong className="text-[#1E1E2E] dark:text-white">Hit the ground running</strong> — Start immediately with full effort.</p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E8D5A3]/50 dark:border-[#2A2A3E] flex items-center justify-between text-[11px] text-[#6B7280] dark:text-[#9B9BAA]">
                <span>Delivered automatically via Email & WhatsApp</span>
                <span className="text-[#F97316] font-bold">100% Personalised</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
