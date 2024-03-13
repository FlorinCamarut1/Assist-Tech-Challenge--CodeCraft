'use client';

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

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { CreateNewSkillSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { getSession } from '@/actions/getSession';
import { SkillCategoryType } from '@/types';

import useSkillsModal from '@/hooks/skills/useSkillsModal';
import Modal from '../ui/Modal';
import axios from 'axios';
import SkillsByRoleBox from '../skills/SkillsByRoleBox';
import useSkillsByCategoryId from '@/hooks/skills/useSkillsByCategoryId';

const AddSkillsModal = () => {
  const session = getSession();
  const addSkillModal = useSkillsModal();

  const currentSkillCategoryData = addSkillModal?.data as SkillCategoryType;
  const { mutate: mutateFetchedSkillByCategory } = useSkillsByCategoryId(
    currentSkillCategoryData.id
  );

  const form = useForm<z.infer<typeof CreateNewSkillSchema>>({
    resolver: zodResolver(CreateNewSkillSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });

  const onSubmit = (values: z.infer<typeof CreateNewSkillSchema>) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/Skill`, {
        ...values,
        authorID: session?.id,
        skillCategoryID: currentSkillCategoryData?.id,
        departmentID: session?.departmentID || null,
      })
      .then((data) => {
        form.reset();
        mutateFetchedSkillByCategory();
      });
  };

  const useAddSkillModal = useSkillsModal();
  return (
    <Modal isOpen={useAddSkillModal.isOpen} onClose={useAddSkillModal.onClose}>
      <div className='flex flex-col gap-2'>
        <h1 className=' font-Raleway font-bold text-codeCraft-900'>
          Add new skill to {currentSkillCategoryData?.name} category
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Skill Name</FormLabel>
                  <FormControl>
                    <Input placeholder='ex:Front-end' {...field} />
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
                    <Input placeholder='ex:React' {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type='submit'>Add Skill</Button>
          </form>
        </Form>
        {/* Send current category data to display skills assigned to this category */}
        <SkillsByRoleBox data={currentSkillCategoryData} />
      </div>
    </Modal>
  );
};

export default AddSkillsModal;
