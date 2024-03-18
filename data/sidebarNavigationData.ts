import { FaUser } from 'react-icons/fa';
import { FaRegBuilding } from 'react-icons/fa';
import { RiTeamLine } from 'react-icons/ri';
import { AiOutlineStock } from 'react-icons/ai';
import { FaProjectDiagram } from 'react-icons/fa';
import { GiProgression } from 'react-icons/gi';
import { BsPieChart } from 'react-icons/bs';
import { SlPeople } from 'react-icons/sl';

export const sidebarNavigationData = [
  {
    title: 'Account',
    href: '/dashboard/account',
    icon: FaUser,
    role: [
      'Organization Administrator',
      'Employee',
      'Project Manager',
      'Department Manager',
    ],
  },
  {
    title: 'Departments',
    href: '/dashboard/departments',
    icon: FaRegBuilding,
    role: ['Organization Administrator', 'Department Manager'],
  },
  {
    title: 'Organization Members',
    href: '/dashboard/members',
    icon: RiTeamLine,
    role: ['Organization Administrator'],
  },
  {
    title: 'Team roles',
    href: '/dashboard/teamroles',
    icon: AiOutlineStock,
    role: ['Organization Administrator'],
  },
  {
    title: 'Projects',
    href: '/dashboard/project',
    icon: FaProjectDiagram,
    role: ['Project Manager', 'Employee'],
  },
  {
    title: 'Skills',
    href: '/dashboard/skills',
    icon: GiProgression,
    role: ['Department Manager'],
  },
  {
    title: 'Skills Statistics',
    href: '/dashboard/skill-statistics',
    icon: BsPieChart,
    role: ['Department Manager'],
  },
  {
    title: 'Department Members',
    href: '/dashboard/department-members',
    icon: SlPeople,
    role: ['Department Manager'],
  },
];
