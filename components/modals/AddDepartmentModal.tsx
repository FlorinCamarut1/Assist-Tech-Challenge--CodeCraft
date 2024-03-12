'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '../ui/input';
import { useForm } from 'react-hook-form';
import { CreateDepartmentSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { getSession } from '@/actions/getSession';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import useCreateDepartmentModal from '@/hooks/useCreateDepartmentModal';
import Modal from '../ui/Modal';
import * as z from 'zod';
import axios from 'axios';
import FormError from '../ui/FormError';
import FormSucces from '../ui/FormSuccess';

import useDepartments from '@/hooks/useDepartments';

const AddDepartmentModal = () => {
  const router = useRouter();
  const session = getSession();

  const { mutate: mutateDepartments } = useDepartments(session?.organizationID);
  const addDepartmentModal = useCreateDepartmentModal();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const form = useForm<z.infer<typeof CreateDepartmentSchema>>({
    resolver: zodResolver(CreateDepartmentSchema),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = (values: z.infer<typeof CreateDepartmentSchema>) => {
    setIsLoading(true);
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/Department`, {
        ...values,
        organizationID: session.organizationID,
      })
      .then((data) => {
        if (data.request) {
          setSuccess('Organization created succesfully!');
          setError('');
          setIsLoading(false);
          addDepartmentModal.onClose();
          router.refresh();
          mutateDepartments();
          form.reset();
        }
      })
      .catch((error) => setError('Unable to create organisation!'))
      .finally(() => {
        setError('');
        setSuccess('');
        setIsLoading(false);
      });
  };
  return (
    <Modal
      isOpen={addDepartmentModal.isOpen}
      onClose={addDepartmentModal.onClose}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Department name</FormLabel>
                <FormControl>
                  <Input
                    placeholder='ex:Front-end'
                    {...field}
                    disabled={isLoading}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit' disabled={isLoading}>
            Submit
          </Button>
          {error && <FormError message={error} />}
          {success && <FormSucces message={success} />}
        </form>
      </Form>
    </Modal>
  );
};

export default AddDepartmentModal;
