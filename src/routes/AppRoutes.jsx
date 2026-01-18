import Auth from "@/pages/Auth/Auth";
import Cart from "@/pages/Cart/Cart";
import Home from "@/pages/Home/Home";
import Main from "@/pages/Main/Main";
import ProductDetails from "@/pages/Product/ProductDetails";
import Products from "@/pages/Product/Products";
import VendorCreateProduct from "@/pages/Vendor/CreateProduct/VendorCreateProduct";
import VendorDashboard from "@/pages/Vendor/Dashboard/VendorDashboard";
import VendorDeliveryPartner from "@/pages/Vendor/DeliveryPartner/VendorDeliveryPartner";
import VendorOrders from "@/pages/Vendor/Orders/VendorOrders";
import VendorProducts from "@/pages/Vendor/Products/VendorProducts";
import VendorMain from "@/pages/Vendor/Vendor.main";
import { Route, Routes } from "react-router-dom";
import RoleRoute from "./RoleRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <RoleRoute allowedRoles={["user", "delivery-man", "admin", "vendor"]}>
            <Main />
          </RoleRoute>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/:slug/:productId/:variantId"
          element={<ProductDetails />}
        />
        <Route path="/cart" element={<Cart />} />
      </Route>

      <Route path="/signin" element={<Auth />} />
      <Route path="/signup" element={<Auth />} />

      <Route
        element={
          <RoleRoute allowedRoles={["vendor"]}>
            <VendorMain />
          </RoleRoute>
        }
      >
        <Route path="/vendor/dashboard" element={<VendorDashboard />} />
        <Route path="/vendor/orders" element={<VendorOrders />} />
        <Route
          path="/vendor/delivery-partner"
          element={<VendorDeliveryPartner />}
        />
        <Route path="/vendor/products" element={<VendorProducts />} />
        <Route path="/vendor/new-product" element={<VendorCreateProduct />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
