export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#2D2D2D] font-sans">

      {/* ── NAVBAR ──────────────────────────────────────────────── */}
      <nav className="w-full border-b border-[#EBEBEB] bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#2D2D2D] tracking-tight">
              English with{" "}
              <span className="text-[#C9A84C]">Marcus</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-[#7A7A7A] hover:text-[#C9A84C] transition-colors duration-200">
              How It Works
            </a>
            <a href="#reviews" className="text-sm font-medium text-[#7A7A7A] hover:text-[#C9A84C] transition-colors duration-200">
              Reviews
            </a>
            <a
              href="#cta"
              className="text-sm font-semibold bg-[#C9A84C] text-white px-5 py-2.5 rounded-full hover:bg-[#A8873A] transition-all duration-200 shadow-sm"
            >
              Book Free Trial
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO SECTION ────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 flex flex-col items-center text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#FAF8F4] border border-[#E8D5A3] text-[#A8873A] text-sm font-semibold px-4 py-1.5 rounded-full mb-8 shadow-sm">
          <span>⭐</span>
          <span>Trusted by 70+ Students Worldwide</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-[#2D2D2D] mb-6 max-w-4xl">
          Speak English with{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-[#C9A84C]">Real Confidence</span>
            <span
              className="absolute bottom-1 left-0 w-full h-3 bg-[#E8D5A3] rounded-full -z-0 opacity-50"
              aria-hidden="true"
            />
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-xl md:text-2xl text-[#7A7A7A] font-light leading-relaxed mb-4 max-w-2xl">
          Personalised <strong className="font-semibold text-[#4A4A4A]">1-on-1 telephone lessons</strong> designed around your schedule and your goals.
        </p>
        <p className="text-base text-[#7A7A7A] mb-12 max-w-xl">
          No apps to install. No commuting. Just natural English conversation that gets results.
        </p>

        {/* CTA Buttons */}
        <div id="cta" className="flex flex-col sm:flex-row items-center gap-4">
          <button
            id="book-trial-hero"
            className="bg-[#C9A84C] text-white px-9 py-4 rounded-full text-lg font-bold shadow-md hover:bg-[#A8873A] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Book a Free Trial Call
          </button>
          <a
            href="#reviews"
            className="text-[#7A7A7A] text-sm font-medium underline underline-offset-4 hover:text-[#C9A84C] transition-colors duration-200"
          >
            Read Student Reviews →
          </a>
        </div>
        <p className="mt-4 text-xs text-[#7A7A7A]">No credit card required · Cancel anytime</p>

        {/* Stats Row */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { value: "70+", label: "Happy Students" },
            { value: "5★", label: "Average Rating" },
            { value: "3+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-3xl font-extrabold text-[#C9A84C]">{stat.value}</span>
              <span className="text-sm text-[#7A7A7A] font-medium mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIVIDER ─────────────────────────────────────────────── */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#EBEBEB] to-transparent" />

      {/* ── HOW IT WORKS ────────────────────────────────────────── */}
      <section id="features" className="bg-[#FAF8F4] py-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-3">
              Simple & Flexible
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D2D2D] leading-tight">
              How It Works
            </h2>
            <p className="mt-4 text-[#7A7A7A] text-lg max-w-xl mx-auto">
              Three simple steps to start speaking fluent English today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                icon: "📞",
                title: "Book a Free Trial",
                desc: "Schedule a 20-minute trial call with Marcus at a time that suits you — completely free of charge.",
              },
              {
                step: "02",
                icon: "🎯",
                title: "Get Your Custom Plan",
                desc: "Marcus assesses your level and builds a personalised lesson plan focused on your specific goals.",
              },
              {
                step: "03",
                icon: "🚀",
                title: "Start Speaking",
                desc: "Have regular 1-on-1 telephone conversations and watch your confidence soar week by week.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#EBEBEB] hover:shadow-md hover:border-[#E8D5A3] transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-5">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-xs font-bold text-[#E8D5A3] group-hover:text-[#C9A84C] transition-colors duration-300 mt-2 tracking-widest">
                    STEP {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">{item.title}</h3>
                <p className="text-[#7A7A7A] leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ─────────────────────────────────────────────── */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#EBEBEB] to-transparent" />

      {/* ── FEATURES GRID ───────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-3">
              Why Choose Marcus
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D2D2D] leading-tight">
              Everything You Need to Succeed
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🗣️", title: "Real Conversation", desc: "Practice speaking naturally in real-life scenarios, not just grammar drills." },
              { icon: "📱", title: "No Tech Needed", desc: "Just a phone. No apps, no downloads, no complicated setup required." },
              { icon: "🕐", title: "Your Schedule", desc: "Flexible booking that works around your work, family, and lifestyle." },
              { icon: "🎙️", title: "Accent & Pronunciation", desc: "Clear, targeted feedback to help you sound natural and confident." },
              { icon: "📊", title: "Measurable Progress", desc: "Track your improvement with regular reviews and milestone sessions." },
              { icon: "💬", title: "British English", desc: "Learn authentic British English idioms, culture, and expressions." },
            ].map((feat) => (
              <div
                key={feat.title}
                className="flex gap-4 p-6 rounded-2xl border border-[#F4F0E8] bg-[#FAFAF8] hover:bg-[#FAF8F4] hover:border-[#E8D5A3] transition-all duration-300"
              >
                <span className="text-2xl flex-shrink-0 mt-0.5">{feat.icon}</span>
                <div>
                  <h3 className="font-bold text-[#2D2D2D] mb-1">{feat.title}</h3>
                  <p className="text-sm text-[#7A7A7A] leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ─────────────────────────────────────────────── */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#EBEBEB] to-transparent" />

      {/* ── TESTIMONIALS ────────────────────────────────────────── */}
      <section id="reviews" className="bg-[#FAF8F4] py-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-3">
              Student Stories
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D2D2D] leading-tight">
              What Students Say
            </h2>
            <p className="mt-4 text-[#7A7A7A] text-lg">
              Real results from real students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Priya S.",
                country: "🇮🇳 India",
                stars: 5,
                text: "Marcus completely transformed my confidence on work calls. I used to dread speaking English with my UK colleagues — now I actually enjoy it!",
              },
              {
                name: "Ahmed K.",
                country: "🇸🇦 Saudi Arabia",
                stars: 5,
                text: "The telephone format is brilliant. I can practice on my commute or lunch break. My pronunciation has improved so much in just 8 weeks.",
              },
              {
                name: "Sofia M.",
                country: "🇧🇷 Brazil",
                stars: 5,
                text: "Completely flexible, very friendly, and incredibly effective. Marcus tailors every lesson to exactly what I need. Highly recommend!",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-2xl p-7 shadow-sm border border-[#EBEBEB] hover:shadow-md hover:border-[#E8D5A3] transition-all duration-300 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <span key={i} className="text-[#C9A84C] text-lg">★</span>
                  ))}
                </div>
                {/* Quote */}
                <p className="text-[#4A4A4A] text-sm leading-relaxed flex-1 mb-5 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                {/* Author */}
                <div className="flex items-center gap-3 border-t border-[#F4F0E8] pt-4">
                  <div className="w-9 h-9 rounded-full bg-[#F4F0E8] flex items-center justify-center text-sm font-bold text-[#C9A84C]">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#2D2D2D]">{review.name}</p>
                    <p className="text-xs text-[#7A7A7A]">{review.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BANNER ────────────────────────────────────── */}
      <section className="bg-[#2D2D2D] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-4">
            Ready to Begin?
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Your First Lesson is{" "}
            <span className="text-[#C9A84C]">Completely Free</span>
          </h2>
          <p className="text-[#7A7A7A] text-lg mb-10 max-w-xl mx-auto">
            Join 70+ students who have already transformed their English. Book your free trial call now — no commitment needed.
          </p>
          <button
            id="book-trial-footer"
            className="bg-[#C9A84C] text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-[#A8873A] hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Book a Free Trial Call
          </button>
          <p className="mt-4 text-xs text-[#7A7A7A]">No credit card · Cancel anytime · 100% free trial</p>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="bg-[#1A1A1A] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-semibold text-white">
            English with <span className="text-[#C9A84C]">Marcus</span>
          </p>
          <p className="text-xs text-[#7A7A7A]">
            © {new Date().getFullYear()} English with Marcus. All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  );
}
