import "../index.css";
import SignupImage from "../assets/group-of-workers.png";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex w-full flex-row items-center justify-center gap-10 px-1 xl:px-20">
      <img src={SignupImage} alt="signup image" className="xl:w-160 w-120 hidden lg:block" />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
