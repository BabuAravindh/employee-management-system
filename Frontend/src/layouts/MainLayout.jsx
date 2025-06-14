import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
   <div className="d-flex">
    <Sidebar/>
    <div className="flex-grow-1">
        <Header/>
        <main className="p-3">
            <Outlet/>
        </main>
    </div>
   </div>
  )
}
