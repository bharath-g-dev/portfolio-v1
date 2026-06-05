import { create } from "zustand";

interface Store {
  activeMilestone: any;
  setActiveMilestone: (value: any) => void;
}

export const usePortfolioStore = create<Store>(
  (set) => ({
    activeMilestone: null,

    setActiveMilestone: (value) =>
      set({ activeMilestone: value })
  })
);