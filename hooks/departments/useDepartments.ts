import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useDepartments = (organisationID: string) => {
  const url = `${process.env.NEXT_PUBLIC_API}/Department/Organization/${organisationID}`;
  const { data, error, isLoading, mutate } = useSWR(
    () => (!organisationID ? null : url),
    fetcher
  );

  return { data, error, isLoading, mutate };
};
export default useDepartments;
