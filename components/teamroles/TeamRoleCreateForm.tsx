'use client';

import { getSession } from '@/actions/getSession';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useTeamRoles from '@/hooks/useTeamRoles';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const TeamRoleCreateForm = () => {
  const session = getSession();

  const { mutate: mutateFetchedTeamRoles } = useTeamRoles(
    session?.organizationID
  );

  const formSchema = z.object({
    name: z.string().min(2, {
      message: 'Skill name must be at least 1 characters.',
    }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/TeamRole`, {
        ...values,
        organizationID: session?.organizationID,
      })
      .then((data) => {
        mutateFetchedTeamRoles();
        form.reset();
      });
  };

  return (
    <div className='flex flex-col gap-6'>
      <h1 className='font-Raleway text-2xl font-semibold'>
        Assign Team Roles for your Organization
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel></FormLabel>
                <FormControl>
                  <Input placeholder='Team role' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default TeamRoleCreateForm;
