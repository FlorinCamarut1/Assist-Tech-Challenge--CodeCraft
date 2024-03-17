import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useTeamRoles = (organisationID: string) => {
  const url = `${process.env.NEXT_PUBLIC_API}/TeamRole/Organization/${organisationID}`;
  const { data, error, isLoading, mutate } = useSWR(
    () => (!organisationID ? null : url),
    fetcher
  );

  return { data, error, isLoading, mutate };
};
export default useTeamRoles;
