import create from "zustand";

export const useListedBikeStore = create((set) => ({
    show: false,
    toggleShow: () =>
        set((state) => {
            return { show: !state.show };
        }),
    dontShow: () => set({ show: false }),
    doShow: () => set({ show: true }),
}));
