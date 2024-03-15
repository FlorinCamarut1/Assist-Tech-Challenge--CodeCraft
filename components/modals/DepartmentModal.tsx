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

import { useForm } from 'react-hook-form';
import { DepartmentType } from '@/types';
import { getSession } from '@/actions/getSession';

import { useMemo, useState } from 'react';

import { PropagateLoader } from 'react-spinners';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import useDepartmentModal from '@/hooks/departments/useDepartmentModal';
import Modal from '../ui/Modal';
import axios from 'axios';
import useDepartments from '@/hooks/departments/useDepartments';

const DepartmentModal = () => {
  const session = getSession();
  const [depMan, setDepMan] = useState([]);

  const departmentModal = useDepartmentModal();

  const departmentData = departmentModal.data as DepartmentType;

  const { mutate: mutateFetchedDepartments } = useDepartments(
    session?.organizationID
  );

  // get just department managers -----------------------
  useMemo(() => {
    if (departmentModal.isOpen) {
      axios
        .post(`${process.env.NEXT_PUBLIC_API}/User/DepartmentManagers`, {
          organizationID: departmentData?.organizationID,
          assigned: false,
        })
        .then((data) => setDepMan(data.data));
    }
  }, [departmentData?.organizationID, departmentModal?.isOpen]);

  const [isLoading, setIsLoading] = useState(false);

  const DepartmentUpdateSchema = z.object({
    managerID: z.string(),
  });

  const form = useForm<z.infer<typeof DepartmentUpdateSchema>>({
    resolver: zodResolver(DepartmentUpdateSchema),
    defaultValues: {
      managerID: '',
    },
  });

  console.log(departmentData);

  const onSubmit = (values: z.infer<typeof DepartmentUpdateSchema>) => {
    setIsLoading(true);

    axios
      .post(
        `${process.env.NEXT_PUBLIC_API}/Department/AssignDepartmentManager`,
        {
          departmentID: departmentData?.id,
          managerID: values.managerID,
        }
      )
      .then((data) => {
        if (data?.request) {
          departmentModal.onClose();

          mutateFetchedDepartments();
        }
      })
      .catch((error) => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleDelete = () => {
    setIsLoading(true);
    axios
      .delete(`${process.env.NEXT_PUBLIC_API}/Department/${departmentData.id}`)
      .then((data) => {
        if (data.request) {
          mutateFetchedDepartments();
          departmentModal.onClose();
        }
      })
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };

  return (
    <Modal isOpen={departmentModal.isOpen} onClose={departmentModal.onClose}>
      {isLoading ? (
        <div className='flex h-[300px] w-full items-center justify-center'>
          <PropagateLoader color='#061125' size={40} />
        </div>
      ) : (
        <div>
          <div className='mb-3 flex items-center justify-center gap-2'>
            <h1 className=' font-Raleway font-bold uppercase'>
              {departmentData?.name}
            </h1>
            <p className=' text-codeCraft-500'>Department</p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <FormField
                control={form.control}
                name='managerID'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select a manager for this department' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {depMan?.map((manager: any) => (
                          <SelectItem key={manager?.id} value={manager?.id}>
                            {manager?.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className='flex w-full justify-between'>
                <Button type='submit'>Submit</Button>
                <div className='flex gap-2'>
                  <Button
                    type='button'
                    variant='ghost'
                    onClick={() => departmentModal.onClose()}
                  >
                    Cancel
                  </Button>
                  <Button
                    type='button'
                    variant='destructive'
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      )}
    </Modal>
  );
};

export default DepartmentModal;
