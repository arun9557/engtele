'use client';

import { useState } from 'react';

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'perLesson'>('monthly');

  const plans = [
    {
      name: 'Starter Plan',
      lessonsPerWeek: '1 Lesson / week',
      bestFor: 'Maintaining fluency & steady conversational practice',
      priceMonthly: 76,
      pricePerLesson: 19,
      totalLessons: '4 lessons/month',
      isPopular: false,
      features: [
        '1 x 30-min telephone call per week',
        'Direct call via WhatsApp / Phone / Telegram',
        'Detailed post-lesson notes & error corrections',
        'Vocabulary & idiom list after every call',
        'Flexible weekly scheduling',
        'Cancel anytime with no penalties'
      ],
      ctaText: 'Start with 1 Lesson/Week'
    },
    {
      name: 'Professional',
      lessonsPerWeek: '2 Lessons / week',
      bestFor: 'Rapid progress for job interviews & workplace confidence',
      priceMonthly: 128,
      pricePerLesson: 16,
      totalLessons: '8 lessons/month',
      isPopular: true,
      popularTag: 'MOST POPULAR · BEST VALUE',
      features: [
        '2 x 30-min telephone calls per week',
        'Tailored business & conversational English topics',
        'Comprehensive post-lesson PDF review sheets',
        'Audio pronunciation feedback recordings',
        'Priority booking times (mornings/evenings)',
        'Direct WhatsApp messaging support with Marcus',
        'Free rescheduling (up to 12h notice)'
      ],
      ctaText: 'Choose Professional Plan'
    },
    {
      name: 'Intensive Fluency',
      lessonsPerWeek: '4 Lessons / week',
      bestFor: 'Upcoming IELTS/TOEFL exams, relocation & executive roles',
      priceMonthly: 224,
      pricePerLesson: 14,
      totalLessons: '16 lessons/month',
      isPopular: false,
      features: [
        '4 x 30-min telephone calls per week',
        'Total immersion & accent refinement coaching',
        'In-depth weekly progress & fluency assessment report',
        'Interview prep, mock business presentations & negotiation drills',
        'VIP priority schedule access 7 days a week',
        '24/7 WhatsApp text & voice note support',
        'Free same-day rescheduling'
      ],
      ctaText: 'Start Intensive Plan'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#F9F9FB] dark:bg-[#14141F] border-b border-[#E8E8F0] dark:border-[#2A2A3E] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F97316] mb-3 block">
            Transparent Investment
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E1E2E] dark:text-white leading-tight">
            Simple, Honest Pricing
          </h2>
          <p className="mt-4 text-[#6B7280] dark:text-[#9B9BAA] text-lg max-w-xl mx-auto">
            Try your first lesson 100% free. When you&apos;re ready, choose the pace that matches your schedule.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-white dark:bg-[#1A1A2E] border border-[#E8E8F0] dark:border-[#2A2A3E] shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-[#F97316] text-white shadow-md'
                  : 'text-[#6B7280] dark:text-[#9B9BAA] hover:text-[#1E1E2E] dark:hover:text-white'
              }`}
            >
              Monthly Subscription (Save up to 25%)
            </button>
            <button
              onClick={() => setBillingCycle('perLesson')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                billingCycle === 'perLesson'
                  ? 'bg-[#F97316] text-white shadow-md'
                  : 'text-[#6B7280] dark:text-[#9B9BAA] hover:text-[#1E1E2E] dark:hover:text-white'
              }`}
            >
              Per Lesson Breakdown
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-white dark:bg-[#1A1A2E] border-2 border-[#F97316] shadow-xl shadow-orange-500/10 scale-100 lg:-translate-y-2'
                  : 'bg-white dark:bg-[#1A1A2E] border border-[#E8E8F0] dark:border-[#2A2A3E] shadow-sm hover:border-[#FDDCBC] dark:hover:border-[#F97316]/30'
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F97316] text-white text-[11px] font-black tracking-wider uppercase px-4 py-1 rounded-full shadow-md">
                  {plan.popularTag}
                </div>
              )}

              <div>
                <h3 className="text-xl font-extrabold text-[#1E1E2E] dark:text-white">
                  {plan.name}
                </h3>
                <p className="text-xs font-semibold text-[#F97316] mt-1">
                  {plan.lessonsPerWeek}
                </p>
                <p className="text-xs text-[#6B7280] dark:text-[#9B9BAA] mt-2 mb-6 min-h-[32px]">
                  {plan.bestFor}
                </p>

                {/* Price Display */}
                <div className="pb-6 border-b border-[#E8E8F0] dark:border-[#2A2A3E] mb-6">
                  {billingCycle === 'monthly' ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl md:text-5xl font-black text-[#1E1E2E] dark:text-white">
                        ${plan.priceMonthly}
                      </span>
                      <span className="text-xs font-semibold text-[#6B7280] dark:text-[#9B9BAA]">
                        / month ({plan.totalLessons})
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl md:text-5xl font-black text-[#1E1E2E] dark:text-white">
                        ${plan.pricePerLesson}
                      </span>
                      <span className="text-xs font-semibold text-[#6B7280] dark:text-[#9B9BAA]">
                        / 30-min lesson
                      </span>
                    </div>
                  )}
                  <p className="text-[11px] text-[#6B7280] dark:text-[#9B9BAA] mt-1">
                    First 20-minute trial lesson is completely free.
                  </p>
                </div>

                {/* Feature List */}
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#3D3D4E] dark:text-[#C8C8D8]">
                      <span className="text-[#F97316] font-bold text-sm leading-none mt-0.5">✓</span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href="#cta"
                  className={`w-full block text-center py-3.5 px-6 rounded-full font-bold text-sm transition-all duration-300 cursor-pointer ${
                    plan.isPopular
                      ? 'bg-[#F97316] hover:bg-[#EA6C0A] text-white shadow-lg shadow-orange-500/20 hover:scale-[1.02]'
                      : 'bg-[#F9F9FB] dark:bg-[#14141F] text-[#1E1E2E] dark:text-white border border-[#E8E8F0] dark:border-[#2A2A3E] hover:border-[#F97316] hover:text-[#F97316]'
                  }`}
                >
                  Book Free Trial First →
                </a>
                <p className="text-center text-[10px] text-[#6B7280] dark:text-[#9B9BAA] mt-2">
                  No payment needed today
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 bg-white dark:bg-[#1A1A2E] border border-[#E8E8F0] dark:border-[#2A2A3E] rounded-2xl p-6 text-center max-w-2xl mx-auto shadow-sm">
          <p className="text-xs font-bold text-[#1E1E2E] dark:text-white flex items-center justify-center gap-2">
            <span>🛡️</span> 100% Satisfaction Guarantee
          </p>
          <p className="text-xs text-[#6B7280] dark:text-[#9B9BAA] mt-1">
            If you aren&apos;t completely satisfied with your lesson, Marcus will re-do your session or refund you immediately. No questions asked.
          </p>
        </div>

      </div>
    </section>
  );
}
