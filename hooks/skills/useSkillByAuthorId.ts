import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useSkillByAuthorId = (authorId: string) => {
  const url = `${process.env.NEXT_PUBLIC_API}/Skill/Author/${authorId}`;
  const { data, error, isLoading, mutate } = useSWR(
    () => (!authorId ? null : url),
    fetcher
  );

  return { data, error, isLoading, mutate };
};
export default useSkillByAuthorId;
