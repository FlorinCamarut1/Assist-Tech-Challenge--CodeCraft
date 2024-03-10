import { FaUser } from 'react-icons/fa';
import { FaRegBuilding } from 'react-icons/fa';
import { RiTeamLine } from 'react-icons/ri';
import { AiOutlineStock } from 'react-icons/ai';

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
    title: 'Organizatio Members',
    href: '/dashboard/members',
    icon: RiTeamLine,
  },
  {
    title: 'Team roles',
    href: '/dashboard/teamroles',
    icon: AiOutlineStock,
  },
];
