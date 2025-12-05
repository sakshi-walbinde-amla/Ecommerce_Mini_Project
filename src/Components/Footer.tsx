import React from "react";
import { NavLink } from "react-router";
import react from "../assets/react.svg";

const Footer = () => {
  const linkStyle =
    "no-underline text-gray-600 hover:text-black transition";
  const activeStyle =
    "font-bold text-black";

  return (
    <footer className="flex justify-around items-center p-5 bg-gray-100">
      <div>
        <img
          src={react}
          alt="Company logo"
          className="h-10 w-auto"
        />
      </div>
      <nav aria-label="Footer Navigation">
        <ul className="flex flex-col gap-2">
          <li>
            <NavLink
              to="/AboutUs"
              className={({ isActive }) =>
                isActive ? activeStyle : linkStyle
              }
            >
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive ? activeStyle : linkStyle
              }
            >
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Help"
              className={({ isActive }) =>
                isActive ? activeStyle : linkStyle
              }
            >
              Help
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
