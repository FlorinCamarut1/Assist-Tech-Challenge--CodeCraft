import { IconType } from 'react-icons/lib';

export type NavigationTypes = {
  title: string;
  href: string;
  isPublic?: boolean;
  onClick?: () => void;
};
export type SidebarNavTypes = {
  title: string;
  href: string;
  icon: IconType;
};
export type DepartmentType = {
  id: string;
  managerID: string;
  name: string;
  organizationID: string;
};

export type UserType = {
  email: string;
  password: string;
  name: string;
  organizationID: string;
  departmentID: string | undefined;
  projectIDs: string | undefined;
  skills: string | undefined;
  systemRoleIDs: [] | undefined;
  id: string;
};
export type SystemRoleType = {
  id: string;
  name: string;
};
export type TeamRoleType = {
  id: string;
  name: string;
  organizationID: string;
};
export type SkillCategoryType = {
  id: string;
  name: string;
  organizationID: string;
};

export type SkillType = {
  id: string;
  skillCategoryID: string;
  name: string;
  description: string;
  authorID: string;
  departmentID: string;
};
