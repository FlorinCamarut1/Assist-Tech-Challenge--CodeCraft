import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useOrganization = (orgId: string) => {
  const url = `${process.env.NEXT_PUBLIC_API}/Organization/${orgId}`;
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return { data, error, isLoading, mutate };
};
export default useOrganization;
