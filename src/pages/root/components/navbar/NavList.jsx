import { NavLink } from "react-router-dom";
import "../../../../index.css";

const NavList = () => {
  return (
    <div className="xl:items-between mt-4 flex flex-col rounded-xl border border-gray-100 bg-gray-50 p-4 xl:mt-0 xl:flex-row xl:space-x-8 xl:border-0 xl:bg-white xl:p-0 rtl:space-x-reverse">
      <ul className="flex flex-col xl:flex-row xl:items-center xl:space-x-8 xl:border-0 xl:bg-white xl:p-0 rtl:space-x-reverse">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block rounded-lg px-3 py-2 underline-offset-8 transition hover:bg-gray-100 xl:bg-transparent xl:px-0 xl:py-2 xl:hover:bg-transparent xl:hover:underline ${isActive ? "bg-gray-100 xl:bg-transparent xl:underline" : ""}`
            }
          >
            Acceuil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="services"
            className={({ isActive }) =>
              `block rounded-lg px-3 py-2 underline-offset-8 transition hover:bg-gray-100 xl:bg-transparent xl:px-0 xl:py-2 xl:hover:bg-transparent xl:hover:underline ${isActive ? "bg-gray-100 xl:bg-transparent xl:underline" : ""}`
            }
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            className={({ isActive }) =>
              `block rounded-lg px-3 py-2 underline-offset-8 transition hover:bg-gray-100 xl:bg-transparent xl:px-0 xl:py-2 xl:hover:bg-transparent xl:hover:underline ${isActive ? "bg-gray-100 xl:bg-transparent xl:underline" : ""}`
            }
          >
            À propos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              `block rounded-lg px-3 py-2 underline-offset-8 transition hover:bg-gray-100 xl:bg-transparent xl:px-0 xl:py-2 xl:hover:bg-transparent xl:hover:underline ${isActive ? "bg-gray-100 xl:bg-transparent xl:underline" : ""}`
            }
          >
            Contactez-nous
          </NavLink>
        </li>
      </ul>
      <ul className="flex flex-col xl:flex-row">
        <li>
          <NavLink
            to="login"
            className="block rounded-lg px-3 py-2 transition hover:bg-gray-100 xl:ml-5 xl:border xl:border-primary xl:px-10 xl:py-4 xl:font-bold xl:text-primary xl:hover:bg-tertiary xl:hover:text-white"
          >
            SE CONNECTER
          </NavLink>
        </li>
        <li>
          <NavLink
            to="signup"
            className="block rounded-lg px-3 py-2 transition hover:bg-gray-100 xl:ml-5 xl:border xl:bg-primary xl:px-10 xl:py-4 xl:font-bold xl:text-white xl:hover:bg-tertiary xl:hover:text-white"
          >
            S'INSCRIRE
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavList;
