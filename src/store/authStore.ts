import { create } from "zustand";
import type { User } from "../types";

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  phone: string;
  isLoading: boolean;
  setPhone: (phone: string) => void;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string, phone: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  phone: "",
  isLoading: false,

  setPhone: (phone) => set({ phone }),

  login: async (email, _password) => {
    set({ isLoading: true });
    await new Promise((r) => setTimeout(r, 1000));
    set({
      isLoading: false,
      isAuthenticated: true,
      user: {
        id: "1",
        name: "User",
        email,
        phone: "",
        location: { label: "Dhaka, Banasree", address: "Banasree, Dhaka" },
      },
    });
  },

  signup: async (name, email, _password, phone) => {
    set({ isLoading: true });
    await new Promise((r) => setTimeout(r, 1000));
    set({
      isLoading: false,
      isAuthenticated: true,
      user: { id: "1", name, email, phone },
    });
  },

  logout: () => set({ user: null, isAuthenticated: false }),

  setUser: (user) => set({ user, isAuthenticated: true }),
}));
