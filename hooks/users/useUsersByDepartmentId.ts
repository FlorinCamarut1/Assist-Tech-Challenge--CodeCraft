import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useUsersByDepartmentId = (departmentId: string) => {
  const url = `${process.env.NEXT_PUBLIC_API}/api/User/Department/${departmentId}`;
  const { data, error, isLoading, mutate } = useSWR(
    () => (!departmentId ? null : url),
    fetcher
  );

  return { data, error, isLoading, mutate };
};
export default useUsersByDepartmentId;
