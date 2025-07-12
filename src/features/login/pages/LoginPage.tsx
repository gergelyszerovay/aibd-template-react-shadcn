import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { api } from '../../../services/api';
import { useAuth } from '@features/shell/context/AuthContext';
import { Toaster, toast } from 'sonner';

const loginSchema = z.object({
  email: z.string().email(),
});

type LoginValues = z.infer<typeof loginSchema>;

export function LoginPage() {
  const { login } = useAuth();

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  });

  const mutation = useMutation<{ data: { userId: string; name: string; token: string } }, Error, LoginValues>({
    mutationFn: async (values) => {
      const response = await api.post('/auth/login', values);
      return response.data;
    },
    onSuccess: (res) => {
      login(res.data.token, res.data.userId);
      toast.success('Logged in successfully');
      window.location.href = '/dashboard';
    },
    onError: (err) => {
      // eslint-disable-next-line
      console.error(err);
      toast.error('Login failed');
    },
  });

  const onSubmit = form.handleSubmit((values) => mutation.mutate(values));

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
      <Toaster position="top-center" richColors />
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