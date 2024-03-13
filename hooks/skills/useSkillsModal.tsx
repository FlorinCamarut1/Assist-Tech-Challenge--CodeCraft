import { SkillCategoryType } from '@/types';
import { create } from 'zustand';

interface SkillsModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  data: {};
  setData: (data: SkillCategoryType) => void;
}

const useSkillsModal = create<SkillsModalStore>((set) => ({
  isOpen: false,
  data: {},
  onOpen: () => set({ isOpen: true }),
  onClose: () => {
    set({ isOpen: false });
    set({ data: {} });
  },
  setData: (data) => set({ data: data }),
}));

export default useSkillsModal;
