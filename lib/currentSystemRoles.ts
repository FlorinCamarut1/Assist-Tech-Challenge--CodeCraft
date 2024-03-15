import { getSession } from '@/actions/getSession';

export const currentSystemRoles = (data: any) => {
  let isAdmin = false;
  let employee = false;
  let depMan = false;
  let projMan = false;

  const session = getSession();

  if (!data) return null;

  data?.map((item: any) => {
    if (item === '65ea4a36ba72b235486cbcc9') {
      isAdmin = true;
    } else if (item === '65e503afb3a2c9268b0f2f5e') {
      employee = true;
    } else if (item === '65ea4a3eba72b235486cbcca') {
      projMan = true;
    } else if (item === '65ea4a44ba72b235486cbccb') {
      depMan = true;
    }
  });

  return { isAdmin, employee, depMan, projMan };
};
