import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useEmployeeWithoutDep = (organizationID: string) => {
  const url = `${process.env.NEXT_PUBLIC_API}/User/EmployeesWithoutDepartment?id=${organizationID}`;
  const { data, error, isLoading, mutate } = useSWR(
    () => (!organizationID ? null : url),
    fetcher
  );

  return { data, error, isLoading, mutate };
};
export default useEmployeeWithoutDep;
