import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useProjectsByDepartmentId = (departmentID: string) => {
  const url = `${process.env.NEXT_PUBLIC_API}/Project/DepartmentProjects?id=${departmentID}`;
  const { data, error, isLoading, mutate } = useSWR(
    () => (!departmentID ? null : url),
    fetcher
  );

  return { data, error, isLoading, mutate };
};
export default useProjectsByDepartmentId;
