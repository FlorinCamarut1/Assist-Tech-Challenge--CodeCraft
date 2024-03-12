import { deleteCookie } from 'cookies-next';

export const logOut = () => {
  deleteCookie('session');
};
