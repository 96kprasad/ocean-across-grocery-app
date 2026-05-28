export enum ProductCategory {
  Fruits = "Fruits",
  Vegetables = "Vegetables",
  Dairy = "Dairy",
  Bakery = "Bakery",
  Beverages = "Beverages",
  Snacks = "Snacks",
  Meat = "Meat",
  Frozen = "Frozen",
}

export enum OrderStatus {
  Pending = "Pending",
  Confirmed = "Confirmed",
  Processing = "Processing",
  OutForDelivery = "OutForDelivery",
  Delivered = "Delivered",
  Failed = "Failed",
  Cancelled = "Cancelled",
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: ProductCategory;
  unit: string;
  inStock: boolean;
  rating: number;
  reviewCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  location?: UserLocation;
}

export interface UserLocation {
  label: string;
  address: string;
  lat?: number;
  lng?: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  createdAt: string;
  address: string;
}

export interface Category {
  id: string;
  name: ProductCategory;
  icon: string;
  color: string;
}
