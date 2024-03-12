import { getCookie } from 'cookies-next';

export const getSession = () => {
  const session = getCookie('session');

  if (!session) return;
  return JSON.parse(session);
};
