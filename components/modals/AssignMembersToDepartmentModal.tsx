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

import useAssignDepartmentMembersModal from '@/hooks/departments/useAssignDepartmentMembersModal';
import Modal from '../ui/Modal';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import axios from 'axios';
import useEmployeeWithoutDep from '@/hooks/users/useEmployeeWithoutDep';

const AssignMembersToDepartmentModal = () => {
  const assignMembersToDepartmentModal = useAssignDepartmentMembersModal();
  const departmentData = assignMembersToDepartmentModal?.data as any;
  const { data: employeesData } = useEmployeeWithoutDep(
    departmentData?.organizationID
  );

  const AssignMembersSchema = z.object({
    userID: z.string(),
  });

  const form = useForm<z.infer<typeof AssignMembersSchema>>({
    resolver: zodResolver(AssignMembersSchema),
    defaultValues: {
      userID: '',
    },
  });

  const onSubmit = (values: z.infer<typeof AssignMembersSchema>) => {
    axios.post(
      `${process.env.NEXT_PUBLIC_API}/Department/AddDepartmentMember`,
      {
        ...values,
        departmentID: departmentData?.id,
      }
    );
  };

  return (
    <Modal
      isOpen={assignMembersToDepartmentModal.isOpen}
      onClose={assignMembersToDepartmentModal.onClose}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='userID'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Assign Employee</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a employee for your department' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {employeesData?.map((employee: any) => (
                      <SelectItem key={employee?.id} value={employee?.id}>
                        {employee?.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </Modal>
  );
};

export default AssignMembersToDepartmentModal;
