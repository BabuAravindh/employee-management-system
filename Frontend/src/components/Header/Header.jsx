import React from 'react'

export default function Header() {
  return (
   <header className="container-fluid py-3 border-bottom h-6">
    <div className="d-flex justify-content-end align-items-center px-4 gap-4">
      <i className="bi bi-gear fs-4 text-secondary"></i>
      <i className="bi bi-bell fs-4 text-secondary cursor-pointer"></i>
      <i className="bi bi-person-circle fs-4 text-secondary cursor-pointer"></i>
    </div>
   </header>
  )
}
