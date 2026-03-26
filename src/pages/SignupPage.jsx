import React, { useState } from 'react';
import Seo from '../components/Seo';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { signup as signupApi } from '../api/api';
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
  confirm: z.string().min(8),
  role: z.enum(['parent', 'babysitter']),
}).refine((data) => data.password === data.confirm, {
  message: "Passwords do not match",
  path: ["confirm"],
});

export default function SignupPage() {
  const navigate = useNavigate();
  const setAuth = useAuthStore((s) => s.login);
  const [error, setError] = useState('');
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { role: 'parent' },
  });

  const onSubmit = async (data) => {
    setError('');
    try {
      const res = await signupApi(data.email, data.password, data.role);
      setAuth(res.data.user, res.data.token);
      localStorage.setItem('token', res.data.token);
      if (res.data.user.role === 'babysitter') navigate('/babysitter/dashboard');
      else navigate('/parent/dashboard');
    } catch (e) {
      setError(e.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <>
      <Seo title="Sign Up for CareConnect" description="Create your CareConnect account to find babysitters or parents near you." />
      <div className="max-w-md mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary-900">Sign Up</h2>
        {error && <NotificationBanner message={error} type="error" onClose={() => setError('')} />}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <input type="email" placeholder="Email" className="border rounded px-3 py-2" {...register('email')} aria-invalid={!!errors.email} aria-label="Email" />
          {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
          <input type="password" placeholder="Password" className="border rounded px-3 py-2" {...register('password')} aria-invalid={!!errors.password} aria-label="Password" />
          {errors.password && <span className="text-red-600 text-sm">{errors.password.message}</span>}
          <input type="password" placeholder="Confirm Password" className="border rounded px-3 py-2" {...register('confirm')} aria-invalid={!!errors.confirm} aria-label="Confirm Password" />
          {errors.confirm && <span className="text-red-600 text-sm">{errors.confirm.message}</span>}
          <div className="flex gap-4 justify-center">
            <label>
              <input type="radio" value="parent" {...register('role')} /> Parent
            </label>
            <label>
              <input type="radio" value="babysitter" {...register('role')} /> Babysitter
            </label>
          </div>
          <button type="submit" className="bg-secondary-500 text-white rounded px-4 py-2 font-semibold hover:bg-secondary-600 transition" disabled={isSubmitting}>
            {isSubmitting ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </>
  );
}
