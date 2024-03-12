import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useSystemRole = (roleId: string) => {
  const url = `${process.env.NEXT_PUBLIC_API}/SystemRole/${roleId}`;
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return { data, error, isLoading, mutate };
};
export default useSystemRole;
