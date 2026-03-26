import { Link } from 'react-router-dom';

const PLATFORM = [
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'Browse Sitters', to: '/sitters' },
  { label: 'Become a Sitter', to: '/signup?sitter=1' },
  { label: 'Admin Login', to: '/admin/login' },
];
const COMPANY = [
  { label: 'About Us', to: '/about' },
  { label: 'Safety', to: '/#safety' },
  { label: 'Contact', to: '/contact' },
];
const LEGAL = [
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Privacy Policy', to: '/privacy' },
];

export default function Footer() {
  return (
    <footer className="bg-warm-900 text-white pt-12 pb-8 px-[5%] mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        {/* Brand */}
        <div>
          <div className="font-display text-2xl font-bold mb-2">CareConnect</div>
          <div className="text-white/70 text-base mb-4">Connecting families with trusted, admin-verified babysitters for safe, reliable care.</div>
        </div>
        {/* Platform */}
        <div>
          <h4 className="uppercase tracking-[0.08em] text-white/90 text-xs font-semibold mb-3">Platform</h4>
          <ul className="space-y-2">
            {PLATFORM.map(link => (
              <li key={link.label}>
                <Link to={link.to} className="text-white/55 hover:text-white transition">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Company */}
        <div>
          <h4 className="uppercase tracking-[0.08em] text-white/90 text-xs font-semibold mb-3">Company</h4>
          <ul className="space-y-2">
            {COMPANY.map(link => (
              <li key={link.label}>
                <Link to={link.to} className="text-white/55 hover:text-white transition">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Legal */}
        <div>
          <h4 className="uppercase tracking-[0.08em] text-white/90 text-xs font-semibold mb-3">Legal</h4>
          <ul className="space-y-2">
            {LEGAL.map(link => (
              <li key={link.label}>
                <Link to={link.to} className="text-white/55 hover:text-white transition">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between text-white/50 text-sm">
        <span>© {new Date().getFullYear()} CareConnect. All rights reserved.</span>
        <span className="mt-2 md:mt-0">Empowering safe, trusted childcare connections.</span>
      </div>
    </footer>
  );
}
