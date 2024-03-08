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

import { Button } from '../ui/button';

import * as z from 'zod';
import FormHeader from './FormHeader';
import FormFooter from './FormFooter';
import { useSearchParams } from 'next/navigation';

interface RegisterEmployeeFormProps {
  className?: string;
}

const RegisterEmployeeForm = ({ className }: RegisterEmployeeFormProps) => {
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
    console.log({ ...values, organizationId: inviteOrganizationId });
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
                  <Input placeholder='John Doe' type='text' {...field} />
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
