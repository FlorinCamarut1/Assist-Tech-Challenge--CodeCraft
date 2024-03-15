import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useDepartmentsById = (departmentId: string) => {
  const url = `${process.env.NEXT_PUBLIC_API}/Department/${departmentId}`;
  const { data, error, isLoading, mutate } = useSWR(
    () => (!departmentId ? null : url),
    fetcher
  );

  return { data, error, isLoading, mutate };
};
export default useDepartmentsById;
