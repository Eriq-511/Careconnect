// CareConnect — StatsSection.jsx
// 3-column stats grid with Lora numbers and labels
import { useScrollReveal } from '../hooks/useScrollReveal';

const STATS = [
  { number: '2,400+', label: 'Families registered' },
  { number: '380+', label: 'Verified babysitters' },
  { number: '98%', label: 'Parent satisfaction rate' },
];

export default function StatsSection() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} className="section-reveal bg-teal-800 py-20 px-[5%]">
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-center">
        {STATS.map(stat => (
          <div key={stat.label}>
            <div className="font-display text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
            <div className="font-body text-sm text-white/70">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
