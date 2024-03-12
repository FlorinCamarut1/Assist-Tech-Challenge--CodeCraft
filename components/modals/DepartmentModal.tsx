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

import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { DepartmentType } from '@/types';
import { getSession } from '@/actions/getSession';
import { Listbox, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import { PropagateLoader } from 'react-spinners';

import useDepartmentModal from '@/hooks/useDepartmentModal';
import Modal from '../ui/Modal';
import axios from 'axios';
import useUsers from '@/hooks/useUsers';
import FormError from '../ui/FormError';
import FormSucces from '../ui/FormSuccess';
import useDepartments from '@/hooks/useDepartments';

const DepartmentModal = () => {
  const session = getSession();

  const departmentModal = useDepartmentModal();
  const departmentData = departmentModal.data as DepartmentType;
  const { mutate: mutateFetchedDepartments } = useDepartments(
    session?.organizationID
  );

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const users = useUsers(session?.organizationID);
  const [selected, setSelected] = useState({
    name: 'Select a department manager',
    id: '',
  });

  const form = useForm({
    defaultValues: {
      name: '',
    },
  });
  const name = form.getValues('name');

  const onSubmit = () => {
    setIsLoading(true);

    axios
      .put(`${process.env.NEXT_PUBLIC_API}/Department`, {
        id: departmentData.id,
        name: name || departmentData.name,
        managerID: selected?.id,
        organizationID: departmentData.organizationID,
      })
      .then((data) => {
        if (data?.request) {
          departmentModal.onClose();
          setSuccess('Department was updated!');
          setError('');
          mutateFetchedDepartments();
        }
      })
      .catch((error) => {
        setError('Something went wrong!');
        setSuccess('');
      })
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
          setSuccess('Department was deleted!');
          setError('');
          mutateFetchedDepartments();
          departmentModal.onClose();
        }
      })
      .catch((error) => {
        setError('Cannot delete department!');
        setSuccess('');
      })
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
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Edit Department name</FormLabel>
                    <FormControl>
                      <Input placeholder={departmentData.name} {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='h-auto w-full'>
                <h3 className=' mb-3 text-sm font-semibold text-codeCraft-900'>
                  Assign a department manager
                </h3>
                <Listbox value={selected} onChange={setSelected}>
                  <div className='relative mt-1'>
                    <Listbox.Button className='relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-codeCraft-400 sm:text-sm'>
                      <span className='block truncate'>{selected?.name}</span>
                      <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                        <ChevronsUpDownIcon
                          className='h-5 w-5 text-codeCraft-500'
                          aria-hidden='true'
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave='transition ease-in duration-100'
                      leaveFrom='opacity-100'
                      leaveTo='opacity-0'
                    >
                      <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
                        {users?.data?.map((person: any, personIdx: any) => (
                          <Listbox.Option
                            key={personIdx}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? 'bg-neutral-100 text-codeCraft-900'
                                  : 'text-gray-900'
                              }`
                            }
                            value={person}
                          >
                            {({ selected }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? 'font-medium' : 'font-normal'
                                  }`}
                                >
                                  {person.name}
                                </span>
                                {selected ? (
                                  <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-codeCraft-900'>
                                    <CheckIcon
                                      className='h-5 w-5'
                                      aria-hidden='true'
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
              {error && <FormError message={error} />}
              {success && <FormSucces message={success} />}
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
