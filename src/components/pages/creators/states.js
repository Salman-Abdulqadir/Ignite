import { create } from "zustand";

export const useCreators = create((set) => ({
  creators: [],
  query: {
    page: 1,
    page_size: 10,
    count: 0,
  },
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
}));
