import { setCookie } from 'cookies-next';

export const setSession = (data: any) => {
  const session = setCookie('session', data);

  return session;
};
