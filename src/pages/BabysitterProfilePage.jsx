import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { api } from '../api/api';
import NotificationBanner from '../components/NotificationBanner';

const schema = z.object({
  name: z.string().min(1).max(100),
  bio: z.string().max(255).optional(),
});

export default function BabysitterProfilePage() {
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
  });
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');
  // Dummy sitter data for visual structure
  const sitter = {
    id: 'amara1',
    firstName: 'Amara',
    lastName: 'O.',
    city: 'Kampala',
    country: 'Uganda',
    verified: true,
    rating: 4.9,
    reviews: 23,
     rate: 30000,
    experience: 4,
    tags: ['First Aid', 'CPR', '4+ yrs exp', 'Early Ed.'],
    payment: ['Mobile Money', 'Cash'],
    documents: { id: true, cv: true },
    languages: ['English', 'Luganda'],
    avatarUrl: '',
     bio: 'Experienced babysitter with a passion for early childhood development.',
  };

  useEffect(() => {
    api.get('/babysitters/me').then(res => {
      setValue('name', res.data.name || '');
      setValue('bio', res.data.bio || '');
    });
  }, [setValue]);

  const onSubmit = async (data) => {
    setError(''); setSuccess('');
    try {
      await api.put('/babysitters/me', data);
      setSuccess('Profile updated!');
    } catch (e) {
      setError(e.response?.data?.message || 'Update failed');
    }
  };

  return (
    <div className="min-h-screen bg-warm-50 flex flex-col md:flex-row gap-8 p-4 md:p-12">
      {/* Sidebar */}
      <aside className="w-full md:w-[320px] flex-shrink-0 md:sticky md:top-8 bg-white border border-warm-200 rounded-2xl p-8 flex flex-col items-center shadow-warm-md mb-8 md:mb-0">
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-400 flex items-center justify-center font-display font-bold text-white text-3xl mb-4">{sitter.firstName[0]}</div>
        <div className="font-display text-xl font-bold text-warm-900 mb-1">{sitter.firstName} {sitter.lastName}</div>
        <div className="text-warm-400 text-sm mb-2">{sitter.city}, {sitter.country}</div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-amber font-semibold">★ {sitter.rating}</span>
          <span className="text-warm-400 text-xs">({sitter.reviews} reviews)</span>
        </div>
        {sitter.verified && <span className="bg-teal-50 text-teal-700 border border-teal-200 text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1 mb-2">✓ Verified</span>}
        <div className="border-t border-warm-100 w-full my-4" />
        <div className="text-warm-900 font-semibold mb-1">Rate: <span className="text-teal-700">UGX {sitter.rate} / hr</span></div>
        <div className="text-warm-400 text-sm mb-1">Experience: {sitter.experience} years</div>
        <button className="w-full bg-teal-600 text-white rounded-xl px-4 py-3 font-semibold hover:bg-teal-700 transition-all mt-4">Message {sitter.firstName} →</button>
      </aside>
      {/* Main content */}
      <main className="flex-1 max-w-2xl mx-auto">
        <h2 className="font-display text-2xl font-bold text-warm-900 mb-6">About</h2>
        <form className="flex flex-col gap-4 mb-8" onSubmit={handleSubmit(onSubmit)}>
          {error && <NotificationBanner message={error} type="error" onClose={() => setError('')} />}
          {success && <NotificationBanner message={success} type="success" onClose={() => setSuccess('')} />}
          <div>
            <label className="block mb-1 text-sm font-medium text-warm-700">Full Name</label>
            <input {...register('name')} placeholder="Full Name" className="border border-warm-200 rounded-xl px-4 py-3 w-full bg-white outline-none transition-all focus:border-teal-600 focus:ring-2 focus:ring-teal-100" />
            {errors.name && <span className="text-danger text-xs mt-1">{errors.name.message}</span>}
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-warm-700">Bio</label>
            <textarea {...register('bio')} placeholder="Bio" className="border border-warm-200 rounded-xl px-4 py-3 w-full bg-white outline-none transition-all focus:border-teal-600 focus:ring-2 focus:ring-teal-100" />
            {errors.bio && <span className="text-danger text-xs mt-1">{errors.bio.message}</span>}
          </div>
          <button type="submit" className="bg-teal-600 text-white rounded-xl px-4 py-3 font-semibold hover:bg-teal-700 transition-all w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : 'Save Changes'}
          </button>
        </form>
        <div className="mb-8">
          <h3 className="font-display text-xl font-bold text-warm-900 mb-2">Skills & Certifications</h3>
          <div className="flex flex-wrap gap-2">
            {sitter.tags.map(tag => (
              <span key={tag} className="bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full text-xs font-medium">{tag}</span>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h3 className="font-display text-xl font-bold text-warm-900 mb-2">Payment Methods</h3>
          <div className="flex flex-wrap gap-2">
            {sitter.payment.map(method => (
              <span key={method} className="bg-warm-100 text-warm-700 px-2 py-0.5 rounded-full text-xs font-medium">{method}</span>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h3 className="font-display text-xl font-bold text-warm-900 mb-2">Documents</h3>
          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-2 text-sm">ID Document: {sitter.documents.id ? <span className="text-success font-semibold">✓ Uploaded & Verified</span> : <span className="text-danger font-semibold">✗ Missing</span>}</span>
            <span className="flex items-center gap-2 text-sm">CV/Resume: {sitter.documents.cv ? <span className="text-success font-semibold">✓ Uploaded & Verified</span> : <span className="text-danger font-semibold">✗ Missing</span>}</span>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="font-display text-xl font-bold text-warm-900 mb-2">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {sitter.languages.map(lang => (
              <span key={lang} className="bg-warm-100 text-warm-700 px-2 py-0.5 rounded-full text-xs font-medium">{lang}</span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
