'use client';

import { useState, useEffect, useRef } from 'react';

export default function AudioIntro() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showTranscript, setShowTranscript] = useState(false);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const introText = "Hello there! I'm Marcus, your 1-on-1 telephone English tutor. I've helped over 70 professionals speak natural, fluent British English with confidence. No stressful video calls or boring grammar drills—just real, engaging conversation tailored to your personal goals. Book your free trial call today, and let's get you speaking naturally!";

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
      setIsPlaying(false);
      setProgress(0);
    } else {
      if (synthRef.current) {
        synthRef.current.cancel(); // Reset any previous speech
        const utterance = new SpeechSynthesisUtterance(introText);
        utteranceRef.current = utterance;
        utterance.rate = 0.95;
        utterance.pitch = 1.0;

        // Try to pick a British English voice
        const voices = synthRef.current.getVoices();
        const britishVoice = voices.find(
          (v) => v.lang.includes('en-GB') || v.name.includes('UK') || v.name.includes('British') || v.name.includes('Oliver') || v.name.includes('George')
        ) || voices.find((v) => v.lang.startsWith('en'));

        if (britishVoice) {
          utterance.voice = britishVoice;
        }

        utterance.onend = () => {
          setIsPlaying(false);
          setProgress(100);
          setTimeout(() => setProgress(0), 1000);
        };

        utterance.onerror = () => {
          setIsPlaying(false);
        };

        synthRef.current.speak(utterance);
        setIsPlaying(true);
      } else {
        // Fallback simulation if SpeechSynthesis not available
        setIsPlaying(true);
        const timer = setTimeout(() => {
          setIsPlaying(false);
          setProgress(100);
        }, 12000);
        return () => clearTimeout(timer);
      }
    }
  };

  // Progress animation while playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 98) return 98;
          return prev + 1.2;
        });
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section id="meet-marcus" className="py-24 bg-white dark:bg-[#0F0F1A] border-b border-[#E8E8F0] dark:border-[#2A2A3E] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F97316] mb-3 block">
            Meet Your Tutor
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E1E2E] dark:text-white leading-tight">
            Learn with a Native British Speaker
          </h2>
          <p className="mt-4 text-[#6B7280] dark:text-[#9B9BAA] text-lg max-w-2xl mx-auto">
            Listen to Marcus&apos;s natural British accent and discover how telephone lessons will elevate your fluency.
          </p>
        </div>

        {/* Profile & Audio Card */}
        <div className="bg-[#F9F9FB] dark:bg-[#14141F] rounded-3xl p-8 md:p-12 border border-[#E8E8F0] dark:border-[#2A2A3E] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Avatar & Credentials */}
            <div className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="relative mb-6">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-3xl bg-gradient-to-tr from-[#F97316] to-[#FDDCBC] p-1 shadow-lg shadow-orange-500/10">
                  <div className="w-full h-full rounded-[22px] bg-[#1E1E2E] flex items-center justify-center text-4xl font-black text-white">
                    🇬🇧
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-full border-2 border-white dark:border-[#14141F] flex items-center gap-1 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Online
                </div>
              </div>

              <h3 className="text-2xl font-extrabold text-[#1E1E2E] dark:text-white">
                Marcus Holloway
              </h3>
              <p className="text-sm font-semibold text-[#F97316] mt-0.5">
                CELTA Certified British English Tutor
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start">
                <span className="text-xs bg-white dark:bg-[#1A1A2E] text-[#6B7280] dark:text-[#C8C8D8] px-3 py-1 rounded-lg border border-[#E8E8F0] dark:border-[#2A2A3E] font-medium">
                  📍 London, UK
                </span>
                <span className="text-xs bg-white dark:bg-[#1A1A2E] text-[#6B7280] dark:text-[#C8C8D8] px-3 py-1 rounded-lg border border-[#E8E8F0] dark:border-[#2A2A3E] font-medium">
                  ⭐ 5.0 Rating (70+ Reviews)
                </span>
                <span className="text-xs bg-white dark:bg-[#1A1A2E] text-[#6B7280] dark:text-[#C8C8D8] px-3 py-1 rounded-lg border border-[#E8E8F0] dark:border-[#2A2A3E] font-medium">
                  🎓 Oxford University Alum
                </span>
              </div>
            </div>

            {/* Right: Audio Player Widget */}
            <div className="lg:col-span-7 bg-white dark:bg-[#1A1A2E] p-6 md:p-8 rounded-2xl border border-[#E8E8F0] dark:border-[#2A2A3E] shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B7280] dark:text-[#9B9BAA] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F97316]" />
                  Voice Introduction (0:30)
                </span>
                <button
                  onClick={() => setShowTranscript(!showTranscript)}
                  className="text-xs font-semibold text-[#F97316] hover:underline cursor-pointer"
                >
                  {showTranscript ? 'Hide Transcript' : 'Read Transcript'}
                </button>
              </div>

              {/* Player UI */}
              <div className="flex items-center gap-5 my-4">
                <button
                  onClick={togglePlay}
                  id="play-intro-audio-btn"
                  className="w-16 h-16 rounded-full bg-[#F97316] hover:bg-[#EA6C0A] active:scale-95 text-white flex items-center justify-center shadow-lg shadow-orange-500/20 transition-all flex-shrink-0 cursor-pointer"
                  aria-label={isPlaying ? 'Pause introduction' : 'Play introduction'}
                >
                  {isPlaying ? (
                    <span className="text-2xl">⏸</span>
                  ) : (
                    <span className="text-2xl ml-1">▶</span>
                  )}
                </button>

                <div className="flex-1">
                  <div className="flex justify-between text-xs font-semibold text-[#6B7280] dark:text-[#9B9BAA] mb-2">
                    <span>{isPlaying ? 'Playing British Accent Sample...' : 'Click to hear Marcus speak'}</span>
                    <span>{isPlaying ? '0:20' : '0:30'}</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-[#E8E8F0] dark:bg-[#2A2A3E] h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#F97316] h-full transition-all duration-200 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  {/* Animated sound wave bars */}
                  <div className="flex items-center gap-1.5 mt-3 h-5">
                    {[40, 70, 90, 60, 100, 45, 80, 65, 95, 50, 75, 85, 30, 90, 60, 80, 45, 100, 70, 40].map((h, i) => (
                      <span
                        key={i}
                        className={`w-1 rounded-full transition-all duration-300 ${
                          isPlaying ? 'bg-[#F97316]' : 'bg-[#E8E8F0] dark:bg-[#2A2A3E]'
                        }`}
                        style={{
                          height: isPlaying ? `${Math.max(20, (h * Math.random() + 20))}%` : `${h * 0.3}%`,
                          animation: isPlaying ? `pulse 1s infinite ${i * 0.05}s` : 'none'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Transcript Dropdown */}
              {showTranscript && (
                <div className="mt-4 pt-4 border-t border-[#E8E8F0] dark:border-[#2A2A3E] text-sm text-[#6B7280] dark:text-[#C8C8D8] leading-relaxed bg-[#F9F9FB] dark:bg-[#14141F] p-4 rounded-xl">
                  <p className="italic">
                    &ldquo;{introText}&rdquo;
                  </p>
                </div>
              )}

              {/* Mini CTA inside card */}
              <div className="mt-6 pt-4 border-t border-[#E8E8F0] dark:border-[#2A2A3E] flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-[#6B7280] dark:text-[#9B9BAA]">
                  Want to practice your conversation with Marcus?
                </p>
                <a
                  href="#cta"
                  className="text-xs font-bold text-white bg-[#1E1E2E] dark:bg-[#F97316] hover:bg-[#F97316] dark:hover:bg-[#EA6C0A] px-4 py-2 rounded-full transition-all duration-200"
                >
                  Book 20-min Free Call
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
