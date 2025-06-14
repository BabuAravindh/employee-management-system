import React from 'react'
import './sidebar.css'
export default function Sidebar() {
  const navItems = [
    {icon:"grid",label:"dashboard"},
    {icon:"person-badge",label:"Employee"},
    {icon:"calendar4",label:"Orders"},
    {icon:"chat",label:"Products"}
  ]
  return (
      <div className="sidebar bg-white d-flex flex-column justify-content-between min-vh-100 p-3">
        <div>
          <div className="text-primary py-2 text-center mb-2 fs-4 fw-bold border-bottom">
            RS-TECH
          </div>
          <ul className="nav nav-pills flex-column">
           {navItems.map((item,index) => (
                <li key={index} className="nav-item my-1">
                    <a href="#" className="nav-link text-black d-flex align-items-center">
                      <i className={`bi bi-${item.icon}`}></i>
                      <span className="ms-3 d-none d-sm-inline">{item.label}</span>
                    </a>
                </li>
            ))}
          </ul>
        </div>
        <div className="dropdown open">
          <a  
          href='#'
          className="text-white text-decoration-none dropdown-toggle d-flex align-items-center"
          id="userDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          >
            <i className="bi bi-person-circle fs-5"></i>
            <span className="ms-2 d-none d-sm inline">
              Babu
            </span>
          </a>
          <div className="dropdown-menu" aria-labelledby='userDropdown'>
            <a href="#" className="dropdown-item">Profile</a>
            <a href="#" className="dropdown-item">Logout</a>
          </div>
        </div>
      </div>
  )
}
