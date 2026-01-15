import Nav from "@/components/Nav/Nav";
import { cartCount } from "@/store/cart/cart.service";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartCount());
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <div className="mx-auto max-w-7xl px-4 py-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
