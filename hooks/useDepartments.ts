import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useDepartments = () => {
  const url = `${process.env.NEXT_PUBLIC_API}/Department`;
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return { data, error, isLoading, mutate };
};
export default useDepartments;
