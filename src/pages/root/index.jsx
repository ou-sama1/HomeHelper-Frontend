import { Outlet } from "react-router-dom";
import "../../index.css";

const RootLayout = () => {
  return (
    <main className="w-full">
        {/* Header component goes here */}
        <Outlet />
        {/* Footer component goes here */}
    </main>
  );
};

export default RootLayout;