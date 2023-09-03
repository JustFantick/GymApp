import { create } from 'zustand';

const store = (set, get) => ({
	variable: null,
});

export const useStore = create(store);