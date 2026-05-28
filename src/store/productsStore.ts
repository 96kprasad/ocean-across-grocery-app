import { create } from "zustand";
import type { Product } from "../types";
import { ProductCategory } from "../types";
import { products as mockProducts } from "../data/products";

interface ProductsStore {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
  selectedCategory: ProductCategory | null;
  fetchProducts: () => Promise<void>;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: ProductCategory | null) => void;
  getByCategory: (category: ProductCategory) => Product[];
  getById: (id: string) => Product | undefined;
}

export const useProductsStore = create<ProductsStore>((set, get) => ({
  products: [],
  isLoading: false,
  error: null,
  searchQuery: "",
  selectedCategory: null,

  fetchProducts: async () => {
    set({ isLoading: true, error: null });
    try {
      await new Promise((r) => setTimeout(r, 800));
      set({ products: mockProducts, isLoading: false });
    } catch {
      set({ isLoading: false, error: "Failed to load products. Please try again." });
    }
  },

  setSearchQuery: (query) => set({ searchQuery: query }),

  setSelectedCategory: (category) => set({ selectedCategory: category }),

  getByCategory: (category) =>
    get().products.filter((p) => p.category === category),

  getById: (id) => get().products.find((p) => p.id === id),
}));
