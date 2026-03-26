// CareConnect — HowItWorksSection.jsx
// Tabbed 3-step process for Parents and Babysitters
import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import clsx from 'clsx';

const TABS = [
  {
    label: 'For Parents',
    steps: [
      { num: 1, title: 'Create Account', desc: 'Sign up and set your preferences.' },
      { num: 2, title: 'Browse Sitters', desc: 'Explore verified babysitters near you.' },
      { num: 3, title: 'Message & Hire', desc: 'Chat securely and book your sitter.' },
    ],
  },
  {
    label: 'For Babysitters',
    steps: [
      { num: 1, title: 'Build Profile', desc: 'Showcase your skills and experience.' },
      { num: 2, title: 'Get Verified', desc: 'Submit documents for admin review.' },
      { num: 3, title: 'Start Earning', desc: 'Connect with families and get hired.' },
    ],
  },
];

export default function HowItWorksSection() {
  const [tab, setTab] = useState(0);
  const ref = useScrollReveal();
  return (
    <section ref={ref} className="section-reveal py-20 px-[5%] bg-transparent">
      <div className="text-teal-600 uppercase tracking-[0.08em] font-semibold text-xs mb-2">SIMPLE PROCESS</div>
      <h2 className="font-display text-[2.6rem] font-bold text-warm-900 mb-3">How CareConnect Works</h2>
      <p className="text-warm-400 text-base mb-8 max-w-xl">A seamless, secure process for both parents and babysitters. Switch tabs to see how it works for you.</p>
      {/* Tab bar */}
      <div className="flex bg-white border border-warm-200 rounded-xl overflow-hidden w-fit mb-10">
        {TABS.map((t, i) => (
          <button
            key={t.label}
            className={clsx(
              'px-6 py-2 text-base font-semibold transition',
              i === tab ? 'bg-teal-600 text-white' : 'text-warm-400 hover:text-teal-600'
            )}
            onClick={() => setTab(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {/* Steps grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
        {TABS[tab].steps.map((step, i) => (
          <div key={step.title} className="flex flex-col items-center text-center relative">
            <div className="w-12 h-12 flex items-center justify-center rounded-[12px] bg-gradient-to-br from-teal-700 to-teal-400 mb-4">
              <span className="font-display text-2xl font-bold text-white">{step.num}</span>
            </div>
            {/* Connector line */}
            {i < 2 && (
              <div className="hidden md:block absolute top-6 right-[-40px] w-20 h-1 bg-gradient-to-r from-teal-200 to-transparent rounded-full" />
            )}
            <h3 className="font-display text-xl font-semibold text-warm-900 mb-2">{step.title}</h3>
            <p className="text-warm-400 text-base">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
