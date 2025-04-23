
import { create } from 'zustand'


export const useCart = create((set) => ({
    addedItemIds: [],
    toggleCartButton:(id) => {
        set((state) => {
            const isAlreadyAdded = state.addedItemIds.includes(id);
            return {
              ...state,
              addedItemIds: isAlreadyAdded ? state.addedItemIds.filter((item) => item !== id) // Remove if exists
                : [...state.addedItemIds, id], // Add if not exists
            };
          });
    },

    clearAll: () => set({ addedItemIds: [] }),
}))