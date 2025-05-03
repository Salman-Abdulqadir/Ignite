import { create } from "zustand";

const intialState = {
  creators: [],
  query: {
    page: 1,
    page_size: 10,
    count: 0,
  },
};
export const useCreators = create((set) => ({
  ...intialState,
  setCreators: (creators) => {
    set(() => ({
      creators,
    }));
  },
  setQuery: (query) => {
    set(() => ({
      query,
    }));
  },
  clearState: () => set(() => intialState),
}));
