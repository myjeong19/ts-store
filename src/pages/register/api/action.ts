import { type ActionFunction, redirect } from 'react-router';
import { customFetch } from '@/shared/api';

import { toast } from 'sonner';

export const action: ActionFunction = async ({ request }): Promise<Response | null> => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('auth/local/register', {
      json: data,
    });

    toast.success('Registered successfully');
    return redirect('/login');
  } catch (error) {
    toast.error('Failed to register');
    console.error(error);

    return null;
  }
};
