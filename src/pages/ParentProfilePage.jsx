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
    <div className="max-w-lg mx-auto py-12">
      <h2 className="text-2xl font-bold mb-4">Edit Parent Profile</h2>
      {error && <NotificationBanner message={error} type="error" onClose={() => setError('')} />}
      {success && <NotificationBanner message={success} type="success" onClose={() => setSuccess('')} />}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} placeholder="Full Name" className="border rounded px-3 py-2" />
        {errors.name && <span className="text-red-600 text-sm">{errors.name.message}</span>}
        <textarea {...register('bio')} placeholder="Bio" className="border rounded px-3 py-2" />
        {errors.bio && <span className="text-red-600 text-sm">{errors.bio.message}</span>}
        <button type="submit" className="bg-primary-600 text-white rounded px-4 py-2 font-semibold hover:bg-primary-700 transition" disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
}
