import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import Button from './ui/Button';
import clsx from 'clsx';

const NAV_LINKS = [
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'Safety', href: '/#safety' },
];

export default function Navbar() {
  const user = useAuthStore((s) => s.user);
  const role = user?.role?.toLowerCase();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Auth-based nav
  const dashboardLink =
    user && role === 'parent' ? '/parent/dashboard'
    : user && role === 'babysitter' ? '/babysitter/dashboard'
    : user && role === 'admin' ? '/admin/dashboard'
    : null;

  return (
    <nav
      className={clsx(
        'sticky top-0 z-50 w-full transition-all',
        'backdrop-blur-xl',
        'border-b',
        scrolled ? 'bg-[rgba(253,250,247,0.98)] border-warm-200/80 shadow-warm-sm' : 'bg-[rgba(253,250,247,0.92)] border-warm-200/50'
      )}
      style={{ height: 68, padding: '0 5%' }}
    >
      <div className="flex items-center justify-between h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-700 to-teal-500 flex items-center justify-center font-display font-bold text-white text-base">
            CC
          </div>
          <span className="font-display text-xl font-semibold text-teal-800">CareConnect</span>
        </Link>
        {/* Desktop nav links */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-warm-700 hover:text-teal-700 transition"
            >
              {link.label}
            </a>
          ))}
          {dashboardLink && (
            <Link to={dashboardLink} className="text-sm font-medium text-warm-700 hover:text-teal-700 transition">Dashboard</Link>
          )}
        </div>
        {/* CTAs */}
        <div className="hidden md:flex gap-3 items-center">
          {user ? (
            <Button variant="ghost" size="sm" onClick={() => navigate('/messages')}>Messages</Button>
          ) : (
            <>
              <Button variant="ghost" size="sm" onClick={() => navigate('/login')}>Log In</Button>
              <Button variant="primary" size="sm" onClick={() => navigate('/signup')}>Get Started</Button>
            </>
          )}
        </div>
        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg hover:bg-warm-100 transition"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-6 h-0.5 bg-warm-700 mb-1" />
          <span className="block w-6 h-0.5 bg-warm-700 mb-1" />
          <span className="block w-6 h-0.5 bg-warm-700" />
        </button>
        {/* Mobile menu overlay */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 bg-warm-900/80 flex flex-col items-center justify-center">
            <button
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
            <nav className="flex flex-col gap-8 text-center">
              {NAV_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-lg font-semibold text-white hover:text-teal-400 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              {dashboardLink && (
                <Link to={dashboardLink} className="text-lg font-semibold text-white hover:text-teal-400 transition" onClick={() => setMobileOpen(false)}>Dashboard</Link>
              )}
              {user ? (
                <Button variant="ghost" size="lg" onClick={() => { setMobileOpen(false); navigate('/messages'); }} className="w-full">Messages</Button>
              ) : (
                <>
                  <Button variant="ghost" size="lg" onClick={() => { setMobileOpen(false); navigate('/login'); }} className="w-full">Log In</Button>
                  <Button variant="primary" size="lg" onClick={() => { setMobileOpen(false); navigate('/signup'); }} className="w-full">Get Started</Button>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
}
