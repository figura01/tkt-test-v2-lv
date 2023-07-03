import { Outlet } from "react-router-dom"

import './Layout.css'

const Layout = ({children}) => {
  return <div className="layout flex">
    <main className="main flex w-auto">
      <Outlet />
      {children}
    </main>
  </div>
}

export default Layout
