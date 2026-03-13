'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginInput } from '@tracker/shared';

export function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (_data: LoginInput) => {
    // TODO: Step 2 — call auth API
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)} className="w-full max-w-sm space-y-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <div>
        <input {...register('email')} placeholder="Email" className="w-full rounded-lg border px-4 py-2" />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <input {...register('password')} type="password" placeholder="Password" className="w-full rounded-lg border px-4 py-2" />
        {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
      </div>
      <button type="submit" className="w-full rounded-lg bg-blue-600 py-2 text-white">Login</button>
    </form>
  );
}
