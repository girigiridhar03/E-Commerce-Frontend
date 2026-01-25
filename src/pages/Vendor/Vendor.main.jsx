import VendorContainer from "@/components/ControlPanel/VendorContainer/SideNav";
import { userDetails } from "@/store/auth/auth.service";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const VendorMain = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userDetails());
  }, [dispatch]);

  return <VendorContainer />;
};

export default VendorMain;
