import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

import SplashPage from "../pages/auth/SplashPage";
import OnboardingPage from "../pages/auth/OnboardingPage";
import PhoneNumberPage from "../pages/auth/PhoneNumberPage";
import OtpPage from "../pages/auth/OtpPage";
import LocationPage from "../pages/auth/LocationPage";
import LoginPage from "../pages/auth/LoginPage";
import SignUpPage from "../pages/auth/SignUpPage";

import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/home/HomePage";
import ExplorePage from "../pages/product/ExplorePage";
import CategoryPage from "../pages/product/CategoryPage";
import ProductDetailPage from "../pages/product/ProductDetailPage";
import SearchPage from "../pages/product/SearchPage";
import FiltersPage from "../pages/product/FiltersPage";
import CartPage from "../pages/cart/CartPage";
import FavoritesPage from "../pages/home/FavoritesPage";
import AccountPage from "../pages/home/AccountPage";
import CheckoutPage from "../pages/checkout/CheckoutPage";
import OrderSuccessPage from "../pages/checkout/OrderSuccessPage";
import OrderFailurePage from "../pages/checkout/OrderFailurePage";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* Auth & Onboarding */}
      <Route path="/" element={<SplashPage />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route path="/phone" element={<PhoneNumberPage />} />
      <Route path="/otp" element={<OtpPage />} />
      <Route path="/location" element={<LocationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />

      {/* Main App */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="explore" element={<ExplorePage />} />
        <Route path="category/:categoryName" element={<CategoryPage />} />
        <Route path="product/:id" element={<ProductDetailPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="filters" element={<FiltersPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="order-success" element={<OrderSuccessPage />} />
        <Route path="order-failure" element={<OrderFailurePage />} />
      </Route>
    </Routes>
  );
}
