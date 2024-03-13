import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useSkillCategory = (organizationId: string) => {
  const url = `${process.env.NEXT_PUBLIC_API}/SkillCategory/Organization/${organizationId}`;
  const { data, error, isLoading, mutate } = useSWR(
    () => (!organizationId ? null : url),
    fetcher
  );

  return { data, error, isLoading, mutate };
};
export default useSkillCategory;
