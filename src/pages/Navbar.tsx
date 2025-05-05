// import React from 'react'
import { Button } from "../components/ui/button";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    // shadow-md z-10
    <nav className="flex items-center justify-between p-4 shadow-md fixed top-0 left-0 right-0 bg-gray-800 text-white  z-10">
      <div className="text-xl font-bold">MyApp</div>
      <div className="space-x-4 hidden md:flex">
        <Button variant="ghost">
          <NavLink to="/">Home</NavLink>
        </Button>
        <Button variant="ghost">
          <NavLink to="/about">About</NavLink>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
