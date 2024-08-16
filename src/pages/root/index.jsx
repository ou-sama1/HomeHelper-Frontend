import { Outlet } from "react-router-dom";
import "../../index.css";
import { Navbar } from "./components";

const RootLayout = () => {
  return (
    <main className="w-full">
        <Navbar />
        <Outlet />
        {/* Footer component goes here */}
    </main>
  );
};

export default RootLayout;