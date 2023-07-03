import Menu from '../Menu/Menu';
import './Sidebar.css';

const Sidebar = () => {

  return <div className="sidebar flex flex-col justify-between h-screen">
    <Menu />
  </div>
}

export default Sidebar;