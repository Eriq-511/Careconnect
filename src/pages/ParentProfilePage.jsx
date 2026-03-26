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

export default function ParentProfilePage() {
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
  });
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');
  // Dummy parent data for visual structure
  const parent = {
    id: 'parent1',
    firstName: 'Nabirye',
    lastName: 'A.',
    city: 'Kampala',
    country: 'Uganda',
    avatarUrl: '',
    bio: 'Parent of two, passionate about early childhood development and safety.',
  };

  useEffect(() => {
    api.get('/parents/me').then(res => {
      setValue('name', res.data.name || '');
      setValue('bio', res.data.bio || '');
    });
  }, [setValue]);

  const onSubmit = async (data) => {
    setError(''); setSuccess('');
    try {
      await api.put('/parents/me', data);
      setSuccess('Profile updated!');
    } catch (e) {
      setError(e.response?.data?.message || 'Update failed');
    }
  };

  return (
    <div className="min-h-screen bg-warm-50 flex flex-col md:flex-row gap-8 p-4 md:p-12">
      {/* Sidebar */}
      <aside className="w-full md:w-[320px] flex-shrink-0 md:sticky md:top-8 bg-white border border-warm-200 rounded-2xl p-8 flex flex-col items-center shadow-warm-md mb-8 md:mb-0">
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-400 flex items-center justify-center font-display font-bold text-white text-3xl mb-4">{parent.firstName[0]}</div>
        <div className="font-display text-xl font-bold text-warm-900 mb-1">{parent.firstName} {parent.lastName}</div>
        <div className="text-warm-400 text-sm mb-2">{parent.city}, {parent.country}</div>
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
          <h3 className="font-display text-xl font-bold text-warm-900 mb-2">About Me</h3>
          <div className="text-warm-700 text-base leading-relaxed bg-warm-100 rounded-xl p-4">
            {parent.bio}
          </div>
        </div>
      </main>
    </div>
  );
}
