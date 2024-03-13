'use client';

import { getSession } from '@/actions/getSession';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { CreateSkillSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import * as z from 'zod';
import axios from 'axios';

const SkillsForm = () => {
  const session = getSession();

  const form = useForm<z.infer<typeof CreateSkillSchema>>({
    resolver: zodResolver(CreateSkillSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });
  const onSubmit = (values: z.infer<typeof CreateSkillSchema>) => {
    axios.post(`${process.env.NEXT_PUBLIC_API}/Skill`, {
      ...values,
      authorID: session?.id,
      departmentID: session?.departmentID,
    });
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skill name</FormLabel>
                <FormControl>
                  <Input placeholder='ex:Back-end' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skill description</FormLabel>
                <FormControl>
                  <Input placeholder='ex:.NET' {...field} />
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

export default SkillsForm;
