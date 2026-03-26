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
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Left panel — decorative */}
        <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-teal-900 to-teal-700 relative p-12">
          <div className="font-display text-3xl text-white font-bold mb-8">CareConnect</div>
          {/* SVG organic pattern overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-10" style={{backgroundImage:'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'100\' cy=\'100\' r=\'80\' fill=\'%23fff\' fill-opacity=\'0.12\'/%3E%3C/svg%3E")', backgroundRepeat:'repeat'}} />
          <blockquote className="relative z-10 italic font-display text-xl text-white mb-8 text-center max-w-md">
            "The safety of your children begins with a single, trusted choice."
          </blockquote>
          <div className="relative z-10 flex gap-3 text-white/80 text-sm mb-2">
            <span>380+ verified sitters</span>
            <span>·</span>
            <span>2,400+ families</span>
          </div>
          <div className="relative z-10 flex mt-auto gap-2">
            {/* Avatar circles (placeholder) */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-700 to-teal-400" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-800 to-amber-400" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-900 to-blue-400" />
            <span className="ml-2 text-white/80 text-sm self-center">Join them today</span>
          </div>
        </div>
        {/* Right panel — form */}
        <div className="flex flex-col items-center justify-center bg-white min-h-screen p-8 md:p-16">
          <div className="w-full max-w-md mx-auto">
            <div className="text-sm font-medium text-warm-400 mb-1">Welcome back</div>
            <h1 className="font-display text-2xl font-bold text-warm-900 mb-6">Log In</h1>
            {error && <NotificationBanner message={error} type="error" onClose={() => setError('')} />}
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="block mb-1 text-sm font-medium text-warm-700">Email</label>
                <input type="email" placeholder="Email" className="border border-warm-200 rounded-xl px-4 py-3 w-full bg-white outline-none transition-all focus:border-teal-600 focus:ring-2 focus:ring-teal-100" {...register('email')} aria-invalid={!!errors.email} aria-label="Email" />
                {errors.email && <span className="text-danger text-xs mt-1">{errors.email.message}</span>}
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-warm-700">Password</label>
                <input type="password" placeholder="Password" className="border border-warm-200 rounded-xl px-4 py-3 w-full bg-white outline-none transition-all focus:border-teal-600 focus:ring-2 focus:ring-teal-100" {...register('password')} aria-invalid={!!errors.password} aria-label="Password" />
                {errors.password && <span className="text-danger text-xs mt-1">{errors.password.message}</span>}
              </div>
              <button type="submit" className="bg-teal-600 text-white rounded-xl px-4 py-3 font-semibold hover:bg-teal-700 transition-all w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>
            </form>
            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-warm-200" />
              <span className="mx-3 text-warm-400 text-xs">or</span>
              <div className="flex-1 h-px bg-warm-200" />
            </div>
            <div className="text-sm text-warm-700 text-center">
              Don't have an account?{' '}
              <button className="text-teal-600 hover:underline font-semibold" type="button" onClick={() => navigate('/signup')}>Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
