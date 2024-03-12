import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useSystemRoles = () => {
  const url = `${process.env.NEXT_PUBLIC_API}/SystemRole`;
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return { data, error, isLoading, mutate };
};
export default useSystemRoles;
