# 🛒 Nectar — Online Grocery Delivery App

A fully responsive grocery delivery web application built with React, TypeScript, Tailwind CSS, and Zustand. Converted from a Figma mobile-first design into a production-ready UI with complete desktop layouts.

---

## 🚀 Live Demo

> https://ocean-across-grocery-app.vercel.app

---

## 📸 Screens

| Auth & Onboarding    | Main App         | Checkout      |
| -------------------- | ---------------- | ------------- |
| Splash Screen        | Home             | Checkout      |
| Onboarding / Welcome | Category Listing | Order Success |
| Phone Number Entry   | Product Details  | Order Failure |
| OTP Verification     | Search           |               |
| Location Selection   | Filters          |               |
| Login                | Cart             |               |
| Sign Up              | Favourites       |               |
|                      | Account          |               |

---

## 🛠 Tech Stack

| Technology          | Purpose                         |
| ------------------- | ------------------------------- |
| React 19 + Vite     | Frontend framework & build tool |
| TypeScript (strict) | Type safety                     |
| Tailwind CSS v4     | Utility-first styling           |
| Zustand             | Global state management         |
| React Router v7     | Client-side routing             |
| Lucide React        | Icons                           |

---

## 📁 Project Structure

```bash
src/
├── assets/              # Static assets
├── components/
│   ├── common/          # Reusable components
│   ├── layout/          # Layout components
│   └── product/         # Product components
├── data/
│   └── products.ts      # Mock data
├── layouts/
│   └── MainLayout.tsx
├── pages/
│   ├── auth/
│   ├── cart/
│   ├── checkout/
│   ├── home/
│   └── product/
├── routes/
│   └── AppRoutes.tsx
├── services/            # API service layer (scalable architecture)
├── store/
│   ├── authStore.ts
│   ├── cartStore.ts
│   ├── favoritesStore.ts
│   └── productsStore.ts
├── types/
│   └── index.ts
├── utils/
│   └── validation/      # Reusable validation utilities
├── App.tsx
└── main.tsx
```

---

## 🗂 State Management (Zustand)

| Store            | Responsibility                   |
| ---------------- | -------------------------------- |
| `authStore`      | User auth, login, signup, logout |
| `cartStore`      | Add/remove/update cart items     |
| `favoritesStore` | Manage favorite products         |
| `productsStore`  | Products, loading, error, search |

---

## 📱 Responsive Design

### Mobile (Primary)

* Matches Figma design closely
* Bottom navigation bar
* Card-based product layout
* Mobile-first spacing and hierarchy

### Desktop

* Split layout on auth pages
* `max-w-7xl` responsive container
* Top navigation bar
* Product grid layout
* Sidebar filters
* Sticky checkout summary

---

## 🔷 TypeScript

```ts
interface Product { ... }
interface CartItem { ... }
interface User { ... }
interface Order { ... }

enum ProductCategory {
  Fruits,
  Vegetables,
  Dairy,
  Bakery,
  Beverages,
  Snacks,
  Meat,
  Frozen
}

enum OrderStatus {
  Pending,
  Confirmed,
  Processing,
  OutForDelivery,
  Delivered,
  Failed,
  Cancelled
}
```

---

## ✨ UX & Quality Features

* ✅ Skeleton loaders
* ✅ Empty states
* ✅ Error states with retry actions
* ✅ Debounced search (300ms)
* ✅ Keyboard accessibility
* ✅ Smooth UI transitions
* ✅ Responsive mobile-first UI
* ✅ Desktop optimized layouts
* ✅ Reusable component architecture
* ✅ Type-safe application structure

---

## ✅ Form Validation

* Added validation for:

  * Sign In form
  * Sign Up form

* Validation currently works on:

  * `onSubmit`

* The architecture is reusable and scalable, allowing validations to be added using:

  * `onBlur`
  * `onChange`
  * custom validation handlers

### Supported Validation Types

* Required field validation
* Email validation
* Password strength validation
* Confirm password validation
* Min / max length validation
* URL validation
* Date validation

---

## 🔐 Auth Flow

```bash
/ (Splash)
  → /onboarding
    → /phone
      → /otp
        → /location
          → /login or /signup
            → /home (Protected)
```

All routes under `/home` are protected.

Unauthenticated users are redirected to `/login`.

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

* 40+ products
* 8 categories
* Images from Unsplash
* API simulation using `setTimeout`

Categories:

* Fruits
* Vegetables
* Meat
* Bakery
* Dairy
* Beverages
* Snacks
* Frozen

---

## 🌐 API Integration Ready

Although API integration was not part of the assignment requirements, the application architecture is designed to support scalable backend integration.

A dedicated service layer can be implemented for:

* Authentication
* Products
* Cart
* Orders
* Favorites

API calls can be handled using:

* `fetch`
* `axios`
* `React Query`
* `RTK Query`

The implementation choice depends on project requirements and scalability needs.

For applications requiring:

* caching
* background refetching
* request deduplication
* optimistic updates
* advanced server-state management

`React Query` or `RTK Query` would be the preferred solution.

---

## 🔒 Security Improvements

Authentication can be further enhanced with production-grade security features such as:

* Access Token & Refresh Token authentication
* Automatic token refresh
* Retry mechanism on token expiration
* Secure route protection
* Persistent authentication
* Role-based access control (RBAC)
* API interceptors
* Session expiration handling
* Secure token storage

---

## ⚡ Possible Future Enhancements

* Real backend integration
* Payment gateway integration
* Product reviews & ratings
* Wishlist synchronization
* Pagination / infinite scrolling
* Dark mode support
* Internationalization (i18n)
* Unit & integration testing
* Progressive Web App (PWA)
* Offline cart persistence
* Lazy loading & code splitting
* CI/CD pipeline
* Docker support
* Push notifications
* Analytics integration
* Admin dashboard
* Real-time order tracking

---

## 📋 Requirements Checklist

* [x] React + Vite + TypeScript
* [x] Tailwind CSS
* [x] Zustand state management
* [x] React Router implementation
* [x] Mobile-first responsive design
* [x] Desktop layouts implemented
* [x] All Figma screens completed
* [x] Mock API simulation
* [x] TypeScript interfaces & enums
* [x] Form validation
* [x] Skeleton loaders
* [x] Error states
* [x] Empty states
* [x] Debounced search
* [x] Accessibility improvements
* [x] Smooth transitions
* [x] Reusable architecture

---

## 👨‍💻 Author

Built as part of the **Ocean Across Frontend Developer Assignment**.
