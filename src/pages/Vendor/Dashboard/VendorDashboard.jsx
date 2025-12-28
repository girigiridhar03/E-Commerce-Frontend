import InfoCards from "@/components/Vendor/Dashboard/InfoCards";
import OrdersTable from "@/components/Vendor/Dashboard/OrdersTable";

const VendorDashboard = () => {
  return (
    <div className="flex flex-col gap-5">
      <InfoCards />
      <OrdersTable />
    </div>
  );
};

export default VendorDashboard;
