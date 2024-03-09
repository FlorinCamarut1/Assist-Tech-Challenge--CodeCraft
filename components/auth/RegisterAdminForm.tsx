'use client';

import { RegisterAdminSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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
import { useState, useTransition } from 'react';

import axios from 'axios';
import * as z from 'zod';
import FormHeader from './FormHeader';
import FormFooter from './FormFooter';
import FormError from '../ui/FormError';
import FormSucces from '../ui/FormSuccess';

interface RegisterAdminFormProps {
  className?: string;
}

const RegisterAdminForm = ({ className }: RegisterAdminFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const form = useForm<z.infer<typeof RegisterAdminSchema>>({
    resolver: zodResolver(RegisterAdminSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      organizationName: '',
      organizationAddress: '',
    },
  });

  const formSubmitHandler = (values: z.infer<typeof RegisterAdminSchema>) => {
    setIsLoading(true);
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/User/RegisterAdmin`, values)
      .then((data) => {
        if (data.request) {
          setSuccess('Account created succesfully');
          setIsLoading(false);
          setError('');
        }
      })
      .catch((error) => {
        setError(error.message);
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
          <FormHeader label='Register New Organization' />
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name*</FormLabel>
                <FormControl>
                  <Input
                    placeholder='John Doe'
                    type='text'
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
          <FormField
            control={form.control}
            name='organizationName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organization Name*</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Emaple.Org'
                    type='text'
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
            name='organizationAddress'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organization Adress*</FormLabel>
                <FormControl>
                  <Input
                    placeholder='example street nr:4'
                    type='text'
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
              Submit
            </Button>
          </div>
          <FormFooter
            message='Already have an account?'
            href='/login'
            linkName='Login now'
          />
        </form>
      </Form>
    </div>
  );
};

export default RegisterAdminForm;
