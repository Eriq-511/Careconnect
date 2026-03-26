

import React from 'react';
import { Link } from 'react-router-dom';
// Synergy Landing Page — HTML/CSS converted to React JSX
export default function LandingPage() {
  const [tab, setTab] = React.useState(0);

  React.useEffect(() => {
    window.switchTab = setTab;
    return () => { delete window.switchTab; };
  }, []);

  return (
    <>
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-[rgba(253,250,247,0.92)] backdrop-blur-[12px] border-b border-warm-200 px-[5%] flex items-center justify-between h-[68px]">
        <Link to="/" className="logo flex items-center gap-2 no-underline">
          <div className="logo-mark w-[38px] h-[38px] rounded-[12px] bg-gradient-to-br from-primary-700 to-primary-500 flex items-center justify-center font-display font-bold text-white text-[16px] tracking-[-0.5px]">CC</div>
          <span className="logo-text font-display text-[1.2rem] font-semibold text-primary-800">CareConnect</span>
        </Link>
        <ul className="nav-links flex items-center gap-7 list-none">
          <li><a href="#how" className="text-[0.875rem] font-medium text-warm-700 no-underline transition-colors hover:text-primary-600">How It Works</a></li>
          <li><Link to="/about" className="text-[0.875rem] font-medium text-warm-700 no-underline transition-colors hover:text-primary-600">About</Link></li>
          <li><Link to="/safety" className="text-[0.875rem] font-medium text-warm-700 no-underline transition-colors hover:text-primary-600">Safety</Link></li>
        </ul>
        <div className="nav-ctas flex gap-2 items-center">
          <Link to="/login" className="btn-ghost px-4 py-2 border border-warm-200 rounded-[10px] text-[0.875rem] font-medium text-warm-700 bg-transparent cursor-pointer transition-all hover:border-primary-600 hover:text-primary-600">Log In</Link>
          <Link to="/signup" className="btn-primary px-5 py-2 bg-primary-600 text-white border-none rounded-[10px] text-[0.875rem] font-semibold cursor-pointer transition-all font-body hover:bg-primary-700 hover:-translate-y-0.5 hover:shadow-lg">Get Started</Link>
        </div>
      </nav>
      {/* ...existing code... */}

      {/* HERO */}
      <div style={{ background: 'var(--warm-50)', overflow: 'hidden' }}>
        <div className="hero grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center max-w-[1200px] mx-auto py-20 px-[5%]">
          <div className="hero-content">
            <div className="hero-eyebrow inline-flex items-center gap-2 bg-primary-50 border border-primary-100 text-primary-700 text-[0.78rem] font-semibold tracking-[0.06em] uppercase px-4 py-2 rounded-full mb-6">
              Admin-Verified Sitters Only
            </div>
            <h1 className="font-display text-[clamp(2.2rem,4vw,3.4rem)] font-bold leading-[1.18] text-warm-900 mb-5">
              Trusted Care for Your <em className="text-primary-600 italic not-italic">Little Ones</em>
            </h1>
            <p className="text-[1.05rem] leading-[1.7] text-warm-700 mb-9 max-w-[460px]">
              Connect with professionally vetted babysitters who've been personally reviewed and approved by our team. Every sitter, every time.
            </p>
            <div className="hero-ctas flex gap-4 flex-wrap">
              <Link to="/directory" className="btn-hero-primary px-7 py-3 bg-primary-600 text-white border-none rounded-[14px] text-[1rem] font-semibold cursor-pointer transition-all font-body shadow-cta hover:bg-primary-700 hover:-translate-y-0.5 hover:shadow-lg">Find a Babysitter →</Link>
              <Link to="/signup" className="btn-hero-secondary px-7 py-3 border-2 border-warm-200 bg-white text-warm-900 rounded-[14px] text-[1rem] font-medium cursor-pointer transition-all font-body hover:border-primary-400 hover:text-primary-700">Become a Sitter</Link>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-800 to-primary-400 border-2 border-white -ml-2 flex items-center justify-center text-[0.7rem] font-bold text-white font-display">A</div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-800 to-amber-400 border-2 border-white -ml-2 flex items-center justify-center text-[0.7rem] font-bold text-white font-display">M</div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-900 to-blue-400 border-2 border-white -ml-2 flex items-center justify-center text-[0.7rem] font-bold text-white font-display">J</div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-900 to-purple-400 border-2 border-white -ml-2 flex items-center justify-center text-[0.7rem] font-bold text-white font-display">P</div>
              </div>
              <div>
                <div className="text-amber text-[0.8rem]">★★★★★</div>
                <div className="text-[0.78rem] text-warm-400">Trusted by <strong className="text-warm-700">2,400+</strong> families</div>
              </div>
            </div>
          </div>
          {/* ...existing hero visual, sitter card, and mini-cards can be implemented as needed... */}
        </div>
      </div>

      {/* TRUST STRIP */}
      <div className="trust-strip bg-white border-y border-warm-200 py-8 px-[5%]">
        <div className="trust-inner max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="trust-item flex items-center gap-3">
            <div className="trust-icon w-11 h-11 rounded-[12px] bg-primary-50 border border-primary-100 flex items-center justify-center text-xl">✓</div>
            <div className="trust-text"><strong className="block text-[0.875rem] font-semibold text-warm-900">Admin-Verified Profiles</strong><span className="text-[0.78rem] text-warm-400">Every sitter manually reviewed</span></div>
          </div>
          <div className="trust-item flex items-center gap-3">
            <div className="trust-icon w-11 h-11 rounded-[12px] bg-primary-50 border border-primary-100 flex items-center justify-center text-xl">🔒</div>
            <div className="trust-text"><strong className="block text-[0.875rem] font-semibold text-warm-900">Secure Messaging</strong><span className="text-[0.78rem] text-warm-400">Encrypted, in-platform messaging</span></div>
          </div>
          <div className="trust-item flex items-center gap-3">
            <div className="trust-icon w-11 h-11 rounded-[12px] bg-primary-50 border border-primary-100 flex items-center justify-center text-xl">📄</div>
            <div className="trust-text"><strong className="block text-[0.875rem] font-semibold text-warm-900">Document Checked</strong><span className="text-[0.78rem] text-warm-400">ID & CV verified by our team</span></div>
          </div>
          <div className="trust-item flex items-center gap-3">
            <div className="trust-icon w-11 h-11 rounded-[12px] bg-primary-50 border border-primary-100 flex items-center justify-center text-xl">💬</div>
            <div className="trust-text"><strong className="block text-[0.875rem] font-semibold text-warm-900">Real-Time Messaging</strong><span className="text-[0.78rem] text-warm-400">Instant in-app messaging</span></div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div id="how" className="section py-20 px-[5%] max-w-[1200px] mx-auto">
        <div className="section-eyebrow text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-primary-600 mb-3">Simple process</div>
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-bold text-warm-900 mb-4">How CareConnect Works</h2>
        <p className="section-sub text-base text-warm-700 leading-[1.7] max-w-[560px] mb-14">Whether you're a parent looking for trusted care or a babysitter building your career, we've made it straightforward.</p>
        <div className="how-tabs flex gap-0 mb-12 border border-warm-200 rounded-[14px] overflow-hidden w-fit bg-white">
          <button className={`how-tab px-7 py-3 text-[0.875rem] font-medium border-none bg-transparent cursor-pointer text-warm-400 transition-all font-body ${tab === 0 ? 'bg-primary-600 text-white font-semibold' : 'hover:text-primary-600'}`} onClick={() => setTab(0)}>For Parents</button>
          <button className={`how-tab px-7 py-3 text-[0.875rem] font-medium border-none bg-transparent cursor-pointer text-warm-400 transition-all font-body ${tab === 1 ? 'bg-primary-600 text-white font-semibold' : 'hover:text-primary-600'}`} onClick={() => setTab(1)}>For Babysitters</button>
        </div>
        <div className="steps grid grid-cols-1 md:grid-cols-3 gap-7">
          {(tab === 0 ? [
            {
              num: 1,
              title: 'Create Your Account',
              desc: `Sign up in minutes. Tell us about your family, your children's ages, and your childcare needs and preferences.`
            },
            {
              num: 2,
              title: 'Browse Verified Sitters',
              desc: 'Search our curated directory of admin-approved babysitters. Filter by location, rates, availability, and specialties.'
            },
            {
              num: 3,
              title: 'Message & Hire',
              desc: `Initiate a real-time conversation directly from a sitter's profile. View their documents, rates, and full availability.`
            }
          ] : [
            {
              num: 1,
              title: 'Build Your Profile',
              desc: 'Create a professional portfolio with your photo, experience, certifications, rates, and upload your ID and CV.'
            },
            {
              num: 2,
              title: 'Get Verified',
              desc: 'Our admin team reviews your documents. Approved sitters appear in parent searches within 24–48 hours.'
            },
            {
              num: 3,
              title: 'Start Earning',
              desc: 'Receive real-time messages from interested parents. Track who views your profile and manage your availability.'
            }
          ]).map((step, i, arr) => (
            <div key={step.title} className="step relative flex flex-col items-center text-center">
              <div className="step-num w-12 h-12 rounded-[14px] bg-gradient-to-br from-primary-600 to-primary-400 flex items-center justify-center font-display text-2xl font-bold text-white mb-5">{step.num}</div>
              {i < arr.length - 1 && <div className="step-connector hidden md:block absolute top-6 right-[-40px] w-20 h-1 bg-gradient-to-r from-primary-200 to-transparent rounded-full" />}
              <h3 className="font-display text-lg font-semibold text-warm-900 mb-2">{step.title}</h3>
              <p className="text-[0.875rem] text-warm-700 leading-[1.65]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SITTER GRID */}
      <div className="sitter-grid-section bg-white py-20 px-[5%]">
        <div className="sitter-grid-inner max-w-[1200px] mx-auto">
          <div className="grid-header flex justify-between items-end mb-10">
            <div>
              <div className="section-eyebrow text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-primary-600 mb-2">Verified professionals</div>
              <h2 className="font-display text-3xl font-bold text-warm-900">Meet Our Top Sitters</h2>
            </div>
            <Link to="/directory" className="btn-ghost h-fit px-4 py-2 border border-warm-200 rounded-[10px] text-[0.9rem] font-medium text-warm-700 bg-transparent cursor-pointer transition-all hover:border-primary-600 hover:text-primary-600">View All Sitters →</Link>
          </div>
          <div className="sitter-cards grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sitter 1 */}
            <div className="sitter-listing bg-white border border-warm-200 rounded-[20px] overflow-hidden cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary-200">
              <div className="listing-photo a h-[180px] flex items-center justify-center font-display text-5xl font-bold text-white bg-gradient-to-br from-primary-800 to-primary-500">A</div>
              <div className="listing-body p-5">
                <div className="listing-top flex justify-between items-start mb-2">
                  <div>
                    <div className="listing-name font-display text-lg font-semibold text-warm-900">Amina N.</div>
                    <div className="listing-meta text-[0.78rem] text-warm-400 mb-2">📍 Kampala · 4 yrs exp</div>
                  </div>
                  <div className="listing-rate text-[0.9rem] font-semibold text-primary-600">UGX 30,000/hr</div>
                </div>
                <div className="listing-tags flex gap-2 flex-wrap mb-3">
                  <span className="skill-tag bg-warm-100 text-warm-700 text-xs font-medium px-2 py-1 rounded-full border border-warm-200">Toddlers</span>
                  <span className="skill-tag bg-warm-100 text-warm-700 text-xs font-medium px-2 py-1 rounded-full border border-warm-200">First Aid</span>
                  <span className="skill-tag bg-warm-100 text-warm-700 text-xs font-medium px-2 py-1 rounded-full border border-warm-200">Weekdays</span>
                </div>
                <div className="listing-footer flex items-center justify-between">
                  <div>
                    <span className="listing-stars text-amber text-sm">★★★★★</span>
                    <span className="listing-reviews text-[0.75rem] text-warm-400 ml-1">(32 reviews)</span>
                  </div>
                  <div className="verified-badge inline-flex items-center gap-1 bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full"><span>✓</span>Verified</div>
                </div>
              </div>
            </div>
            {/* Sitter 2 */}
            <div className="sitter-listing bg-white border border-warm-200 rounded-[20px] overflow-hidden cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary-200">
              <div className="listing-photo b h-[180px] flex items-center justify-center font-display text-5xl font-bold text-white bg-gradient-to-br from-amber-800 to-amber-400">M</div>
              <div className="listing-body p-5">
                <div className="listing-top flex justify-between items-start mb-2">
                  <div>
                    <div className="listing-name font-display text-lg font-semibold text-warm-900">Brian K.</div>
                    <div className="listing-meta text-[0.78rem] text-warm-400 mb-2">📍 Kampala · 6 yrs exp</div>
                  </div>
                  <div className="listing-rate text-[0.9rem] font-semibold text-primary-600">UGX 40,000/hr</div>
                </div>
                <div className="listing-tags flex gap-2 flex-wrap mb-3">
                  <span className="skill-tag bg-warm-100 text-warm-700 text-xs font-medium px-2 py-1 rounded-full border border-warm-200">School-age</span>
                  <span className="skill-tag bg-warm-100 text-warm-700 text-xs font-medium px-2 py-1 rounded-full border border-warm-200">CPR Cert</span>
                  <span className="skill-tag bg-warm-100 text-warm-700 text-xs font-medium px-2 py-1 rounded-full border border-warm-200">Flexible</span>
                </div>
                <div className="listing-footer flex items-center justify-between">
                  <div>
                    <span className="listing-stars text-amber text-sm">★★★★★</span>
                    <span className="listing-reviews text-[0.75rem] text-warm-400 ml-1">(47 reviews)</span>
                  </div>
                  <div className="verified-badge inline-flex items-center gap-1 bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full"><span>✓</span>Verified</div>
                </div>
              </div>
            </div>
            {/* Sitter 3 */}
            <div className="sitter-listing bg-white border border-warm-200 rounded-[20px] overflow-hidden cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary-200">
              <div className="listing-photo c h-[180px] flex items-center justify-center font-display text-5xl font-bold text-white bg-gradient-to-br from-blue-900 to-blue-400">J</div>
              <div className="listing-body p-5">
                <div className="listing-top flex justify-between items-start mb-2">
                  <div>
                    <div className="listing-name font-display text-lg font-semibold text-warm-900">Sharon A.</div>
                    <div className="listing-meta text-[0.78rem] text-warm-400 mb-2">📍 Entebbe · 3 yrs exp</div>
                  </div>
                  <div className="listing-rate text-[0.9rem] font-semibold text-primary-600">UGX 25,000/hr</div>
                </div>
                <div className="listing-tags flex gap-2 flex-wrap mb-3">
                  <span className="skill-tag bg-warm-100 text-warm-700 text-xs font-medium px-2 py-1 rounded-full border border-warm-200">Infants</span>
                  <span className="skill-tag bg-warm-100 text-warm-700 text-xs font-medium px-2 py-1 rounded-full border border-warm-200">Weekends</span>
                  <span className="skill-tag bg-warm-100 text-warm-700 text-xs font-medium px-2 py-1 rounded-full border border-warm-200">Multilingual</span>
                </div>
                <div className="listing-footer flex items-center justify-between">
                  <div>
                    <span className="listing-stars text-amber text-sm">★★★★☆</span>
                    <span className="listing-reviews text-[0.75rem] text-warm-400 ml-1">(18 reviews)</span>
                  </div>
                  <div className="verified-badge inline-flex items-center gap-1 bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full"><span>✓</span>Verified</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 p-7 bg-warm-100 rounded-[16px] border border-dashed border-warm-200">
            <p className="text-[0.9rem] text-warm-400 mb-3">Sign up to view full profiles, rates, and start conversations</p>
            <Link to="/signup" className="btn-hero-primary px-7 py-3 text-[0.9rem] bg-primary-600 text-white border-none rounded-[14px] font-semibold cursor-pointer transition-all font-body shadow-cta hover:bg-primary-700 hover:-translate-y-0.5 hover:shadow-lg">Create Free Account →</Link>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="testimonials py-20 px-[5%] bg-warm-100">
        <div className="testimonials-inner max-w-[1100px] mx-auto">
          <p className="section-eyebrow text-center text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-primary-600 mb-2">What parents say</p>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-bold text-warm-900 text-center mb-2">Families Love CareConnect</h2>
          <p className="testimonials-sub text-center text-warm-700 mb-12">Real stories from real families who found their perfect match.</p>
          <div className="testimonial-grid grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="testimonial-card bg-white rounded-[20px] p-7 border border-warm-200 relative overflow-hidden">
              <div className="testimonial-stars text-amber mb-4 text-[0.9rem]">★★★★★</div>
              <p className="testimonial-text text-[0.9rem] leading-[1.7] text-warm-700 mb-5 italic">"I was sceptical at first, but the admin verification process gave me real confidence. The sitter we found has been with us for 4 months now."</p>
              <div className="testimonial-author flex items-center gap-3">
                <div className="t-avatar a w-10 h-10 rounded-[12px] flex items-center justify-center font-display font-bold text-white text-[0.9rem] bg-gradient-to-br from-primary-800 to-primary-500">NA</div>
                <div><div className="t-name text-[0.875rem] font-semibold text-warm-900">Nabirye A.</div><div className="t-role text-[0.75rem] text-warm-400">Parent of 2 · Kampala</div></div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="testimonial-card bg-white rounded-[20px] p-7 border border-warm-200 relative overflow-hidden">
              <div className="testimonial-stars text-amber mb-4 text-[0.9rem]">★★★★★</div>
              <p className="testimonial-text text-[0.9rem] leading-[1.7] text-warm-700 mb-5 italic">"The profile view tracking is brilliant — I know exactly when parents are interested. Messages come through instantly and the platform is so clean."</p>
              <div className="testimonial-author flex items-center gap-3">
                <div className="t-avatar b w-10 h-10 rounded-[12px] flex items-center justify-center font-display font-bold text-white text-[0.9rem] bg-gradient-to-br from-purple-900 to-purple-400">BK</div>
                <div><div className="t-name text-[0.875rem] font-semibold text-warm-900">Brian K.</div><div className="t-role text-[0.75rem] text-warm-400">Babysitter · 4 yrs exp</div></div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="testimonial-card bg-white rounded-[20px] p-7 border border-warm-200 relative overflow-hidden">
              <div className="testimonial-stars text-amber mb-4 text-[0.9rem]">★★★★★</div>
              <p className="testimonial-text text-[0.9rem] leading-[1.7] text-warm-700 mb-5 italic">"After years of relying on word-of-mouth, this is a game-changer. Knowing every sitter has been document-verified is exactly what I needed."</p>
              <div className="testimonial-author flex items-center gap-3">
                <div className="t-avatar c w-10 h-10 rounded-[12px] flex items-center justify-center font-display font-bold text-white text-[0.9rem] bg-gradient-to-br from-amber-800 to-amber-400">SA</div>
                <div><div className="t-name text-[0.875rem] font-semibold text-warm-900">Sharon A.</div><div className="t-role text-[0.75rem] text-warm-400">Parent of 3 · Entebbe</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="stats-section py-20 px-[5%] bg-primary-800">
        <div className="stats-inner max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <span className="stat-number font-display text-5xl font-bold text-white block mb-2">2,400+</span>
            <span className="stat-label text-[0.875rem] text-white/70">Families registered</span>
          </div>
          <div>
            <span className="stat-number font-display text-5xl font-bold text-white block mb-2">380+</span>
            <span className="stat-label text-[0.875rem] text-white/70">Verified babysitters</span>
          </div>
          <div>
            <span className="stat-number font-display text-5xl font-bold text-white block mb-2">98%</span>
            <span className="stat-label text-[0.875rem] text-white/70">Parent satisfaction rate</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section py-24 px-[5%] bg-gradient-to-br from-primary-900 to-primary-700 text-center relative overflow-hidden">
        <div className="cta-inner relative max-w-[700px] mx-auto">
          <p className="section-eyebrow text-white/60 text-center mb-4">Ready to get started?</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Find Your Perfect Sitter Today</h2>
          <p className="text-white/75 text-base mb-8 max-w-xl mx-auto">Join thousands of families who've discovered trusted, verified childcare through CareConnect. Setup takes less than 5 minutes.</p>
          <div className="cta-buttons flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/directory" className="btn-white px-8 py-4 bg-white text-primary-800 border-none rounded-[14px] text-[1rem] font-semibold cursor-pointer transition-all font-body hover:-translate-y-0.5 hover:shadow-lg">Find a Babysitter</Link>
            <Link to="/signup" className="btn-outline-white px-8 py-4 bg-transparent text-white border-2 border-white/40 rounded-[14px] text-[1rem] font-medium cursor-pointer transition-all font-body hover:border-white hover:bg-white/10">Become a Sitter</Link>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-warm-900 pt-12 pb-8 px-[5%] mt-16 text-white/60">
        <div className="footer-inner max-w-[1100px] mx-auto">
          <div className="footer-top flex flex-col md:flex-row justify-between mb-10 gap-8">
            <div className="footer-brand max-w-[280px]">
              <div className="footer-logo font-display text-[1.3rem] font-bold text-white mb-3">CareConnect</div>
              <p className="footer-desc text-[0.83rem] leading-[1.6]">Connecting families with trusted, admin-verified babysitters for safe, reliable care.</p>
            </div>
            <div className="footer-col">
              <h4 className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-white/90 mb-4">Platform</h4>
              <a href="#how" className="block text-[0.83rem] text-white/55 no-underline mb-2 transition-colors hover:text-white">How It Works</a>
              <Link to="/directory" className="block text-[0.83rem] text-white/55 no-underline mb-2 transition-colors hover:text-white">Browse Sitters</Link>
              <Link to="/signup" className="block text-[0.83rem] text-white/55 no-underline mb-2 transition-colors hover:text-white">Become a Sitter</Link>
              <Link to="/admin/dashboard" className="block text-[0.83rem] text-white/55 no-underline mb-2 transition-colors hover:text-white">Admin Login</Link>
            </div>
            <div className="footer-col">
              <h4 className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-white/90 mb-4">Company</h4>
              <Link to="/about" className="block text-[0.83rem] text-white/55 no-underline mb-2 transition-colors hover:text-white">About Us</Link>
              <Link to="/contact" className="block text-[0.83rem] text-white/55 no-underline mb-2 transition-colors hover:text-white">Contact</Link>
            </div>
            <div className="footer-col">
              <h4 className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-white/90 mb-4">Legal</h4>
              <Link to="/terms" className="block text-[0.83rem] text-white/55 no-underline mb-2 transition-colors hover:text-white">Terms of Service</Link>
              <Link to="/privacy" className="block text-[0.83rem] text-white/55 no-underline mb-2 transition-colors hover:text-white">Privacy Policy</Link>
            </div>
          </div>
          <div className="footer-bottom border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-[0.78rem]">
            <span>© 2026 CareConnect. All rights reserved.</span>
            <span>Empowering safe, trusted childcare connections.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
