// CareConnect — TrustBadgesSection.jsx
// 4-column trust badges bar with Lucide icons
import { ShieldCheck, Lock, FileCheck2, Zap } from 'lucide-react';
import clsx from 'clsx';

const BADGES = [
  {
    icon: ShieldCheck,
    title: 'Admin-Verified Profiles',
    desc: 'Every sitter manually reviewed',
  },
  {
    icon: Lock,
    title: 'Secure Messaging',
    desc: 'Encrypted, in-platform chat',
  },
  {
    icon: FileCheck2,
    title: 'Document Checked',
    desc: 'ID & CV verified by our team',
  },
  {
    icon: Zap,
    title: 'Real-Time Chat',
    desc: 'Instant WebSocket messaging',
  },
];

export default function TrustBadgesSection() {
  return (
    <section className="bg-white border-y border-warm-200 py-8 px-[5%]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {BADGES.map(({ icon: Icon, title, desc }, i) => (
          <div key={title} className="flex flex-col items-center text-center gap-3">
            <div className={clsx(
              'w-11 h-11 flex items-center justify-center rounded-[12px] bg-teal-50 border border-teal-100 mb-1',
              'text-teal-600'
            )}>
              <Icon size={28} />
            </div>
            <div className="font-semibold text-warm-900 text-base">{title}</div>
            <div className="text-warm-400 text-sm">{desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
