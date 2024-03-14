import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useOrganisations = () => {
  const url = `${process.env.NEXT_PUBLIC_API}/Organization`;
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return { data, error, isLoading, mutate };
};
export default useOrganisations;
