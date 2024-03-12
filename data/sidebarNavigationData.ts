import { FaUser } from 'react-icons/fa';
import { FaRegBuilding } from 'react-icons/fa';
import { RiTeamLine } from 'react-icons/ri';
import { AiOutlineStock } from 'react-icons/ai';
import { FaProjectDiagram } from 'react-icons/fa';

export const sidebarNavigationData = [
  {
    title: 'Account',
    href: '/dashboard/account',
    icon: FaUser,
  },
  {
    title: 'Departments',
    href: '/dashboard/departments',
    icon: FaRegBuilding,
  },
  {
    title: 'Organization Members',
    href: '/dashboard/members',
    icon: RiTeamLine,
  },
  {
    title: 'Team roles',
    href: '/dashboard/teamroles',
    icon: AiOutlineStock,
  },
  {
    title: 'Projects',
    href: '/dashboard/project',
    icon: FaProjectDiagram,
  },
];
