import { create } from "zustand";
import type { Product } from "../types";

interface FavoritesStore {
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
  isFavorite: (productId: string) => boolean;
}

export const useFavoritesStore = create<FavoritesStore>((set, get) => ({
  favorites: [],

  toggleFavorite: (product) => {
    const exists = get().favorites.find((p) => p.id === product.id);
    set((s) => ({
      favorites: exists
        ? s.favorites.filter((p) => p.id !== product.id)
        : [...s.favorites, product],
    }));
  },

  isFavorite: (productId) => get().favorites.some((p) => p.id === productId),
}));
