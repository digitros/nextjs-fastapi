import React from "react";
export const Navbar = () => {
  return (
    <div className="w-4/5 mx-auto bg-green-600 justify-between h-16 text-white rounded">
      <ul className="flex justify-center py-5">
        <li>
          <a href="#" className="hover:bg-white p-2 hover:text-green-400">
            Home
          </a>
        </li>
        <li>
          <a href="dine-in" className="hover:bg-white p-2 hover:text-green-400">
            Dine-In
          </a>
        </li>
        <li>
          <a
            href="reservations"
            className="hover:bg-white p-2 hover:text-green-400"
          >
            Reservations
          </a>
        </li>
      </ul>
    </div>
  );
};
