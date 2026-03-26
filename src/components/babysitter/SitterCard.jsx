// CareConnect Babysitter — SitterCard.jsx
// Used in Browse Sitters grid and profile teasers
import Card from '../ui/Card';
import Avatar from '../ui/Avatar';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import clsx from 'clsx';
import { Star, MessageCircle } from 'lucide-react';

export default function SitterCard({
  sitter,
  onMessage,
  className = '',
}) {
  // sitter: { id, firstName, lastName, city, rate, avatarUrl, verified, rating, reviews, tags }
  return (
    <Card
      className={clsx(
        'group transition-all duration-200 hover:-translate-y-1 hover:shadow-warm-lg hover:border-teal-200 rounded-2xl overflow-hidden',
        className
      )}
    >
      <div className="h-[180px] w-full flex items-center justify-center bg-gradient-to-br from-teal-700 to-teal-400">
        <Avatar
          avatarUrl={sitter.avatarUrl}
          userId={sitter.id}
          firstName={sitter.firstName}
          lastName={sitter.lastName}
          size="xl"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-1">
          <div className="font-display text-lg font-semibold text-warm-900">
            {sitter.firstName} {sitter.lastName}
          </div>
          <div className="font-semibold text-teal-600 text-base">
            ${sitter.rate}/hr
          </div>
        </div>
        <div className="flex items-center gap-1 mb-2">
          <Star className="text-amber" size={16} fill="currentColor" />
          <span className="font-medium text-warm-700 text-sm">
            {sitter.rating.toFixed(1)}
          </span>
          <span className="text-warm-400 text-xs">({sitter.reviews} reviews)</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {sitter.tags?.slice(0, 4).map(tag => (
            <span key={tag} className="bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-4">
          {sitter.verified && <Badge status="verified">Verified</Badge>}
          <Button
            variant="primary"
            size="sm"
            className="ml-auto flex items-center gap-1"
            onClick={onMessage}
          >
            <MessageCircle size={16} /> Message
          </Button>
        </div>
      </div>
    </Card>
  );
}
