import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useSkillsByCategoryId = (skillCategoryId: string) => {
  const url = `${process.env.NEXT_PUBLIC_API}/Skill/SkillCategory/${skillCategoryId}`;
  const { data, error, isLoading, mutate } = useSWR(
    () => (!skillCategoryId ? null : url),
    fetcher
  );

  return { data, error, isLoading, mutate };
};
export default useSkillsByCategoryId;
