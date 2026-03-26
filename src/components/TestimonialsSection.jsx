// CareConnect — TestimonialsSection.jsx
// 3-column testimonial card grid with avatars and quote marks
import Avatar from './ui/Avatar';
import { Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const TESTIMONIALS = [
  {
    name: 'Sarah K.',
    role: 'Parent, 2 children, Kampala',
    quote: 'CareConnect made finding a trustworthy babysitter so easy. I feel confident every time I book!',
    rating: 5,
    id: 'sarah3',
    firstName: 'Sarah',
    lastName: 'K.',
  },
  {
    name: 'Amara O.',
    role: 'Babysitter, 4 yrs experience',
    quote: 'The verification process gave me credibility and helped me connect with more families.',
    rating: 5,
    id: 'amara1',
    firstName: 'Amara',
    lastName: 'O.',
  },
  {
    name: 'Patrick M.',
    role: 'Parent, 3 children, Entebbe',
    quote: 'We found the perfect sitter for our family. The messaging and reviews made it easy to decide.',
    rating: 5,
    id: 'patrick2',
    firstName: 'Patrick',
    lastName: 'M.',
  },
];

export default function TestimonialsSection() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} className="section-reveal bg-warm-100 py-20 px-[5%]">
      <div className="text-teal-600 uppercase tracking-[0.08em] font-semibold text-xs mb-2 text-center">LOVED BY FAMILIES & SITTERS</div>
      <h2 className="font-display text-3xl font-bold text-warm-900 mb-3 text-center">What Our Users Say</h2>
      <p className="text-warm-400 text-base mb-12 text-center max-w-2xl mx-auto">Real stories from parents and babysitters who trust CareConnect for safe, reliable childcare connections.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {TESTIMONIALS.map((t, i) => (
          <div key={t.name} className="relative bg-white rounded-2xl shadow-warm-md p-8 flex flex-col items-center text-center">
            {/* Decorative quote mark */}
            <span className="absolute left-6 top-4 text-[5rem] text-teal-100 select-none" aria-hidden>“</span>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(t.rating)].map((_, j) => (
                <Star key={j} size={18} className="text-amber" fill="currentColor" />
              ))}
            </div>
            <blockquote className="italic text-warm-700 mb-6 relative z-10">{t.quote}</blockquote>
            <div className="flex items-center gap-3 mt-auto">
              <Avatar userId={t.id} firstName={t.firstName} lastName={t.lastName} size="sm" />
              <div className="text-left">
                <div className="font-display font-bold text-warm-900 text-base">{t.name}</div>
                <div className="text-warm-400 text-xs">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
