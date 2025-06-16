import React, { useState } from 'react';

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('dashboard');

  const navItems = [
    { icon: "grid", label: "dashboard" },
    { icon: "person-badge", label: "Employee" },
    { icon: "calendar4", label: "Orders" },
    { icon: "chat", label: "Products" }
  ];

  return (
    <div className="sidebar bg-white d-flex flex-column min-vh-100 p-3">
      <h4 className="text-primary text-center mb-4 border-bottom py-3">RS-TECH</h4>
      <ul className="nav flex-column">
        {navItems.map((item, index) => (
          <li key={index} className="nav-item mb-2 ">
            <button
              className={`btn w-100 text-start fw-light sidebar-btn ${activeItem === item.label ? 'active' : ''}`}
              onClick={() => setActiveItem(item.label)}
            >
              <i className={`bi bi-${item.icon} me-2`}></i>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
