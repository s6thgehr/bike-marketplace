import create from "zustand";

export const useUserStore = create((set) => ({
    users: [],
    isLoggedIn: false,
    loggedInUserId: -1,
    setUsers: (users) =>
        set((state) => {
            return { users: users };
        }),
    addUser: (user) =>
        set((state) => {
            return { users: [...state.users, user] };
        }),
    removeUser: (id) =>
        set((state) => {
            return {
                users: state.users.filter((user) => {
                    return user.id !== id;
                }),
            };
        }),
    login: (id) =>
        set({
            isLoggedIn: true,
            loggedInUserId: id,
        }),
    logout: () =>
        set({
            isLoggedIn: false,
            loggedInUserId: -1,
        }),
}));
