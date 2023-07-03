
import { Route, Routes } from "react-router-dom";

import Sidebar from './components/Sidebar/Sidebar';

import Layout from './components/Layouts/Layout';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import CompagniePage from './pages/CompagniePage';

import './index.css';

const App = () => {
  return (
    <div className="app flex relative">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="dashboard/compagnie/:id" element={<CompagniePage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
