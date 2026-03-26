// CareConnect — CTASection.jsx
// Gradient banner with headline, subtext, and two CTAs
import Button from './ui/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CTASection() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} className="section-reveal py-24 px-[5%] text-center bg-gradient-to-br from-teal-900 to-teal-700 relative overflow-hidden">
      {/* Radial glow overlays */}
      <div className="absolute left-[30%] top-1/2 -translate-y-1/2 w-[400px] h-[300px] pointer-events-none" style={{backgroundImage:'radial-gradient(ellipse at center, rgba(45,212,191,0.1), transparent 60%)'}} />
      <div className="absolute left-[70%] top-1/2 -translate-y-1/2 w-[400px] h-[300px] pointer-events-none" style={{backgroundImage:'radial-gradient(ellipse at center, rgba(20,184,166,0.08), transparent 60%)'}} />
      <div className="relative z-10">
        <div className="text-white/60 uppercase tracking-[0.08em] font-semibold text-xs mb-2">Ready to get started?</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Find Your Perfect Sitter Today</h2>
        <p className="text-white/75 text-base mb-8 max-w-xl mx-auto">Join thousands of families and babysitters using CareConnect for safe, reliable childcare connections.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button variant="white" size="lg" className="min-w-[200px]">Find a Babysitter</Button>
          <Button variant="ghost" size="lg" className="min-w-[200px] border border-white text-white hover:bg-white/10">Become a Sitter</Button>
        </div>
      </div>
    </section>
  );
}
