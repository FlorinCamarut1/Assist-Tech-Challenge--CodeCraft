export const navigationData = [
  {
    title: 'Home',
    href: '/',
    isPublic: true,
  },
  {
    title: 'Dashboard',
    href: '/dashboard/account',
    isPublic: false,
  },
  {
    title: 'Logout',
    href: '*',
    isPublic: false,
    onClick: () => {},
  },
  {
    title: 'About',
    href: '/about',
    isPublic: true,
  },
  {
    title: 'Register',
    href: '/register',
    isPublic: true,
  },
  {
    title: 'Login',
    href: '/login',
    isPublic: true,
  },
];
