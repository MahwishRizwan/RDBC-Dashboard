import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-5xl font-serif">RBAC Dashboard</h1>
      <p className="mt-5 text-xl">Welcome to the Role-Based Access Control system!</p>
      <nav>
        <ul>
          <li className="text-xl mt-5 text-blue-700">
            <Link to="/users">Manage Users</Link>
          </li>
          <li className="text-xl mt-3 text-blue-700">
            <Link to="/roles">Manage Roles</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
