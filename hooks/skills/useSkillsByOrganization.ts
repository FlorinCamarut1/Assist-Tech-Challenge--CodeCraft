import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useSkillsByOrganization = (organizationId: string) => {
  const url = `${process.env.NEXT_PUBLIC_API}/Skill/Organization/${organizationId}`;
  const { data, error, isLoading, mutate } = useSWR(
    () => (!organizationId ? null : url),
    fetcher
  );

  return { data, error, isLoading, mutate };
};
export default useSkillsByOrganization;
