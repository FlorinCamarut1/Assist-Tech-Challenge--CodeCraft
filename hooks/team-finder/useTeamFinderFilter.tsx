import { create } from 'zustand';

interface TeamFinderFilterStore {
  isOpenAI: boolean;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  data: {};
  setData: (data: any) => void;
  partiallyAvailable: boolean;
  projectsCloseToFinish: boolean;
  unavailable: boolean;
  available: boolean;
  pastExperience: boolean;
  weeks: number;
  setPartiallyAvailable: () => void;
  setProjectsCloseToFinish: () => void;
  setUnavailable: () => void;
  setAvailable: () => void;
  setPastExperience: () => void;
  setWeeks: (data: number) => void;
  setIsOpenAI: () => void;
}

const useTeamFinderFilter = create<TeamFinderFilterStore>((set) => ({
  isOpenAI: false,
  isOpen: false,
  data: {},
  partiallyAvailable: false,
  projectsCloseToFinish: false,
  unavailable: false,
  available: true,
  pastExperience: false,
  weeks: 0,

  setIsOpenAI: () =>
    set((prevState) => ({
      isOpenAI: !prevState.isOpenAI,
      partiallyAvailable: false,
      projectsCloseToFinish: false,
      unavailable: false,
      available: false,
      pastExperience: false,
      weeks: 0,
    })),
  setPartiallyAvailable: () =>
    set((prevState) => ({
      partiallyAvailable: !prevState.partiallyAvailable,

      isOpenAI: false,
      projectsCloseToFinish: false,
      unavailable: false,
      pastExperience: false,
      weeks: 0,
    })),
  setProjectsCloseToFinish: () =>
    set((prevState) => ({
      projectsCloseToFinish: !prevState.projectsCloseToFinish,
      partiallyAvailable: false,
      isOpenAI: false,
      unavailable: false,
      pastExperience: false,
      weeks: 0,
    })),
  setUnavailable: () =>
    set((prevState) => ({
      unavailable: !prevState.unavailable,
      projectsCloseToFinish: false,
      partiallyAvailable: false,
      isOpenAI: false,

      pastExperience: false,
      weeks: 0,
    })),
  setAvailable: () => set((prevState) => ({ available: !prevState.available })),
  setPastExperience: () =>
    set((prevState) => ({
      pastExperience: !prevState.pastExperience,
      projectsCloseToFinish: false,
      partiallyAvailable: false,
      isOpenAI: false,
      unavailable: false,

      weeks: 0,
    })),
  setWeeks: (data: number) => set({ weeks: data }),
  onOpen: () => set({ isOpen: true }),
  onClose: () => {
    set({ isOpen: false });
    set({ data: {} });
  },
  setData: (data) => set({ data: data }),
}));

export default useTeamFinderFilter;
// "partiallyAvailable": true,
//   "projectsCloseToFinish": true,
//   "unavailable": true,
//   "available": true,
//   "pastExperience": true,
