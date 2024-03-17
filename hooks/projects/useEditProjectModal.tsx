import { ProjectType } from '@/types';
import { create } from 'zustand';

interface EditProjectModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  data: {};
  setData: (data: ProjectType) => void;
}

const useEditProjectModal = create<EditProjectModalStore>((set) => ({
  data: {},
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => {
    set({ isOpen: false });
    set({ data: {} });
  },
  setData: (data) => set({ data: data }),
}));

export default useEditProjectModal;
