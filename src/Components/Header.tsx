import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router";
import react from "../assets/react.svg";

interface HeaderProps {
  cartCount?: number;
}

const Header = ({ cartCount }: HeaderProps) => {
  const linkStyle = "no-underline text-gray-700 font-medium";
  const activeStyle = "text-black font-bold";

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200">
      <div className="text-2xl font-bold cursor-pointer tracking-wide">
        <img src={react} alt="Company logo" className="h-10 w-auto" />
      </div>

      <nav className="flex gap-6 text-base">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Products
        </NavLink>

        <NavLink
          to="/ProductList"
          className={({ isActive }) => (isActive ? activeStyle : linkStyle)}
        >
          Menu
        </NavLink>
      </nav>
      <div className="relative cursor-pointer">
        <FiShoppingCart className="text-2xl text-gray-700" />

        <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs px-2 py-0.5">
          {cartCount}
        </span>
      </div>
    </header>
  );
};

export default Header;
