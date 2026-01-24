import InfoCards from "@/components/ControlPanel/Dashboard/InfoCards";
import OrdersTable from "@/components/ControlPanel/Dashboard/OrdersTable";

const VendorDashboard = () => {
  return (
    <div className="flex flex-col gap-5">
      <InfoCards />
      <OrdersTable />
    </div>
  );
};

export default VendorDashboard;
