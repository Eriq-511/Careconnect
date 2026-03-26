import React, { useState } from 'react';
import Seo from '../components/Seo';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { login as loginApi } from '../api/api';
import { useAuthStore } from '../stores/authStore';
import NotificationBanner from '../components/NotificationBanner';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
  email: z.string().email().trim().toLowerCase(),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Must contain an uppercase letter')
    .regex(/[a-z]/, 'Must contain a lowercase letter')
    .regex(/[0-9]/, 'Must contain a number')
    .regex(/[^A-Za-z0-9]/, 'Must contain a special character'),
});

export default function LoginPage() {
  const navigate = useNavigate();
  const setAuth = useAuthStore((s) => s.login);
  const [error, setError] = useState('');
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setError('');
    try {
      const res = await loginApi(data.email, data.password);
      setAuth(res.data.user, res.data.token);
      localStorage.setItem('token', res.data.token);
      // Redirect based on role
      if (res.data.user.role === 'admin') navigate('/admin/dashboard');
      else if (res.data.user.role === 'babysitter') navigate('/babysitter/dashboard');
      else navigate('/parent/dashboard');
    } catch (e) {
      setError(e.response?.data?.message || 'Login failed');
    }
  };

  return (
    <>
      <Seo title="Login to CareConnect" description="Login to your CareConnect account to access your dashboard and connect with others." />
      <div className="max-w-md mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary-900">Login</h2>
        {error && <NotificationBanner message={error} type="error" onClose={() => setError('')} />}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <input type="email" placeholder="Email" className="border rounded px-3 py-2" {...register('email')} aria-invalid={!!errors.email} aria-label="Email" />
          {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
          <input type="password" placeholder="Password" className="border rounded px-3 py-2" {...register('password')} aria-invalid={!!errors.password} aria-label="Password" />
          {errors.password && <span className="text-red-600 text-sm">{errors.password.message}</span>}
          <button type="submit" className="bg-primary-600 text-white rounded px-4 py-2 font-semibold hover:bg-primary-700 transition" disabled={isSubmitting}>
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </>
  );
}
