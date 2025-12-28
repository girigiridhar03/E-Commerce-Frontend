import Nav from "@/components/Nav/Nav";
import { Outlet } from "react-router-dom";

const Main = () => {
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
