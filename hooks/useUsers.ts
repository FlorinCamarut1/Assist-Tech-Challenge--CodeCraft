import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useUsers = () => {
  const url = `${process.env.NEXT_PUBLIC_API}/User`;
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return { data, error, isLoading, mutate };
};
export default useUsers;
