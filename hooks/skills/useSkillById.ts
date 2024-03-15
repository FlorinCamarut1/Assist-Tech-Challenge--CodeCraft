import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useSkillById = (skillId: string) => {
  const url = `${process.env.NEXT_PUBLIC_API}/Skill/${skillId}`;
  const { data, error, isLoading, mutate } = useSWR(
    () => (!skillId ? null : url),
    fetcher
  );

  return { data, error, isLoading, mutate };
};
export default useSkillById;
