'use client';

import { RegisterEmployeeSchema } from '@/schemas';
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
import { useSearchParams } from 'next/navigation';
import { Button } from '../ui/button';
import { useState } from 'react';

import * as z from 'zod';
import FormHeader from './FormHeader';
import FormFooter from './FormFooter';
import FormError from '../ui/FormError';
import FormSucces from '../ui/FormSuccess';
import axios from 'axios';

interface RegisterEmployeeFormProps {
  className?: string;
}

const RegisterEmployeeForm = ({ className }: RegisterEmployeeFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const params = useSearchParams();

  const inviteOrganizationId = params.get('invite');

  const form = useForm<z.infer<typeof RegisterEmployeeSchema>>({
    resolver: zodResolver(RegisterEmployeeSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const formSubmitHandler = (
    values: z.infer<typeof RegisterEmployeeSchema>
  ) => {
    setIsLoading(true);
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/User/RegisterEmployee`, {
        ...values,
        organizationID: inviteOrganizationId as string,
      })
      .then((data) => {
        if (data.request) {
          setError('');
          setSuccess('Account created successfully!');
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setError('Something went wrong!');
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
          <FormHeader label='Register to an Organization' />
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

export default RegisterEmployeeForm;
