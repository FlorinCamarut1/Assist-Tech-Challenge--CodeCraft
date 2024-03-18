'use client';

import { LoginSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { setSession } from '@/actions/setSession';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import axios from 'axios';
import * as z from 'zod';
import FormHeader from './FormHeader';
import FormFooter from './FormFooter';
import FormError from '../ui/FormError';
import FormSucces from '../ui/FormSuccess';

interface LoginFormProps {
  className?: string;
}

const LoginForm = ({ className }: LoginFormProps) => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const formSubmitHandler = (values: z.infer<typeof LoginSchema>) => {
    setIsLoading(true);
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/User/Login`, values)
      .then((data) => {
        if (data) {
          setSession(data.data);
          setSuccess('Logged in successfully!');
          setIsLoading(false);
          router.push('/dashboard/account');
          setError('');
        }
      })
      .catch((error) => {
        setError('Invalid credentials!');
        setSuccess('');
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={className}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(formSubmitHandler)}
          className='flex w-auto flex-col gap-5'
        >
          <FormHeader label='Login to your account' />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email*</FormLabel>
                <FormControl>
                  <Input
                    placeholder='johnDoe@example.com'
                    type='email'
                    {...field}
                    disabled={isLoading}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password*</FormLabel>
                <FormControl>
                  <Input
                    placeholder='******'
                    type='password'
                    {...field}
                    disabled={isLoading}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {error && <FormError message={error} />}
          {success && <FormSucces message={success} />}

          <div className='flex justify-center'>
            <Button
              variant='default'
              type='submit'
              className='text flex w-full sm:w-[160px]'
              disabled={isLoading}
            >
              Login
            </Button>
          </div>
          <FormFooter
            message='Or register an organization account:'
            href='/register'
            linkName='Register'
          />
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
