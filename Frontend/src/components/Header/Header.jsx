import React from 'react';

export default function Header() {
  return (
    <header className="container-fluid py-3 border-bottom bg-white ">
      <div className="d-flex justify-content-end align-items-center px-4">
    
        <div className="d-flex align-items-center gap-3">
          <i className="bi bi-gear fs-5 p-2 rounded-circle bg-light text-dark hover-shadow"></i>
          <i className="bi bi-bell fs-5 p-2 rounded-circle bg-light text-dark hover-shadow"></i>
          
    
          <img 
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" 
            alt="User" 
            className="rounded-circle" 
            width="40" 
            height="40" 
            style={{ objectFit: 'cover', border: '2px solid #dee2e6', cursor: 'pointer' }} 
          />
        </div>
      </div>
    </header>
  );
}
