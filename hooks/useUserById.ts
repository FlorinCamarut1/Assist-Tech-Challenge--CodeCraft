import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useUserById = (id: string) => {
  const url = `${process.env.NEXT_PUBLIC_API}/User/${id}`;
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return { data, error, isLoading, mutate };
};
export default useUserById;
