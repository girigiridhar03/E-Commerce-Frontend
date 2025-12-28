import Home from "@/pages/Home/Home";
import Main from "@/pages/Main/Main";
import VendorCreateProduct from "@/pages/Vendor/CreateProduct/VendorCreateProduct";
import VendorDashboard from "@/pages/Vendor/Dashboard/VendorDashboard";
import VendorDeliveryPartner from "@/pages/Vendor/DeliveryPartner/VendorDeliveryPartner";
import VendorOrders from "@/pages/Vendor/Orders/VendorOrders";
import VendorProducts from "@/pages/Vendor/Products/VendorProducts";
import VendorMain from "@/pages/Vendor/Vendor.main";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route element={<VendorMain />}>
        <Route path="/vendor/dashboard" element={<VendorDashboard />} />
        <Route path="/vendor/orders" element={<VendorOrders />} />
        <Route
          path="/vendor/delivery-partner"
          element={<VendorDeliveryPartner />}
        />
        <Route path="/vendor/products" element={<VendorProducts />} />
        <Route
          path="/vendor/new-product"
          element={<VendorCreateProduct />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
