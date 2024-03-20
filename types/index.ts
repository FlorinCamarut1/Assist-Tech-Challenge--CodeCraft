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
  role: string[];
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
export type ProjectType = {
  id: string;
  name: string;
  period: string;
  startDate: string;
  deadlineDate: string;
  status: string;
  description: string;
  skillRequirements: [];
  technologyStack: [];
  projectManagerID: string;
  organizationID: string;
  projectRoles: [];
};
export type ProposalType = {
  accepted: boolean;
  id: string;
  projectID: string;
  teamRoleIDs: string[];
  userID: string;
  workHours: number;
  comments: string;
  deallocationReason: string;
};
