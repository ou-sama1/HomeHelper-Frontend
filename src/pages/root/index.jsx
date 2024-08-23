import { Outlet } from "react-router-dom";
import { Navbar } from "./components";
import { Footer } from "./components";

const RootLayout = () => {
  return (
    <main className="w-full">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default RootLayout;
