'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, type RegisterInput } from '@tracker/shared';

export function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const handleRegister = async (_data: RegisterInput) => {
    // TODO: Step 2 — call auth API
  };

  return (
    <form onSubmit={handleSubmit(handleRegister)} className="w-full max-w-sm space-y-4">
      <h1 className="text-2xl font-bold">Register</h1>
      <div>
        <input {...register('email')} placeholder="Email" className="w-full rounded-lg border px-4 py-2" />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <input {...register('password')} type="password" placeholder="Password" className="w-full rounded-lg border px-4 py-2" />
        {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
      </div>
      <button type="submit" className="w-full rounded-lg bg-blue-600 py-2 text-white">Register</button>
    </form>
  );
}
