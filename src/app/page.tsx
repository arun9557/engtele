import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0F0F1A] text-[#3D3D4E] dark:text-[#C8C8D8] font-sans transition-colors duration-300">

      {/* ── NAVBAR ──────────────────────────────────────────────────── */}
      <nav className="w-full border-b border-[#E8E8F0] dark:border-[#2A2A3E] bg-white/95 dark:bg-[#0F0F1A]/95 backdrop-blur-sm sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-extrabold text-[#1E1E2E] dark:text-white tracking-tight">
            English with{" "}
            <span className="text-[#F97316]">Marcus</span>
          </span>

          <div className="hidden md:flex items-center gap-6">
            <a href="#how-it-works"
              className="text-sm font-medium text-[#6B7280] dark:text-[#9B9BAA] hover:text-[#F97316] dark:hover:text-[#F97316] transition-colors duration-200">
              How It Works
            </a>
            <a href="#reviews"
              className="text-sm font-medium text-[#6B7280] dark:text-[#9B9BAA] hover:text-[#F97316] dark:hover:text-[#F97316] transition-colors duration-200">
              Reviews
            </a>
            {/* Dark / Light toggle */}
            <ThemeToggle />
            <a href="#cta"
              id="nav-cta"
              className="text-sm font-bold bg-[#F97316] text-white px-5 py-2.5 rounded-full
                         hover:bg-[#EA6C0A] hover:shadow-lg hover:shadow-orange-200/50
                         active:scale-95 transition-all duration-200 shadow-sm">
              Book Free Trial →
            </a>
          </div>

          {/* Mobile: show toggle only */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <a href="#cta"
              className="text-xs font-bold bg-[#F97316] text-white px-4 py-2 rounded-full
                         hover:bg-[#EA6C0A] active:scale-95 transition-all duration-200">
              Book Trial →
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 flex flex-col items-center text-center">

        {/* Trust badge */}
        <div className="inline-flex items-center gap-2
                        bg-[#FFF0E6] dark:bg-[#2A1A0A] border border-[#FDDCBC] dark:border-[#4A2A10]
                        text-[#EA6C0A] dark:text-[#F97316] text-sm font-semibold px-4 py-1.5 rounded-full mb-8
                        transition-colors duration-300">
          <span className="text-base">🌍</span>
          <span>Trusted by 70+ Students from 20+ Countries</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold leading-[1.08]
                        tracking-tight text-[#1E1E2E] dark:text-white mb-5 max-w-4xl
                        transition-colors duration-300">
          Speak English with{" "}
          <span className="relative whitespace-nowrap">
            <span className="relative z-10 text-[#F97316]">True Confidence</span>
            <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 12" fill="none"
                 xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M2 9 C80 3, 220 3, 298 9" stroke="#FDDCBC" strokeWidth="5"
                    strokeLinecap="round" fill="none"/>
            </svg>
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-[#6B7280] dark:text-[#9B9BAA] font-light leading-relaxed mb-3 max-w-2xl transition-colors duration-300">
          Personalised <strong className="font-semibold text-[#3D3D4E] dark:text-[#C8C8D8]">1-on-1 telephone lessons</strong>{" "}
          designed around your schedule and goals.
        </p>
        <p className="text-sm text-[#6B7280] dark:text-[#9B9BAA] mb-10 max-w-xl transition-colors duration-300">
          No apps. No commuting. Just natural English conversation that delivers real results.
        </p>

        {/* CTA */}
        <div id="cta" className="flex flex-col sm:flex-row items-center gap-4">
          <button id="hero-cta"
            className="bg-[#F97316] text-white px-9 py-4 rounded-full text-lg font-bold
                       shadow-md shadow-orange-200/50 hover:bg-[#EA6C0A] hover:shadow-xl
                       hover:shadow-orange-200/50 hover:scale-105 active:scale-95
                       transition-all duration-300">
            📞 Book a Free Trial Call
          </button>
          <a href="#reviews"
            className="text-[#6B7280] dark:text-[#9B9BAA] text-sm font-medium
                       hover:text-[#F97316] dark:hover:text-[#F97316]
                       underline underline-offset-4 transition-colors duration-200">
            Read what students say →
          </a>
        </div>
        <p className="mt-4 text-xs text-[#6B7280] dark:text-[#9B9BAA] transition-colors duration-300">
          No credit card · No commitment · 100% free trial
        </p>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 md:gap-16 w-full max-w-md">
          {[
            { value: "70+",  label: "Happy Students" },
            { value: "5.0★", label: "Average Rating"  },
            { value: "3+",   label: "Years Teaching"  },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-extrabold text-[#F97316]">{s.value}</span>
              <span className="text-xs text-[#6B7280] dark:text-[#9B9BAA] font-medium mt-1 text-center transition-colors duration-300">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIVIDER ─────────────────────────────────────────────────── */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E8E8F0] dark:via-[#2A2A3E] to-transparent transition-colors duration-300" />

      {/* ── HOW IT WORKS ────────────────────────────────────────────── */}
      <section id="how-it-works" className="bg-[#F9F9FB] dark:bg-[#14141F] py-24 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F97316] mb-3 block">
              Simple Process
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E1E2E] dark:text-white leading-tight transition-colors duration-300">
              Start Speaking in 3 Easy Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { step: "01", icon: "📞", title: "Book a Free Trial",
                desc: "Pick a time that works for you and schedule a free 20-minute intro call with Marcus." },
              { step: "02", icon: "🎯", title: "Get Your Custom Plan",
                desc: "Marcus assesses your level and builds a lesson plan around your specific goals and needs." },
              { step: "03", icon: "🚀", title: "Start Speaking English",
                desc: "Have regular 1-on-1 telephone conversations and watch your confidence improve every week." },
            ].map((item) => (
              <div key={item.step}
                className="bg-white dark:bg-[#1A1A2E] rounded-2xl p-7
                           border border-[#E8E8F0] dark:border-[#2A2A3E]
                           shadow-sm hover:border-[#FDDCBC] dark:hover:border-[#F97316]/30
                           hover:shadow-md hover:shadow-orange-50 dark:hover:shadow-orange-900/20
                           transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-bold tracking-widest text-[#FDDCBC]
                                   group-hover:text-[#F97316] transition-colors duration-300">
                    STEP {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1E1E2E] dark:text-white mb-2 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6B7280] dark:text-[#9B9BAA] leading-relaxed transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ─────────────────────────────────────────────────── */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E8E8F0] dark:via-[#2A2A3E] to-transparent transition-colors duration-300" />

      {/* ── FEATURE GRID ────────────────────────────────────────────── */}
      <section className="bg-white dark:bg-[#0F0F1A] py-24 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F97316] mb-3 block">
              Why Choose Marcus
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E1E2E] dark:text-white leading-tight transition-colors duration-300">
              Everything You Need to Succeed
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🗣️", title: "Real Conversation",
                desc: "Practice real-life scenarios, not just grammar exercises. Speak like a native." },
              { icon: "📱", title: "No Tech Needed",
                desc: "Just a phone. No apps, no downloads, no complicated setup needed at all." },
              { icon: "🕐", title: "Your Schedule",
                desc: "Fully flexible booking that fits around your work, family, and lifestyle." },
              { icon: "🎙️", title: "Accent & Pronunciation",
                desc: "Clear, targeted feedback so you sound natural and confident to native speakers." },
              { icon: "📊", title: "Measurable Progress",
                desc: "Regular reviews and milestone sessions to track your real improvement." },
              { icon: "🇬🇧", title: "Authentic British English",
                desc: "Learn real British idioms, expressions, and cultural nuances." },
            ].map((f) => (
              <div key={f.title}
                className="flex gap-4 p-6 rounded-2xl
                           border border-[#E8E8F0] dark:border-[#2A2A3E]
                           bg-[#F9F9FB] dark:bg-[#14141F]
                           hover:bg-white dark:hover:bg-[#1A1A2E]
                           hover:border-[#FDDCBC] dark:hover:border-[#F97316]/30
                           hover:shadow-sm transition-all duration-300">
                <span className="text-2xl flex-shrink-0 mt-0.5">{f.icon}</span>
                <div>
                  <h3 className="font-bold text-[#1E1E2E] dark:text-white mb-1 text-sm transition-colors duration-300">
                    {f.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] dark:text-[#9B9BAA] leading-relaxed transition-colors duration-300">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ─────────────────────────────────────────────────── */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E8E8F0] dark:via-[#2A2A3E] to-transparent transition-colors duration-300" />

      {/* ── TESTIMONIALS ────────────────────────────────────────────── */}
      <section id="reviews" className="bg-[#F9F9FB] dark:bg-[#14141F] py-24 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F97316] mb-3 block">
              Student Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E1E2E] dark:text-white leading-tight transition-colors duration-300">
              What Students Are Saying
            </h2>
            <p className="mt-4 text-[#6B7280] dark:text-[#9B9BAA] text-lg transition-colors duration-300">
              Real results from real students around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { name: "Priya S.", country: "🇮🇳 India", stars: 5,
                text: "Marcus completely transformed my confidence on work calls. I used to dread speaking English with my UK colleagues — now I actually enjoy it!" },
              { name: "Ahmed K.", country: "🇸🇦 Saudi Arabia", stars: 5,
                text: "The telephone format is brilliant. I can practice on my commute or lunch break. My pronunciation has improved so much in just 8 weeks." },
              { name: "Sofia M.", country: "🇧🇷 Brazil", stars: 5,
                text: "Completely flexible, very friendly, and incredibly effective. Marcus tailors every lesson to exactly what I need. Highly recommend!" },
            ].map((r) => (
              <div key={r.name}
                className="bg-white dark:bg-[#1A1A2E] rounded-2xl p-7
                           border border-[#E8E8F0] dark:border-[#2A2A3E] shadow-sm
                           hover:border-[#FDDCBC] dark:hover:border-[#F97316]/30
                           hover:shadow-md hover:shadow-orange-50 dark:hover:shadow-orange-900/20
                           transition-all duration-300 flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <span key={i} className="text-[#F97316] text-lg">★</span>
                  ))}
                </div>
                <p className="text-[#3D3D4E] dark:text-[#C8C8D8] text-sm leading-relaxed flex-1 mb-5 italic transition-colors duration-300">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-[#E8E8F0] dark:border-[#2A2A3E] pt-4 transition-colors duration-300">
                  <div className="w-9 h-9 rounded-full bg-[#FFF0E6] dark:bg-[#2A1A0A] flex items-center justify-center
                                  text-sm font-extrabold text-[#F97316] transition-colors duration-300">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1E1E2E] dark:text-white transition-colors duration-300">{r.name}</p>
                    <p className="text-xs text-[#6B7280] dark:text-[#9B9BAA] transition-colors duration-300">{r.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────────────── */}
      <section className="bg-[#F97316] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-200 mb-4">
            Ready to Begin?
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
            Your First Lesson is{" "}
            <span className="underline decoration-orange-300 decoration-4 underline-offset-4">
              Completely Free
            </span>
          </h2>
          <p className="text-orange-100 text-lg mb-10 max-w-xl mx-auto">
            Join 70+ students who have already transformed their English. Book your free trial call today.
          </p>
          <button id="footer-cta"
            className="bg-white text-[#F97316] px-10 py-4 rounded-full text-lg font-extrabold
                       shadow-lg hover:bg-orange-50 hover:scale-105 active:scale-95 transition-all duration-300">
            📞 Book Your Free Trial Call
          </button>
          <p className="mt-5 text-xs text-orange-200">No credit card · Cancel anytime · 100% free trial</p>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="bg-[#1E1E2E] dark:bg-[#080810] py-8 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-bold text-white">
            English with <span className="text-[#F97316]">Marcus</span>
          </p>
          <p className="text-xs text-[#6B7280]">
            © {new Date().getFullYear()} English with Marcus. All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  );
}
