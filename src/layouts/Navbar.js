import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-5 shadow-md bg-white">
      <div className="w-9/12 mx-auto flex justify-between">
        <div>
          <img src="/assets/SkinClinic.png" alt="furniture logo" />
        </div>
        <div>
          <ul className="flex gap-6 text-sm">
            <li className="cursor-pointer hover:text-blue-800">
              <a href="/">Home</a>
            </li>
            <li className="cursor-pointer hover:text-blue-800">
              <a href="/">Services</a>
            </li>
            <li className="cursor-pointer hover:text-blue-800">
              <a href="/">Doctors</a>
            </li>
            <li className="cursor-pointer hover:text-blue-800">
              <a href="/">Products</a>
            </li>
            <li className="cursor-pointer hover:text-blue-800">
              <a href="/">Gallery</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
