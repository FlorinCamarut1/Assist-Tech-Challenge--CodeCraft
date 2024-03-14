import { DepartmentType, UserType } from '@/types';
import { create } from 'zustand';

interface UserModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  data: {};
  setData: (data: UserType) => void;
}

const useUserModal = create<UserModalStore>((set) => ({
  isOpen: false,
  data: {},
  onOpen: () => set({ isOpen: true }),
  onClose: () => {
    set({ isOpen: false });
    set({ data: {} });
  },
  setData: (data) => set({ data: data }),
}));

export default useUserModal;
