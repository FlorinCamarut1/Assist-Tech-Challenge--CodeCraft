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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Input } from '@/components/ui/input';
import { getSession } from '@/actions/getSession';
import { useForm } from 'react-hook-form';
import { UpdateAccountSkillSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';

import React, { useState } from 'react';
import Modal from '../ui/Modal';
import * as z from 'zod';

import useAccountModal from '@/hooks/account/useAccountModal';

import useSkillsByOrganization from '@/hooks/skills/useSkillsByOrganization';
import axios from 'axios';
import useUserById from '@/hooks/users/useUserById';
import FormError from '../ui/FormError';

const AddSkillModal = () => {
  const session = getSession();
  const accountModal = useAccountModal();

  const [error, setError] = useState('');
  const { data: skillData } = useSkillsByOrganization(session?.organizationID);
  const { data: currentUserData, mutate: mutateUserData } = useUserById(
    session?.id
  );

  const form = useForm<z.infer<typeof UpdateAccountSkillSchema>>({
    resolver: zodResolver(UpdateAccountSkillSchema),
    defaultValues: {
      skillID: '',
      level: 'Learns',
      experience: '0-6 months',
      trainingTitle: '',
      trainingDescription: '',
      status: 'Pending',
    },
  });

  const onSubmit = (values: z.infer<typeof UpdateAccountSkillSchema>) => {
    const skillExists = currentUserData?.skills?.find(
      (skill: any) => skill.skillID === values.skillID
    );
    if (!skillExists) {
      axios
        .put(`${process.env.NEXT_PUBLIC_API}/User`, {
          ...currentUserData,
          skills: [...(currentUserData?.skills || []), values],
        })
        .then((data) => {
          mutateUserData();
          setError('');
          accountModal.onClose();
        });
    } else {
      setError('Skill already assigned!');
      return;
    }
  };

  return (
    <Modal isOpen={accountModal.isOpen} onClose={accountModal.onClose}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='skillID'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select a skill</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a skill' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {skillData?.map((skill: any) => (
                      <SelectItem key={skill?.id} value={skill?.id}>
                        {skill?.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='level'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skill Level</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a skill' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='Learns'>Learn</SelectItem>
                    <SelectItem value='Knows'>Know</SelectItem>
                    <SelectItem value='Does'>Do</SelectItem>
                    <SelectItem value='Helps'>Help</SelectItem>
                    <SelectItem value='Teaches'>Teach</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='experience'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Experience</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a skill' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='0-6 months'>0-6 months</SelectItem>
                    <SelectItem value='6-12 months'>6-12 months</SelectItem>
                    <SelectItem value='1-2 years'>1-2 years</SelectItem>
                    <SelectItem value='2-4 years'>2-4 years</SelectItem>
                    <SelectItem value='4-7 years'>4-7 years</SelectItem>
                    <SelectItem value='7 years'>7 years</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='trainingTitle'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Training/Course/Certification</FormLabel>
                <FormControl>
                  <Input placeholder='Training Title' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='trainingDescription'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Training/Course/Certification Description</FormLabel>
                <FormControl>
                  <Input placeholder='Training Description' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {error && <FormError message={error} />}
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </Modal>
  );
};

export default AddSkillModal;
