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

import * as z from 'zod';
import { Button } from '../ui/button';

import FormHeader from './FormHeader';
import FormFooter from './FormFooter';

interface RegisterAdminFormProps {
  className?: string;
}

const RegisterAdminForm = ({ className }: RegisterAdminFormProps) => {
  const form = useForm<z.infer<typeof RegisterAdminSchema>>({
    resolver: zodResolver(RegisterAdminSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      organisationName: '',
      organisationAdress: '',
    },
  });

  const formSubmitHandler = () => {};
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
          <FormField
            control={form.control}
            name='organisationName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organization Name*</FormLabel>
                <FormControl>
                  <Input placeholder='Emaple.Org' type='text' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='organisationAdress'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organization Adress*</FormLabel>
                <FormControl>
                  <Input
                    placeholder='example street nr:4'
                    type='text'
                    {...field}
                  />
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

export default RegisterAdminForm;
