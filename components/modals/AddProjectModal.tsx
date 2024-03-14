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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '../ui/input';
import { useForm } from 'react-hook-form';
import { CreateProjectSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { getSession } from '@/actions/getSession';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Calendar } from '../ui/calendar';
import { format } from 'date-fns';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import Modal from '../ui/Modal';
import * as z from 'zod';
import axios from 'axios';
import FormError from '../ui/FormError';

import useProjects from '@/hooks/projects/useProjects';
import useCreateProjectModal from '@/hooks/projects/useCreateDepartmentModal';

const AddProjectModal = () => {
  const session = getSession();

  const { mutate: mutateProject } = useProjects(session?.organizationID);
  const addProjectModal = useCreateProjectModal();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isFixed, setIsFixed] = useState(false);

  const form = useForm<z.infer<typeof CreateProjectSchema>>({
    resolver: zodResolver(CreateProjectSchema),
    defaultValues: {
      name: '',
      period: 'Ongoing',
      deadlineDate: null,
      status: 'Not Started',
      description: '',
    },
  });
  const isFormValueFixed = form.getValues('period') === 'Fixed';

  const onSubmit = (values: z.infer<typeof CreateProjectSchema>) => {
    axios.post(`${process.env.NEXT_PUBLIC_API}/Project`, {
      ...values,
      startDate: new Date(),
      organizationID: session?.organizationID,
      projectManagerID: session?.id,
    });
  };
  return (
    <Modal isOpen={addProjectModal.isOpen} onClose={addProjectModal.onClose}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <div className='grid grid-cols-2 gap-8'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Project name'
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
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Project description'
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
              name='period'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Period</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select a period.' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='Fixed'>Fixed </SelectItem>
                      <SelectItem value='Ongoing'>Ongoing </SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='status'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select a status for project' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='Not Started'>Not Started</SelectItem>
                      <SelectItem value='Starting'>Starting </SelectItem>
                      <SelectItem value='In Progress'>In Progress </SelectItem>
                      <SelectItem value='Closing'>Closing </SelectItem>
                      <SelectItem value='Closed'>Closed </SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            {isFormValueFixed && (
              <FormField
                control={form.control}
                name='deadlineDate'
                render={({ field }) => (
                  <FormItem className='flex flex-col'>
                    <FormLabel>Project Deadline</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-[240px] pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value ? (
                              format(field.value, 'PPP')
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className='w-auto p-0' align='start'>
                        <Calendar
                          mode='single'
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date() || date < new Date('1900-01-01')
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <div className='flex items-end justify-end'>
              <Button type='submit' disabled={isLoading}>
                Submit
              </Button>
            </div>

            {error && <FormError message={error} />}
          </div>
        </form>
      </Form>
    </Modal>
  );
};

export default AddProjectModal;
