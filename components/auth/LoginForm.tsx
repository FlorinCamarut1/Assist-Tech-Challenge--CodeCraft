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

import axios from 'axios';
import * as z from 'zod';
import FormHeader from './FormHeader';
import FormFooter from './FormFooter';
import { useRouter } from 'next/navigation';

interface LoginFormProps {
  className?: string;
}

const LoginForm = ({ className }: LoginFormProps) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const formSubmitHandler = (values: z.infer<typeof LoginSchema>) => {
    axios.get('http://localhost:8000/user').then((data: any) => {
      data.data.map((user: any) => {
        if (user.email === values.email && user.password === values.password) {
          setSession(data);
          console.log('auth');
          router.push('/dashboard');
        } else {
          console.log('incorrect password!');
        }
      });
    });
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
                  <Input placeholder='******' type='password' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className='flex justify-center'>
            <Button
              variant='default'
              type='submit'
              className='text flex w-full sm:w-[160px]'
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
