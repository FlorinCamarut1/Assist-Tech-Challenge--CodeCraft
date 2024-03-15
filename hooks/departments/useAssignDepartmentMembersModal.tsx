import { DepartmentType } from '@/types';
import { create } from 'zustand';

interface AssignMembersDepartmentModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  data: {};
  setData: (data: DepartmentType) => void;
}

const useAssignDepartmentMembersModal =
  create<AssignMembersDepartmentModalStore>((set) => ({
    isOpen: false,
    data: {},
    onOpen: () => set({ isOpen: true }),
    onClose: () => {
      set({ isOpen: false });
      set({ data: {} });
    },
    setData: (data) => set({ data: data }),
  }));

export default useAssignDepartmentMembersModal;
