// src/store/newsStore.js

import create from 'zustand';

const useNewsStore = create((set) => ({
  news: [],
  setNews: (data) => {
    console.log('Setting news with:', data); 
    set({ news: data });
  },
  
}));

export default useNewsStore;
