'use client';

import ThemeToggle from "@/components/ThemeToggle";
import AudioIntro from "@/components/AudioIntro";
import PricingSection from "@/components/PricingSection";
import LeadMagnet from "@/components/LeadMagnet";
import PostLessonNotes from "@/components/PostLessonNotes";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0F0F1A] text-[#3D3D4E] dark:text-[#C8C8D8] font-sans transition-colors duration-300">

      {/* ── NAVBAR ──────────────────────────────────────────────────── */}
      <nav className="w-full border-b border-[#E8E8F0] dark:border-[#2A2A3E] bg-white/95 dark:bg-[#0F0F1A]/95 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-black text-[#1E1E2E] dark:text-white tracking-tight flex items-center gap-1.5">
            English with <span className="text-[#F97316]">Marcus</span>
            <span className="text-xs bg-[#FFF0E6] dark:bg-[#2A1A0A] text-[#F97316] font-bold px-2 py-0.5 rounded-full border border-[#FDDCBC] dark:border-[#4A2A10] hidden sm:inline-block">
              1-on-1
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            <a href="#meet-marcus"
              className="text-sm font-medium text-[#6B7280] dark:text-[#9B9BAA] hover:text-[#F97316] dark:hover:text-[#F97316] transition-colors duration-200">
              Meet Marcus
            </a>
            <a href="#how-it-works"
              className="text-sm font-medium text-[#6B7280] dark:text-[#9B9BAA] hover:text-[#F97316] dark:hover:text-[#F97316] transition-colors duration-200">
              How It Works
            </a>
            <a href="#post-lesson"
              className="text-sm font-medium text-[#6B7280] dark:text-[#9B9BAA] hover:text-[#F97316] dark:hover:text-[#F97316] transition-colors duration-200">
              Lesson Notes
            </a>
            <a href="#pricing"
              className="text-sm font-medium text-[#6B7280] dark:text-[#9B9BAA] hover:text-[#F97316] dark:hover:text-[#F97316] transition-colors duration-200">
              Pricing
            </a>
            <a href="#reviews"
              className="text-sm font-medium text-[#6B7280] dark:text-[#9B9BAA] hover:text-[#F97316] dark:hover:text-[#F97316] transition-colors duration-200">
              Reviews
            </a>
            <a href="#faq"
              className="text-sm font-medium text-[#6B7280] dark:text-[#9B9BAA] hover:text-[#F97316] dark:hover:text-[#F97316] transition-colors duration-200">
              FAQ
            </a>
            
            {/* Dark / Light toggle */}
            <ThemeToggle />

            <a href="#pricing"
              id="nav-cta"
              className="text-sm font-bold bg-[#F97316] text-white px-5 py-2.5 rounded-full
                         hover:bg-[#EA6C0A] hover:shadow-lg hover:shadow-orange-200/50
                         active:scale-95 transition-all duration-200 shadow-sm">
              Book Free Trial →
            </a>
          </div>

          {/* Mobile Navigation bar */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />
            <a href="#pricing"
              className="text-xs font-bold bg-[#F97316] text-white px-4 py-2 rounded-full
                         hover:bg-[#EA6C0A] active:scale-95 transition-all duration-200">
              Book Trial →
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO SECTION ────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 flex flex-col items-center text-center">

        {/* Trust badge */}
        <div className="inline-flex items-center gap-2
                        bg-[#FFF0E6] dark:bg-[#2A1A0A] border border-[#FDDCBC] dark:border-[#4A2A10]
                        text-[#EA6C0A] dark:text-[#F97316] text-sm font-semibold px-4 py-1.5 rounded-full mb-8
                        transition-colors duration-300">
          <span className="text-base">🇬🇧</span>
          <span>Authentic British English · 70+ Students Across 20+ Countries</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold leading-[1.08]
                        tracking-tight text-[#1E1E2E] dark:text-white mb-5 max-w-4xl
                        transition-colors duration-300">
          Speak British English with{" "}
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
          designed around your work, schedule, and fluency goals.
        </p>
        <p className="text-sm text-[#6B7280] dark:text-[#9B9BAA] mb-10 max-w-xl transition-colors duration-300">
          No awkward webcams. No commuting. Just high-impact conversation with a dedicated London tutor.
        </p>

        {/* CTA Buttons */}
        <div id="cta" className="flex flex-col sm:flex-row items-center gap-4">
          <a href="#pricing"
            id="hero-cta"
            className="bg-[#F97316] text-white px-9 py-4 rounded-full text-lg font-bold
                       shadow-md shadow-orange-200/50 hover:bg-[#EA6C0A] hover:shadow-xl
                       hover:shadow-orange-200/50 hover:scale-105 active:scale-95
                       transition-all duration-300 cursor-pointer">
            📞 Book a Free 20-min Trial Call
          </a>
          <a href="#meet-marcus"
            className="text-[#6B7280] dark:text-[#9B9BAA] text-sm font-medium
                       hover:text-[#F97316] dark:hover:text-[#F97316]
                       underline underline-offset-4 transition-colors duration-200">
            🎙️ Listen to Marcus&apos;s Voice Intro →
          </a>
        </div>
        <p className="mt-4 text-xs text-[#6B7280] dark:text-[#9B9BAA] transition-colors duration-300">
          No credit card required · Free 20-min intro lesson · Cancel anytime
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

      {/* ── 1. MEET MARCUS (AUDIO / VOICE SECTION) ────────────────── */}
      <AudioIntro />

      {/* ── HOW IT WORKS ────────────────────────────────────────────── */}
      <section id="how-it-works" className="bg-[#F9F9FB] dark:bg-[#14141F] py-24 border-b border-[#E8E8F0] dark:border-[#2A2A3E] transition-colors duration-300">
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
                desc: "Marcus assesses your level and builds a lesson plan around your specific workplace and fluency needs." },
              { step: "03", icon: "🚀", title: "Start Speaking English",
                desc: "Have regular 1-on-1 telephone conversations and watch your confidence improve every single week." },
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

      {/* ── 2. POST-LESSON BENEFITS (DETAILED SUMMARY CARD) ───────── */}
      <PostLessonNotes />

      {/* ── 3. TRANSPARENT PRICING & PACKAGES ───────────────────────── */}
      <PricingSection />

      {/* ── WHY CHOOSE MARCUS (FEATURE GRID) ────────────────────────── */}
      <section className="bg-white dark:bg-[#0F0F1A] py-24 border-b border-[#E8E8F0] dark:border-[#2A2A3E] transition-colors duration-300">
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
                desc: "Practice real-life workplace & casual dialogue, not outdated textbook drills." },
              { icon: "📱", title: "Zero Tech Hassle",
                desc: "Just answer your phone. No Zoom software, no webcams, no login passwords needed." },
              { icon: "🕐", title: "Fits Your Schedule",
                desc: "Fully flexible booking across morning, afternoon, or evening time slots." },
              { icon: "🎙️", title: "Accent & Pronunciation",
                desc: "Targeted correction so you sound clear, natural, and confident to native speakers." },
              { icon: "📊", title: "Measurable Progress",
                desc: "Regular review milestones and weekly notes to track your continuous growth." },
              { icon: "🇬🇧", title: "Authentic British English",
                desc: "Learn real British idioms, cultural subtleties, and meeting etiquette." },
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

      {/* ── TESTIMONIALS & REVIEWS ──────────────────────────────────── */}
      <section id="reviews" className="bg-[#F9F9FB] dark:bg-[#14141F] py-24 border-b border-[#E8E8F0] dark:border-[#2A2A3E] transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F97316] mb-3 block">
              Student Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E1E2E] dark:text-white leading-tight transition-colors duration-300">
              What Students Are Saying
            </h2>
            <p className="mt-4 text-[#6B7280] dark:text-[#9B9BAA] text-lg transition-colors duration-300">
              Real results from professionals and students worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { name: "Priya S.", country: "🇮🇳 India", role: "Software Project Lead", stars: 5,
                text: "Marcus completely transformed my confidence on client calls. I used to hesitate speaking with UK stakeholders—now I lead meetings with total fluency!" },
              { name: "Ahmed K.", country: "🇸🇦 Saudi Arabia", role: "Marketing Consultant", stars: 5,
                text: "The telephone format is a game changer. I practice during my morning commute. The post-lesson PDF feedback notes helped fix my pronunciation in 8 weeks." },
              { name: "Sofia M.", country: "🇧🇷 Brazil", role: "Product Manager", stars: 5,
                text: "Completely flexible, very friendly, and remarkably effective. Marcus tailors every lesson to my real-world work scenarios. Highly recommended!" },
            ].map((r) => (
              <div key={r.name}
                className="bg-white dark:bg-[#1A1A2E] rounded-2xl p-7
                           border border-[#E8E8F0] dark:border-[#2A2A3E] shadow-sm
                           hover:border-[#FDDCBC] dark:hover:border-[#F97316]/30
                           hover:shadow-md hover:shadow-orange-50 dark:hover:shadow-orange-900/20
                           transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: r.stars }).map((_, i) => (
                      <span key={i} className="text-[#F97316] text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-[#3D3D4E] dark:text-[#C8C8D8] text-sm leading-relaxed mb-5 italic transition-colors duration-300">
                    &ldquo;{r.text}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3 border-t border-[#E8E8F0] dark:border-[#2A2A3E] pt-4 transition-colors duration-300">
                  <div className="w-9 h-9 rounded-full bg-[#FFF0E6] dark:bg-[#2A1A0A] flex items-center justify-center
                                  text-sm font-extrabold text-[#F97316] transition-colors duration-300">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1E1E2E] dark:text-white transition-colors duration-300">{r.name}</p>
                    <p className="text-xs text-[#6B7280] dark:text-[#9B9BAA] transition-colors duration-300">{r.role} · {r.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FREE LEAD MAGNET (50 BRITISH IDIOMS PDF) ───────────── */}
      <LeadMagnet />

      {/* ── 5. FREQUENTLY ASKED QUESTIONS (ACCORDION) ──────────────── */}
      <FaqSection />

      {/* ── FINAL CTA BANNER ────────────────────────────────────────── */}
      <section className="bg-[#F97316] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-200 mb-4">
            Ready to Begin?
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
            Your First 20-min Lesson is{" "}
            <span className="underline decoration-orange-300 decoration-4 underline-offset-4">
              100% Free
            </span>
          </h2>
          <p className="text-orange-100 text-lg mb-10 max-w-xl mx-auto">
            Join 70+ ambitious professionals who transformed their English. Book your free telephone trial with Marcus today.
          </p>
          <a href="https://wa.me/?text=Hi%20Marcus,%20I%20would%20like%20to%20book%20my%20free%20trial%20English%20call!"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-cta"
            className="inline-block bg-white text-[#F97316] px-10 py-4 rounded-full text-lg font-extrabold
                       shadow-lg hover:bg-orange-50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
            📞 Book Your Free Trial Call on WhatsApp
          </a>
          <p className="mt-5 text-xs text-orange-200">No credit card · Instant scheduling · 100% free trial</p>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="bg-[#1E1E2E] dark:bg-[#080810] py-12 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-gray-800">
          <div className="md:col-span-2">
            <p className="text-lg font-black text-white">
              English with <span className="text-[#F97316]">Marcus</span>
            </p>
            <p className="text-xs text-[#9B9BAA] mt-2 max-w-sm leading-relaxed">
              Personalised 1-on-1 telephone English lessons for busy professionals, founders, and students worldwide.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-white mb-3">Quick Links</p>
            <ul className="space-y-2 text-xs text-[#9B9BAA]">
              <li><a href="#meet-marcus" className="hover:text-[#F97316] transition-colors">Meet Marcus</a></li>
              <li><a href="#pricing" className="hover:text-[#F97316] transition-colors">Pricing & Plans</a></li>
              <li><a href="#post-lesson" className="hover:text-[#F97316] transition-colors">Lesson Review Notes</a></li>
              <li><a href="#free-guide" className="hover:text-[#F97316] transition-colors">Free Idioms Guide</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-white mb-3">Contact & Support</p>
            <ul className="space-y-2 text-xs text-[#9B9BAA]">
              <li>📍 London, United Kingdom</li>
              <li>💬 WhatsApp Support Available</li>
              <li>✉️ hello@englishwithmarcus.com</li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#6B7280]">
          <p>© {new Date().getFullYear()} English with Marcus. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#faq" className="hover:text-[#F97316] transition-colors">FAQ</a>
            <a href="#" className="hover:text-[#F97316] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#F97316] transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
