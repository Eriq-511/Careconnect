// CareConnect — HeroSection.jsx
// Two-column hero with badge, headline, CTA, social proof, and floating sitter card
import Button from './ui/Button';
import Avatar from './ui/Avatar';
import Badge from './ui/Badge';
import Card from './ui/Card';
import { Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const DUMMY_SITTER = {
  id: 'amara1',
  firstName: 'Amara',
  lastName: 'O.',
  city: 'Kampala',
  rate: 9,
  avatarUrl: '',
  verified: true,
  rating: 4.9,
  reviews: 23,
  tags: ['First Aid', 'CPR', '4+ yrs exp', 'Early Ed.'],
  availability: [1,2,3,4,5],
};

export default function HeroSection() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} className="section-reveal relative flex flex-col md:flex-row items-center justify-between min-h-[70vh] py-16 md:py-24 px-4 md:px-[5%] bg-warm-50 overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none opacity-60" style={{backgroundImage:'radial-gradient(circle, var(--warm-200) 1px, transparent 1px)',backgroundSize:'24px 24px'}} />
      {/* Left column */}
      <div className="relative z-10 max-w-xl flex-1">
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-teal-50 border border-teal-200 rounded-full animate-pulse">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-teal-700 text-xs font-semibold">Admin-Verified Sitters Only</span>
        </div>
        <h1 className="font-display text-[clamp(2.2rem,4vw,3.4rem)] font-bold text-warm-900 leading-tight mb-4">
          Trusted Care for Your <span className="text-teal-600 italic">Little Ones</span>
        </h1>
        <p className="text-base md:text-lg text-warm-700 mb-7 leading-relaxed max-w-md">
          Find, vet, and message trusted babysitters in your area. Every sitter is admin-verified for your peace of mind.
        </p>
        <div className="flex gap-4 mb-7">
          <Button variant="primary" size="lg">Find a Babysitter →</Button>
          <Button variant="secondary" size="lg">Become a Sitter</Button>
        </div>
        {/* Social proof strip */}
        <div className="flex items-center gap-3 mb-2">
          {/* Overlapping avatars */}
          <div className="flex -space-x-2">
            {[0,1,2,3].map(i => (
              <Avatar key={i} userId={String.fromCharCode(65+i)} firstName={['S','A','P','J'][i]} lastName={['K','O','M','L'][i]} size="sm" />
            ))}
          </div>
          <span className="text-warm-700 text-sm font-medium">Trusted by 2,400+ families</span>
          <span className="flex items-center gap-1 text-amber font-semibold text-sm">
            <Star size={16} fill="currentColor" /> 4.9/5
          </span>
        </div>
      </div>
      {/* Right column — floating sitter card */}
      <div className="relative z-10 flex-1 flex items-center justify-center mt-12 md:mt-0">
        <div className="relative" style={{animation:'floatA 6s ease-in-out infinite'}}>
          <Card className="w-[340px] p-6 shadow-warm-lg border-teal-200">
            <div className="flex flex-col items-center">
              <Avatar userId={DUMMY_SITTER.id} firstName={DUMMY_SITTER.firstName} lastName={DUMMY_SITTER.lastName} size="xl" />
              <div className="mt-3 font-display text-lg font-semibold text-warm-900">{DUMMY_SITTER.firstName} {DUMMY_SITTER.lastName}</div>
              <div className="text-warm-400 text-sm mb-1">{DUMMY_SITTER.city}</div>
              <Badge status="verified" className="mb-2">Verified</Badge>
              <div className="flex items-center gap-1 mb-2">
                <Star className="text-amber" size={16} fill="currentColor" />
                <span className="font-medium text-warm-700 text-sm">{DUMMY_SITTER.rating}</span>
                <span className="text-warm-400 text-xs">({DUMMY_SITTER.reviews} reviews)</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {DUMMY_SITTER.tags.map(tag => (
                  <span key={tag} className="bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full text-xs font-medium">{tag}</span>
                ))}
              </div>
              {/* Weekly availability pills */}
              <div className="flex gap-1 mb-3">
                {[0,1,2,3,4,5,6].map(d => (
                  <span key={d} className={d===0||d===6 ? 'bg-warm-100 text-warm-400' : 'bg-teal-100 text-teal-700'} style={{padding:'0.25rem 0.7rem',borderRadius:12,fontSize:13}}>
                    {['S','M','T','W','T','F','S'][d]}
                  </span>
                ))}
              </div>
              <Button variant="primary" size="md" className="w-full">Message Amara</Button>
            </div>
          </Card>
          {/* Floating mini-cards */}
          <div className="absolute -left-24 bottom-2 animate-[floatB_7s_ease-in-out_infinite]">
            <Card className="flex items-center gap-2 px-4 py-2 text-sm shadow-warm-md">
              <span className="text-info">👁</span> Profile views — <span className="font-semibold text-warm-900">+24 this week</span>
            </Card>
          </div>
          <div className="absolute -right-24 bottom-8 animate-[floatB_5s_ease-in-out_infinite]">
            <Card className="flex items-center gap-2 px-4 py-2 text-sm shadow-warm-md">
              <span className="text-teal-600">✉</span> New message — <span className="font-semibold text-warm-900">Sarah K. messaged you</span>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
