export const getSystemRolesById = (roles: any, userSystemRoles: any) => {
  let arr = [] as string[];

  userSystemRoles?.forEach((roleID: string) => {
    roles?.map((item: any) => (item.id == roleID ? arr.push(item.name) : null));
  });

  return arr;
};
