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
import { CreateSkillCategorySchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import * as z from 'zod';
import axios from 'axios';
import useSkillCategory from '@/hooks/skills/useSkillCategory';

const SkillsForm = () => {
  const session = getSession();
  const { mutate: mutateFetchedSkillCategory } = useSkillCategory(
    session?.organizationID
  );

  const form = useForm<z.infer<typeof CreateSkillCategorySchema>>({
    resolver: zodResolver(CreateSkillCategorySchema),
    defaultValues: {
      name: '',
    },
  });
  const onSubmit = (values: z.infer<typeof CreateSkillCategorySchema>) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/SkillCategory`, {
        ...values,
        organizationID: session?.organizationID,
      })
      .then((data) => {
        mutateFetchedSkillCategory();
        form.reset();
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
                <FormLabel>Skill category</FormLabel>
                <FormControl>
                  <Input placeholder='ex:Back-end' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit'>Create new</Button>
        </form>
      </Form>
    </div>
  );
};

export default SkillsForm;
