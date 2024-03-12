import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useUsers = (organizationID: string) => {
  const url = `${process.env.NEXT_PUBLIC_API}/User/Organization/${organizationID}`;
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return { data, error, isLoading, mutate };
};
export default useUsers;
