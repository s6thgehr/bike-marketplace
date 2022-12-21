import create from "zustand";

export const useBikeStore = create((set) => ({
    bikes: [],
    setBikes: (bikes) =>
        set(() => {
            return { bikes: bikes };
        }),
    addBike: (bike) =>
        set((state) => {
            return { bikes: [...state.bikes, bike] };
        }),
    editBike: (bike) =>
        set((state) => {
            return {
                bikes: state.bikes.map((b) => {
                    return b.id === bike.id ? bike : b;
                }),
            };
        }),
    removeBike: (id) =>
        set((state) => {
            return {
                bikes: state.bikes.filter((bike) => bike.id !== id),
            };
        }),
    publishBike: (id) =>
        set((state) => {
            return {
                bikes: state.bikes.map((bike) => {
                    if (bike.id === id) {
                        return {
                            ...bike,
                            itemState: "published",
                        };
                    } else {
                        return bike;
                    }
                }),
            };
        }),
    sellBike: (id) =>
        set((state) => {
            return {
                bikes: state.bikes.map((bike) => {
                    if (bike.id === id) {
                        return {
                            ...bike,
                            itemState: "sold",
                        };
                    } else {
                        return bike;
                    }
                }),
            };
        }),
}));
