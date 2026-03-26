// CareConnect — BabysitterGridSection.jsx
// Teaser grid of 3 sitter cards + signup prompt bar
import SitterCard from './babysitter/SitterCard';
import Button from './ui/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SITTERS = [
  {
    id: 'amara1', firstName: 'Amara', lastName: 'O.', city: 'Kampala', rate: 9, avatarUrl: '', verified: true, rating: 4.9, reviews: 23, tags: ['First Aid', 'CPR', '4+ yrs exp', 'Early Ed.']
  },
  {
    id: 'patrick2', firstName: 'Patrick', lastName: 'M.', city: 'Entebbe', rate: 10, avatarUrl: '', verified: true, rating: 4.8, reviews: 17, tags: ['Infant Care', 'CPR', 'Flexible', 'Bilingual']
  },
  {
    id: 'sarah3', firstName: 'Sarah', lastName: 'K.', city: 'Kampala', rate: 11, avatarUrl: '', verified: true, rating: 5.0, reviews: 31, tags: ['Special Needs', 'First Aid', '5+ yrs exp', 'Pet Friendly']
  },
];

export default function BabysitterGridSection() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} className="section-reveal py-20 px-[5%] bg-transparent">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-warm-900">Featured Babysitters</h2>
        <Button variant="ghost" size="md">View All Sitters →</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {SITTERS.map(sitter => (
          <SitterCard key={sitter.id} sitter={sitter} />
        ))}
      </div>
      {/* Signup prompt bar */}
      <div className="mt-8 border-2 border-dashed border-warm-200 bg-warm-100 rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-warm-700 text-base font-medium">Sign up to view full profiles, rates, and start conversations</span>
        <Button variant="primary" size="md">Create Free Account →</Button>
      </div>
    </section>
  );
}
