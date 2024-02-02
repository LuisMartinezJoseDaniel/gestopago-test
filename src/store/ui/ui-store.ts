import { create } from "zustand";

interface State {
  isModalOpen: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
}

export const useStore = create<State>()((set) => ({
  isModalOpen: false,
  openSideMenu: () => set({ isModalOpen: true }),
  closeSideMenu: () => set({ isModalOpen: false }),
}));
