import { create } from 'zustand';

interface User {
    id?: string;
    email?: string;
    name?: string;
    image?:string;
    isAuthenticated: boolean;
}

interface UserStore {
    user: User;
    setUser: (user: User) => void;
    clearUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
    user: {
        isAuthenticated: false,
    },
    setUser: (user: User) => set({ user }),
    clearUser: () => set({
        user: {
            isAuthenticated: false,
        },
    }),
}));