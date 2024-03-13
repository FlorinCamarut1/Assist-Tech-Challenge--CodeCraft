export const checkIsAdmin = (data: any) => {
  const isAdmin = data?.find((id: any) => id === '65ea4a36ba72b235486cbcc9');

  if (isAdmin) {
    return { status: true, title: 'Organization Administrator' };
  } else {
    return false;
  }
};
export const checkIsEmployee = (data: any) => {
  const isAdmin = data?.find((id: any) => id === '65e503afb3a2c9268b0f2f5e');

  if (isAdmin) {
    return { status: true, title: 'Employee' };
  } else {
    return false;
  }
};
export const checkIsProjectManager = (data: any) => {
  const isAdmin = data?.find((id: any) => id === '65ea4a3eba72b235486cbcca');

  if (isAdmin) {
    return { status: true, title: 'Project Manager' };
  } else {
    return false;
  }
};
export const checkIsDepartmentManager = (data: any) => {
  const isAdmin = data?.find((id: any) => id === '65ea4a44ba72b235486cbccb');

  if (isAdmin) {
    return { status: true, title: 'Department Manager' };
  } else {
    return false;
  }
};
