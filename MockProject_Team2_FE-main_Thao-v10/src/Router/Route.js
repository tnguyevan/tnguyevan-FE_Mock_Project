import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import ProductDetail from "../Page/ProductDetail";

import SignIn from "../Page/SignIn";
import SignUp from "../Page/SignUp";
import ResetPassword from "../Page/ResetPassword";
import ErrorPage from "../Page/ErrorPage";
import CatalogFilterPage from "../Page/CatalogFilterPage";
import UserProfile from "../Page/UserProfile";
import CartPage from "../Page/CartPage";
import DeliveryPage from "../Page/DeliveryPage";
import AdminPage from "../Page/AdminPage";
let routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products/:id" element={<ProductDetail />} />
    <Route path="/catalog/:id" element={<CatalogFilterPage />} />
    <Route path="/userProfile" element={<UserProfile />} />
    {/* <Route path="*" element={<Error />} /> */}
    <Route path="/carts" element={<CartPage />} />
    <Route path="/delivery" element={<DeliveryPage />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/resetPassword" element={<ResetPassword />} />
    <Route path="/error" element={<ErrorPage />} />
    <Route path="/admin" element={<AdminPage />} />
  </Routes>
);

export { routes };
