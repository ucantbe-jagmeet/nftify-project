import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";

const SharedLayout = () => {
  return (
    <div className="flex">
      <Aside />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
