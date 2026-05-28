# 🛒 Nectar — Online Grocery Delivery App

A fully responsive grocery delivery web application built with React, TypeScript, Tailwind CSS, and Zustand. Converted from a Figma mobile-first design into a production-ready UI with complete desktop layouts.

---

## 🚀 Live Demo

> [Deploy link here — Vercel / Netlify]

---

## 📸 Screens

| Auth & Onboarding | Main App | Checkout |
|---|---|---|
| Splash Screen | Home | Checkout |
| Onboarding / Welcome | Category Listing | Order Success |
| Phone Number Entry | Product Details | Order Failure |
| OTP Verification | Search | |
| Location Selection | Filters | |
| Login | Cart | |
| Sign Up | Favourites | |
| | Account | |

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| React 19 + Vite | Frontend framework & build tool |
| TypeScript (strict) | Type safety |
| Tailwind CSS v4 | Utility-first styling |
| Zustand | Global state management |
| React Router v7 | Client-side routing |
| Lucide React | Icons |

---

## 📁 Project Structure

```
src/
├── assets/              # Static assets
├── components/
│   ├── common/          # Reusable components (Skeleton, CategoryIcon)
│   ├── layout/          # Layout components
│   └── product/         # ProductCard component
├── data/
│   └── products.ts      # Mock data (40 products, 8 categories)
├── layouts/
│   └── MainLayout.tsx   # Bottom nav (mobile) + Top nav (desktop)
├── pages/
│   ├── auth/            # Splash, Onboarding, Phone, OTP, Location, Login, SignUp
│   ├── cart/            # Cart page
│   ├── checkout/        # Checkout, Order Success, Order Failure
│   ├── home/            # Home, Favorites, Account
│   └── product/         # Explore, Category, Product Detail, Search, Filters
├── routes/
│   └── AppRoutes.tsx    # All routes + Protected route
├── store/
│   ├── authStore.ts     # Auth state (Zustand)
│   ├── cartStore.ts     # Cart state (Zustand)
│   ├── favoritesStore.ts# Favorites state (Zustand)
│   └── productsStore.ts # Products state (Zustand)
├── types/
│   └── index.ts         # Interfaces & Enums
├── App.tsx
└── main.tsx
```

---

## 🗂 State Management (Zustand)

| Store | Responsibility |
|---|---|
| `authStore` | User auth, login, signup, logout |
| `cartStore` | Add/remove/update cart items, totals |
| `favoritesStore` | Toggle & list favorite products |
| `productsStore` | Fetch products, search query, error/loading state |

---

## 📱 Responsive Design

### Mobile (Primary)
- Matches Figma design closely
- Bottom navigation bar (Shop, Explore, Cart, Favourite, Account)
- Card-based product layout
- Mobile-first spacing and hierarchy

### Desktop
- Split layout on auth pages (branding left, form right)
- `max-w-7xl` container
- Top navigation bar
- Product grid — minimum 4 columns
- Category / filter sidebar on Explore & Category pages
- Sticky cart summary on Checkout page

---

## 🔷 TypeScript

```ts
// Interfaces
interface Product { ... }
interface CartItem { ... }
interface User { ... }
interface Order { ... }

// Enums
enum ProductCategory { Fruits, Vegetables, Dairy, Bakery, Beverages, Snacks, Meat, Frozen }
enum OrderStatus { Pending, Confirmed, Processing, OutForDelivery, Delivered, Failed, Cancelled }
```

---

## ✨ UX & Quality Features

- ✅ **Skeleton loaders** — animated placeholders while products load
- ✅ **Empty states** — cart, favorites, search, category
- ✅ **Error states** — fetch failure with retry button
- ✅ **Debounced search** — 300ms debounce on search input
- ✅ **Keyboard accessibility** — `aria-label`, `aria-expanded`, `aria-hidden`
- ✅ **Smooth transitions** — `transition-colors`, `transition-opacity` throughout

---

## 🔐 Auth Flow

```
/ (Splash)
  → /onboarding
    → /phone
      → /otp
        → /location
          → /login or /signup
            → /home (Protected)
```

> All routes under `/home` are protected. Unauthenticated users are redirected to `/login`.

---

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📊 Mock Data

- **40 products** across 8 categories
- **8 categories**: Fruits, Vegetables, Meat, Bakery, Dairy, Beverages, Snacks, Frozen
- Images from [Unsplash](https://unsplash.com)
- API calls simulated with `setTimeout`

---

## 📋 Requirements Checklist

- [x] React + Vite + TypeScript (strict)
- [x] Tailwind CSS — utility-first, no inline styles
- [x] Zustand — separate stores, no Redux/Context API
- [x] React Router — all screens implemented
- [x] Mobile-first responsive design
- [x] Desktop layout with sidebar & grid
- [x] All Figma screens implemented
- [x] Mock JSON data with simulated API
- [x] TypeScript interfaces & enums
- [x] No TypeScript errors
- [x] Skeleton loaders, empty states, error states
- [x] Debounced search
- [x] Keyboard accessibility
- [x] Smooth UI transitions

---

## 👨‍💻 Author

Built as part of the **Ocean Across Frontend Developer Assignment**.
