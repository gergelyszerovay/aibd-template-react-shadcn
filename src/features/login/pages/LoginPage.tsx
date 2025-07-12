import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { api } from '../../../services/api';
import { useAuth } from '@features/shell/context/AuthContext';
import { toast } from 'sonner';
import type { AxiosError } from 'axios';

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
  password: z.string().min(5, 'Minimum 5 characters'),
});

type LoginValues = z.infer<typeof loginSchema>;

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  });

  const mutation = useMutation<{ success: boolean; data?: { token: string; expiresIn: number; user: { id: string; email: string; name: string; role: string } }; error?: { message: string } }, Error, LoginValues>({
    mutationFn: async (values) => {
      const response = await api.post('/v1/auth/login', values);
      return response.data as {
        success: boolean;
        data?: { token: string; expiresIn: number; user: { id: string; email: string; name: string; role: string } };
        error?: { message: string };
      };
    },
    onSuccess: (res) => {
      if (res.success && res.data) {
        login(res.data.token, res.data.user);
        toast.success('Logged in successfully'); // expiresIn disponível em res.data.expiresIn se precisarmos
        form.reset();
        navigate('/dashboard', { replace: true });
      } else {
        toast.error(res.error?.message ?? 'Invalid credentials');
      }
    },
    onError: (err: unknown) => {
      const error = err as AxiosError<{ error?: { message?: string } }> | Error;
      const msg =
        (error as AxiosError<{ error?: { message?: string } }>)?.response?.data?.error?.message ??
        error.message ??
        'Network error';
      toast.error(msg);
    },
  });

  const onSubmit = form.handleSubmit((values) => mutation.mutate(values));

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm space-y-4 rounded-md bg-white p-6 shadow-md dark:bg-gray-800"
      >
        <h2 className="text-center text-2xl font-semibold">Login</h2>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...form.register('email')}
            className="mt-1 w-full rounded border px-3 py-2 outline-none focus:border-blue-500"
          />
          {form.formState.errors.email && (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...form.register('password')}
            className="mt-1 w-full rounded border px-3 py-2 outline-none focus:border-blue-500"
          />
          {form.formState.errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.password.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={mutation.isPending}
          className="flex w-full items-center justify-center rounded bg-blue-600 px-4 py-2 font-medium text-white disabled:opacity-60"
        >
          {mutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Sign In
        </button>
      </form>
    </div>
  );
} 