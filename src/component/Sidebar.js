import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  
  const links = [
    { path: "/", label: "Dashboard" },
    { path: "/users", label: "Users" },
    { path: "/roles", label: "Roles" },
    { path: "/permissions", label: "Permissions" },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h1 className="text-2xl mb-6">RBAC Dashboard</h1>
      <ul>
        {links.map((link) => (
          <li key={link.path} className="mb-4">
            <Link
              to={link.path}
              className={`block py-2 px-4 rounded ${
                location.pathname === link.path
                  ? "bg-blue-600 text-white font-bold" // Active link styling
                  : "hover:bg-gray-700"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

